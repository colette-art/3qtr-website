// Vercel serverless function: POST /api/contact
// Saves the inquiry to Supabase, then emails a notification through Resend.
// Secrets are read from Vercel environment variables (never exposed to the browser).
import type { VercelRequest, VercelResponse } from "@vercel/node";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const TYPE_LABELS: Record<string, string> = {
  general: "General",
  organization: "Leaders & Organizations",
  sports: "Competitive Sports Team",
};
const LEVELS = ["High school", "Club or AAU", "College or university", "Professional", "Other"];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body ?? {};

  // Honeypot: real visitors never fill this hidden field, bots usually do.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const type = typeof body.type === "string" && body.type in TYPE_LABELS ? body.type : "general";
  const name = clean(body.name, 200);
  const email = clean(body.email, 320);
  const phone = clean(body.phone, 50);
  const org = clean(body.org, 200);
  const title = clean(body.title, 200);
  const cityState = clean(body.cityState, 200);
  const level = LEVELS.includes(body.level) ? (body.level as string) : "";
  const message = clean(body.message, 5000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please provide a name and a valid email." });
  }
  if (type === "general" && !message) {
    return res.status(400).json({ error: "Please include a message." });
  }

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, CONTACT_TO_EMAIL } = process.env;
  const from = process.env.CONTACT_FROM_EMAIL || "3Qtr Website <onboarding@resend.dev>";

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error("Missing Supabase environment variables");
    return res.status(500).json({ error: "Server is not configured." });
  }

  // 1) Save to Supabase (the source of truth — if this fails we report an error).
  // New-format keys (sb_secret_...) are opaque, not JWTs: send them only in `apikey`.
  // Legacy service_role keys are JWTs and also go in the Authorization header.
  const isOpaqueKey = SUPABASE_SERVICE_ROLE_KEY.startsWith("sb_");
  const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      ...(isOpaqueKey ? {} : { Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}` }),
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name,
      email,
      phone: phone || null,
      org: org || null,
      message,
      inquiry_type: type,
      title: title || null,
      city_state: cityState || null,
      competitive_level: level || null,
    }),
  });

  if (!dbRes.ok) {
    console.error("Supabase insert failed", dbRes.status, await dbRes.text());
    return res.status(502).json({ error: "Could not save your message." });
  }

  // 2) Email notification (best effort — the inquiry is already saved).
  if (RESEND_API_KEY && CONTACT_TO_EMAIL) {
    const row = (label: string, value: string) =>
      value ? `<p><b>${label}:</b> ${escapeHtml(value)}</p>` : "";
    const html = `
      <h2>New 3Qtr website inquiry &mdash; ${escapeHtml(TYPE_LABELS[type])}</h2>
      ${row("Name", name)}
      ${row("Email", email)}
      ${row("Phone", phone)}
      ${row("Title or role", title)}
      ${row("Organization", org)}
      ${row("City and state", cityState)}
      ${row("Competitive level", level)}
      ${message ? `<p><b>Message:</b></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}`;
    try {
      const mailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
          reply_to: email,
          subject: `New ${TYPE_LABELS[type]} inquiry from ${name}`,
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
