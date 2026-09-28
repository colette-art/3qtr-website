import { useState } from "react";
import { Link } from "react-router-dom";
import { Award, ArrowRight, GraduationCap } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ExpandableCredential from "@/components/ExpandableCredential";
import AssessmentModal from "@/components/AssessmentModal";
import founderGreenShirt from "@/assets/founder-green-shirt.jpg";
import coachingSession from "@/assets/coaching-session.jpg";
import collegeAthletes from "@/assets/college-athletes.jpg";
import teamUnity from "@/assets/team-unity.jpg";
import aboutFootball from "@/assets/about-football.jpg";
import aboutSoccer from "@/assets/about-soccer.jpg";
import aboutTrack from "@/assets/about-track.jpg";
import aboutVolleyball from "@/assets/about-volleyball.jpg";
import aboutSwimming from "@/assets/about-swimming.jpg";

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
            <SectionHeading
              label="About"
              title="The Woman Behind 3QTR"
              description="Athlete. Engineer. Executive. Coach. A rare combination of experience, passion, and purpose."
            />
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
                  <img src={founderGreenShirt} alt="Colette M. Hosie, Founder of 3QTR" loading="lazy" width={800} height={1024} className="w-full rounded-sm object-cover aspect-[3/4]" />
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-sm" />
                </div>
              </div>
              <div className="md:col-span-3 space-y-6">
                <h3 className="font-display text-2xl font-bold">Colette M. Hosie</h3>
                <div className="gold-divider-left" />
                <p className="text-muted-foreground leading-relaxed">
                  Colette's journey began as a competitive athlete, where she experienced firsthand the power and the gaps of team dynamics. That early insight became a lifelong mission.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a background in engineering and over 25 years of Fortune 500 executive leadership, Colette understands systems, strategy, and people. As an NCAA-certified AAU coach and Hall of Fame team member, she brings an unmatched perspective to sports performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  3QTR was born from the belief that the missing piece of team performance isn't physical or tactical. It's human. Communication, motivation, leadership, emotional intelligence, and cohesion are the factors that separate good teams from great ones.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <ExpandableCredential
                    label="Athlete & Hall of Fame Team Member"
                    details="Missouri University of Science & Technology Women's Varsity Basketball"
                  />
                  <ExpandableCredential label="NCAA-Certified AAU Coach" />
                  <ExpandableCredential
                    label="25+ Year Fortune 500 Experience"
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

      {/* Assess Modal */}
      <AssessmentModal isOpen={assessModal} onClose={() => setAssessModal(false)} title="Assessment Certifications">
        <div className="space-y-6">
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-2">Certified Professional Behavioral Analyst</h4>
            <p>A behavioral assessment that reveals how individuals communicate, compete, and collaborate under pressure. It identifies four core behavioral styles, Dominance, Influence, Steadiness, and Conscientiousness, giving coaches and athletes a shared language for building trust, managing conflict, and performing when it matters most.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-2">Certified Professional Motivators Analyst</h4>
            <p>A motivational assessment that uncovers why athletes and coaches do what they do. It measures 12 driving forces that shape attitude, effort, and commitment, helping programs align individual purpose with team goals to unlock sustained motivation and reduce burnout.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-2">Certified Emotional Quotient Analyst</h4>
            <p>An assessment that measures an individual's ability to recognize, understand, and manage emotions, both their own and others'. For coaches and athletes alike, high emotional intelligence translates to better decision-making under pressure, stronger team chemistry, and the mental resilience to push through adversity.</p>
          </div>
        </div>
      </AssessmentModal>

      {/* Philosophy */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={collegeAthletes} alt="Diverse college athletes on campus" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">Philosophy</span>
            <blockquote className="font-display text-2xl md:text-3xl font-bold italic leading-relaxed text-foreground">
              "Every team has untapped potential. The difference between winning and dominating lives in the human connections your team builds, on and off the field."
            </blockquote>
            <p className="mt-6 text-primary font-semibold">— Colette M. Hosie</p>
            <div className="gold-divider mt-8" />
          </AnimatedSection>
        </div>
      </section>

      {/* College Athletics Gallery */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading label="Athletics" title="Where Performance Meets Purpose" description="3QTR works across college sports, building stronger teams through the power of human connection." />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { src: aboutFootball, alt: "College football athletes celebrating" },
              { src: aboutSoccer, alt: "Women's college soccer in action" },
              { src: aboutTrack, alt: "Diverse college track and field runners" },
              { src: aboutVolleyball, alt: "College volleyball team celebrating" },
              { src: aboutSwimming, alt: "College swimmers at the pool" },
            ].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative overflow-hidden rounded-sm group aspect-[4/3]">
                  <img src={img.src} alt={img.alt} loading="lazy" width={1024} height={768} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <img src={teamUnity} alt="Athletes putting hands together in unity" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-card/90" />
        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading label="Values" title="What Drives 3QTR" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Integrity", desc: "Honest, data-driven insights that serve the athlete first." },
              { title: "Excellence", desc: "Premium quality in every assessment, workshop, and engagement." },
              { title: "Impact", desc: "Measurable improvements in communication, leadership, and cohesion." },
              { title: "Partnership", desc: "Long-term relationships built on trust and shared commitment to growth." },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-sm border border-border bg-secondary/20 text-center">
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* FAQ */}
      <FaqSection faqs={[
        { question: "NIL means athletes are thinking about their personal brand earlier than ever. How does 3Qtr fit into that?", answer: "Personal branding starts with self-awareness and most student-athletes do not have a clear picture of who they are beyond their sport. 3Qtr changes that. Our science-based assessment gives athletes a deep understanding of their behavioral style, motivators, and skills, which are the same qualities that define a compelling personal brand. Athletes who know what they stand for, how they communicate, and what drives them are better positioned to represent themselves authentically on and off the court or field. 3Qtr does not compete with NIL. It makes athletes more ready for it." },
        { question: "Recruiters and their families are more sophisticated now. How does 3Qtr strengthen a program's recruiting pitch?", answer: "Today's recruits and their families are evaluating more than facilities and win records. They want to know how a program develops athletes as people. 3Qtr gives coaches a concrete, science-based answer to that question. Being able to show recruits and their families that your program invests in behavioral development, emotional intelligence, and individual motivation signals that you are committed to the whole athlete. In a crowded recruiting landscape, that is a differentiator that resonates with the families making the final decision." },
      ]} />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to <span className="text-gradient-gold">Unlock</span> Your Team's Potential?</h2>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
                Start the Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default About;
