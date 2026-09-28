import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  showMoreLink?: boolean;
}

const FaqSection = ({ faqs, showMoreLink = true }: FaqSectionProps) => {
  return (
    <section className="py-24 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Common questions about 3Qtr and coaching in the NIL era.
          </p>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-sm px-6 bg-secondary/20">
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {showMoreLink && (
            <div className="text-center mt-8">
              <Link
                to="/nil-faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View all NIL FAQs <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FaqSection;
