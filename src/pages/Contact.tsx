import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, CalendarDays } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";
import { CALENDLY_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/lib/constants";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", org: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "general", website: honeypot }),
      });
      if (!res.ok) throw new Error(String(res.status));
    } catch {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again or email us directly.");
      return;
    }
    setSubmitting(false);
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", phone: "", org: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="Contact"
              title="Start the Conversation"
              description="Ready to explore what 3Qtr can do for your organization or team? Reach out for a complimentary discovery call."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Phone</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Organization</label>
                    <input
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Team or school name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your team and what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-10 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-6">Get in Touch</h3>
                  <div className="gold-divider-left mb-6" />
                  <div className="space-y-5">
                    <a href={`tel:${CONTACT_PHONE_HREF}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                      <Phone size={20} className="text-primary shrink-0" />
                      <span>{CONTACT_PHONE_DISPLAY}</span>
                    </a>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                      <Mail size={20} className="text-primary shrink-0" />
                      <span>{CONTACT_EMAIL}</span>
                    </a>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <Globe size={20} className="text-primary shrink-0" />
                      <span>www.3qtr.net</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-sm border border-primary/20 bg-primary/5">
                  <h4 className="font-display text-lg font-semibold text-primary mb-2">Free Discovery Call</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Not sure where to start? Book a complimentary 30-minute consultation to explore how 3Qtr can serve your organization or team.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <CalendarDays size={16} /> Book a Free Discovery Call
                  </a>
                  <div className="mt-4 flex flex-col gap-2 text-sm font-semibold">
                    <Link to="/leaders-organizations#inquiry" className="text-primary hover:underline">Business →</Link>
                    <Link to="/sports-teams#inquiry" className="text-primary hover:underline">Sports →</Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
