// Vercel serverless function: POST /api/contact
// Saves the message to Supabase, then emails a notification through Resend.
// Secrets are read from Vercel environment variables (never exposed to the browser).
import type { VercelRequest, VercelResponse } from "@vercel/node";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body ?? {};

  // Honeypot: real visitors never fill this hidden field, bots usually do.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const name = clean(body.name, 200);
  const email = clean(body.email, 320);
  const phone = clean(body.phone, 50);
  const org = clean(body.org, 200);
  const message = clean(body.message, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please provide a name, a valid email and a message." });
  }

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, CONTACT_TO_EMAIL } = process.env;
  const from = process.env.CONTACT_FROM_EMAIL || "3QTR Website <onboarding@resend.dev>";

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error("Missing Supabase environment variables");
    return res.status(500).json({ error: "Server is not configured." });
  }

  // 1) Save to Supabase (the source of truth — if this fails we report an error).
  const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ name, email, phone: phone || null, org: org || null, message }),
  });

  if (!dbRes.ok) {
    console.error("Supabase insert failed", dbRes.status, await dbRes.text());
    return res.status(502).json({ error: "Could not save your message." });
  }

  // 2) Email notification (best effort — the message is already saved).
  if (RESEND_API_KEY && CONTACT_TO_EMAIL) {
    const html = `
      <h2>New 3QTR website inquiry</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Phone:</b> ${escapeHtml(phone || "—")}</p>
      <p><b>Organization:</b> ${escapeHtml(org || "—")}</p>
      <p><b>Message:</b></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;
    try {
      const mailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
          reply_to: email,
          subject: `New inquiry from ${name}`,
          html,
        }),
      });
      if (!mailRes.ok) console.error("Resend failed", mailRes.status, await mailRes.text());
    } catch (err) {
      console.error("Resend request error", err);
    }
  }

  return res.status(200).json({ ok: true });
}

function safeParse(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}
