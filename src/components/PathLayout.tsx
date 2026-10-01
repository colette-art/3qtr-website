import { ReactNode } from "react";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import InquiryForm, { InquiryType } from "@/components/InquiryForm";

export interface ServiceItem {
  title: string;
  description: string;
}

interface Props {
  label: string;
  title: string;
  tagline: string;
  heroImage: string;
  intro: ReactNode;
  servicesTitle: string;
  servicesSubtitle?: string;
  services: ServiceItem[];
  closing?: ReactNode;
  formPrompt: string;
  type: InquiryType;
  /** Rendered between the services block and the inquiry form. */
  middle?: ReactNode;
  /** Rendered after the inquiry form. */
  after?: ReactNode;
}

const PathLayout = ({
  label,
  title,
  tagline,
  heroImage,
  intro,
  servicesTitle,
  servicesSubtitle,
  services,
  closing,
  formPrompt,
  type,
  middle,
  after,
}: Props) => (
  <main className="pt-20">
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative z-10 container mx-auto px-6">
        <AnimatedSection>
          <SectionHeading label={label} title={title} description={tagline} />
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">{intro}</div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection>
          <div className="p-8 md:p-10 rounded-sm border border-primary/30 bg-primary/5">
            <h2 className="font-display text-2xl font-bold mb-2">{servicesTitle}</h2>
            {servicesSubtitle && <p className="text-muted-foreground mb-4">{servicesSubtitle}</p>}
            <div className="gold-divider-left mb-6" />
            <ul className="space-y-5">
              {services.map((s) => (
                <li key={s.title} className="flex items-start gap-3">
                  <Check size={18} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-semibold text-foreground">{s.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {closing && <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">{closing}</div>}
        </AnimatedSection>
      </div>
    </section>

    {middle}

    <section id="inquiry" className="py-24 md:py-32 bg-card scroll-mt-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Want to <span className="text-gradient-gold">learn more?</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">{formPrompt}</p>
          <InquiryForm type={type} />
        </AnimatedSection>
      </div>
    </section>

    {after}
  </main>
);

export default PathLayout;
