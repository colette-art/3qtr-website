import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ExpandableCredential from "@/components/ExpandableCredential";
import AssessmentModal from "@/components/AssessmentModal";
import founderPhoto from "@/assets/colette-hosie.jpg";
import coachingSession from "@/assets/coaching-session.jpg";

const About = () => {
  const [assessModal, setAssessModal] = useState(false);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={coachingSession} alt="" loading="lazy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading label="About" title="Meet Colette Hosie" description="Founder and Principal of 3Qtr" />
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <div className="relative">
                  <img src={founderPhoto} alt="Colette Hosie, Founder and Principal of 3Qtr" width={458} height={689} className="w-full rounded-sm object-cover aspect-[2/3]" />
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-sm" />
                </div>
              </div>
              <div className="md:col-span-3 space-y-6">
                <h3 className="font-display text-2xl font-bold">Colette Hosie</h3>
                <div className="gold-divider-left" />
                <p className="text-muted-foreground leading-relaxed">
                  Colette Hosie is the Founder and Principal of 3Qtr. A mechanical engineer with an MBA, she brings nearly 30 years of leadership, operations, and organizational transformation experience, including executive roles with Tiffany &amp; Co., Amazon, and Nike.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Colette is also a former college basketball player, coach, and mother of two athletes. Her certifications span behavioral analysis, emotional intelligence, and tools that reveal individual motivators and skills. Together, these experiences allow her to understand performance from both business and sports perspectives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  She listens, asks the right questions, identifies what is limiting performance, and develops practical solutions that help organizations and teams move forward.
                </p>
                <p className="font-display text-xl text-primary">Unlocking Human Performance.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <ExpandableCredential
                    label="Athlete & Hall of Fame Team Member"
                    details="Missouri University of Science & Technology Women's Varsity Basketball"
                  />
                  <ExpandableCredential label="NCAA-Certified AAU Coach" />
                  <ExpandableCredential
                    label="Fortune 500 Leadership"
                    details={
                      <ul className="space-y-1">
                        <li>• Harley Davidson</li>
                        <li>• Texas Instruments</li>
                        <li>• Tiffany & Co.</li>
                        <li>• Amazon</li>
                        <li>• Nike, Inc.</li>
                      </ul>
                    }
                  />
                  <ExpandableCredential
                    icon={<GraduationCap size={16} className="text-primary shrink-0" />}
                    label="Engineer & MBA"
                    details={
                      <ul className="space-y-1">
                        <li>• BS – Mechanical Engineering – Missouri University of Science & Technology, Rolla, MO</li>
                        <li>• MBA – University of Dallas, Irving, TX</li>
                      </ul>
                    }
                  />
                  <div className="p-3 rounded-sm bg-secondary/30 border border-border sm:col-span-2">
                    <button onClick={() => setAssessModal(true)} className="text-left w-full cursor-pointer">
                      <span className="text-sm font-medium block mb-2">Triple-Certified:</span>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Certified Professional Behavioral Analyst</li>
                        <li>• Certified Professional Motivators Analyst</li>
                        <li>• Certified Emotional Quotient Analyst</li>
                      </ul>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AssessmentModal isOpen={assessModal} onClose={() => setAssessModal(false)} title="Assessment Certifications">
        <div className="space-y-6">
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-2">Certified Professional Behavioral Analyst</h4>
            <p>A behavioral assessment that reveals how individuals communicate, compete, and collaborate under pressure. It identifies four core behavioral styles, Dominance, Influence, Steadiness, and Conscientiousness, giving leaders, coaches, and athletes a shared language for building trust, managing conflict, and performing when it matters most.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-2">Certified Professional Motivators Analyst</h4>
            <p>A motivational assessment that uncovers why people do what they do. It measures 12 driving forces that shape attitude, effort, and commitment, helping organizations and programs align individual purpose with shared goals to unlock sustained motivation and reduce burnout.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-2">Certified Emotional Quotient Analyst</h4>
            <p>An assessment that measures an individual's ability to recognize, understand, and manage emotions, both their own and others'. High emotional intelligence translates to better decision-making under pressure, stronger team chemistry, and the mental resilience to lead through adversity.</p>
          </div>
        </div>
      </AssessmentModal>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Let's <span className="text-gradient-gold">start the conversation</span>
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/leaders-organizations#inquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
                Leaders &amp; Organizations <ArrowRight size={16} />
              </Link>
              <Link to="/sports-teams#inquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold border border-primary text-primary rounded-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
                Competitive Sports Teams <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default About;
