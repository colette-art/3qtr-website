import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import nilFaqHero from "@/assets/nil-faq-hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "NIL has changed what athletes are focused on. How does 3Qtr help coaches keep athletes locked in on performance?",
    answer:
      "NIL has created real opportunity for student-athletes and real distraction. 3Qtr gives coaches a clear picture of what individually motivates each athlete, what fuels their commitment when the season gets hard and what pulls their focus when outside pressure builds. When coaches understand how each athlete is wired to communicate and respond under pressure, they can have more intentional conversations, set expectations that actually resonate, and reconnect athletes to their purpose when NIL noise starts competing with team goals. The coaches who figure out how to develop the whole athlete mentally, emotionally, and behaviorally are the ones who keep their programs competitive. 3Qtr gives them the tools to do exactly that.",
  },
  {
    question: "With NIL money on the table, team culture is harder to protect. Can 3Qtr help with that?",
    answer:
      "Culture does not break down because of NIL. It breaks down when coaches lose visibility into what is driving individual behavior inside the program. 3Qtr gives coaches the behavioral and motivational insight to spot disconnection early, address it directly, and build a culture where individual goals and team goals are not in conflict. When athletes understand how they and their teammates are wired, trust builds faster and the shared language needed to protect culture under pressure already exists. NIL changes the environment. It does not have to change the culture.",
  },
  {
    question: "NIL means athletes are thinking about their personal brand earlier than ever. How does 3Qtr fit into that?",
    answer:
      "Personal branding starts with self-awareness and most student-athletes do not have a clear picture of who they are beyond their sport. 3Qtr changes that. Our science-based assessment gives athletes a deep understanding of their behavioral style, motivators, and skills, which are the same qualities that define a compelling personal brand. Athletes who know what they stand for, how they communicate, and what drives them are better positioned to represent themselves authentically on and off the court or field. 3Qtr does not compete with NIL. It makes athletes more ready for it.",
  },
  {
    question: "Transfers are at an all-time high, partly because of NIL. How can 3Qtr help coaches retain talent?",
    answer:
      "Most athletes do not leave a program solely for money. They leave because they feel unseen, underdeveloped, or misaligned with the culture. 3Qtr helps coaches get ahead of that. When coaches understand what individually motivates each athlete and how they are wired to communicate and compete, they can develop each player with intention and have the kind of honest conversations that build loyalty. Athletes who feel understood and purposefully developed are far less likely to enter the portal. Retention starts with connection and connection starts with knowing your athletes beyond their stats.",
  },
  {
    question: "Recruiters and their families are more sophisticated now. How does 3Qtr strengthen a program's recruiting pitch?",
    answer:
      "Today's recruits and their families are evaluating more than facilities and win records. They want to know how a program develops athletes as people. 3Qtr gives coaches a concrete, science-based answer to that question. Being able to show recruits and their families that your program invests in behavioral development, emotional intelligence, and individual motivation signals that you are committed to the whole athlete. In a crowded recruiting landscape, that is a differentiator that resonates with the families making the final decision.",
  },
  {
    question: "Some NIL deals create athletes who act like free agents inside the program. How do assessments help with that?",
    answer:
      "When an athlete starts operating like a free agent, it is usually a sign that their individual purpose has disconnected from the team's goals. 3Qtr helps coaches identify that disconnection before it becomes a locker room problem. Understanding what drives each athlete and how they respond to pressure and conflict gives coaches the insight to re-engage individuals with direct, purposeful conversations rather than broad team messaging that does not land. Accountability is easier to establish when coaches know exactly how each athlete is wired and can speak to what actually matters to them.",
  },
];

const NilFaq = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={nilFaqHero} alt="Athletes and coach reviewing strategy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="NIL & Coaching"
              title="Coaching in the NIL Era Requires a New Edge"
            />
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto text-center">
              Name, Image &amp; Likeness changed the game for athletes. Here's how 3Qtr helps coaches stay ahead of it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-sm px-6 bg-secondary/20">
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    <span className="mr-4 text-primary font-display">{String(i + 1).padStart(2, "0")}</span>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-[15px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.2}>
            <div className="text-center mt-20">
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                NIL changed the game. Your development model <span className="text-gradient-gold">should too.</span>
              </h2>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Contact 3Qtr <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default NilFaq;
