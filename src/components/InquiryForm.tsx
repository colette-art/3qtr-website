import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { CalendarDays } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export type InquiryType = "organization" | "sports";

const LEVELS = ["High school", "Club or AAU", "College or university", "Professional", "Other"];

const inputCls =
  "w-full px-4 py-3 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";
const labelCls = "block text-sm font-medium mb-2 text-foreground/80";

const empty = {
  name: "",
  firstName: "",
  lastName: "",
  title: "",
  org: "",
  email: "",
  phone: "",
  cityState: "",
  level: "",
  message: "",
};

interface Props {
  type: InquiryType;
}

const InquiryForm = ({ type }: Props) => {
  const isSports = type === "sports";
  const [form, setForm] = useState(empty);
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof typeof empty) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          name: isSports ? `${form.firstName} ${form.lastName}`.trim() : form.name,
          title: form.title,
          org: form.org,
          email: form.email,
          phone: form.phone,
          cityState: form.cityState,
          level: isSports ? form.level : "",
          message: form.message,
          website: honeypot,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
    } catch {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again or email us directly.");
      return;
    }
    setSubmitting(false);
    toast.success("Thank you! We'll be in touch shortly.");
    setForm(empty);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
      />

      <h3 className="font-display text-xl font-semibold">Contact Information</h3>

      {isSports ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelCls}>First name *</label>
            <input required value={form.firstName} onChange={set("firstName")} className={inputCls} autoComplete="given-name" />
          </div>
          <div>
            <label className={labelCls}>Last name *</label>
            <input required value={form.lastName} onChange={set("lastName")} className={inputCls} autoComplete="family-name" />
          </div>
        </div>
      ) : (
        <div>
          <label className={labelCls}>Name *</label>
          <input required value={form.name} onChange={set("name")} className={inputCls} autoComplete="name" />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelCls}>Title or role</label>
          <input value={form.title} onChange={set("title")} className={inputCls} autoComplete="organization-title" />
        </div>
        <div>
          <label className={labelCls}>{isSports ? "School or organization" : "Organization"}</label>
          <input value={form.org} onChange={set("org")} className={inputCls} autoComplete="organization" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelCls}>Email address *</label>
          <input required type="email" value={form.email} onChange={set("email")} className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label className={labelCls}>Phone number</label>
          <input type="tel" value={form.phone} onChange={set("phone")} className={inputCls} autoComplete="tel" />
        </div>
      </div>

      <div>
        <label className={labelCls}>City and state</label>
        <input value={form.cityState} onChange={set("cityState")} className={inputCls} />
      </div>

      {isSports && (
        <fieldset className="space-y-3">
          <legend className="font-display text-xl font-semibold mb-1">About Your Athletic Program</legend>
          <p className={labelCls + " !mb-3"}>What is the competitive level? *</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LEVELS.map((l) => (
              <label key={l} className="flex items-center gap-3 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="radio"
                  name="level"
                  required
                  value={l}
                  checked={form.level === l}
                  onChange={set("level")}
                  className="accent-[hsl(var(--primary))]"
                />
                {l}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div>
        <label className="font-display text-xl font-semibold block mb-3">
          {isSports ? "Tell me about your organization (Optional)" : "Tell Me About Your Organization *"}
        </label>
        <textarea
          required={!isSports}
          rows={5}
          value={form.message}
          onChange={set("message")}
          className={inputCls + " resize-none"}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Start the Conversation"}
        </button>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold border border-primary text-primary rounded-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <CalendarDays size={16} /> Schedule a Discovery Meeting
        </a>
      </div>
    </form>
  );
};

export default InquiryForm;
