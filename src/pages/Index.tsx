import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Brain, TrendingUp, Shield, Award, Lightbulb, Heart, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import AssessmentModal from "@/components/AssessmentModal";
import ExpandableCredential from "@/components/ExpandableCredential";
import FaqSection from "@/components/FaqSection";
import heroBg from "@/assets/hero-bg.jpg";
import teamHuddle from "@/assets/team-huddle.jpg";
import girlsSports from "@/assets/girls-sports.jpg";
import founderPortrait from "@/assets/founder-green-shirt.jpg";
import performanceAbstract from "@/assets/performance-abstract.jpg";
import athleteFocus from "@/assets/athlete-focus.jpg";

const Home = () => {
  const [assessModal, setAssessModal] = useState(false);
  const [developModal, setDevelopModal] = useState(false);
  const [performModal, setPerformModal] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 container mx-auto px-6 text-center py-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6"
          >
            Sports Performance Consulting
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto"
          >
            Unlocking the <span className="text-gradient-gold">4th Quarter</span> of Human Performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Assessment-Based Performance Solutions for Competitive Sports Teams
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
              Book a Discovery Call
            </Link>
            <Link to="/about" className="px-8 py-4 text-sm font-semibold border border-primary text-primary rounded-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem / Opportunity */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="The Gap"
              title="What Most Teams Are Missing"
              description="Teams invest heavily in physical training and tactical preparation, but the human side of performance is often overlooked."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <div className="space-y-8">
              <AnimatedSection delay={0.1}>
                <div className="p-8 rounded-sm border border-border bg-secondary/30">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">What Teams Invest In</h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-center gap-3"><TrendingUp size={18} className="text-primary shrink-0" /> Physical Training & Conditioning</li>
                    <li className="flex items-center gap-3"><Target size={18} className="text-primary shrink-0" /> Tactical & Strategic Preparation</li>
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="p-8 rounded-sm border border-primary/30 bg-primary/5">
                  <h3 className="font-display text-lg font-semibold text-primary mb-4">What's Often Missing</h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-center gap-3"><Users size={18} className="text-primary shrink-0" /> Communication & Team Cohesion</li>
                    <li className="flex items-center gap-3"><Heart size={18} className="text-primary shrink-0" /> Motivation & Emotional Intelligence</li>
                    <li className="flex items-center gap-3"><Brain size={18} className="text-primary shrink-0" /> Leadership Development</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.3}>
              <div className="space-y-4">
                <div className="relative rounded-sm overflow-hidden">
                  <img src={teamHuddle} alt="Team huddle showing the importance of team cohesion" loading="lazy" width={1280} height={854} className="w-full h-[200px] object-cover rounded-sm" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="relative rounded-sm overflow-hidden">
                  <img src={girlsSports} alt="Girls sports team showing unity and teamwork" loading="lazy" width={1280} height={854} className="w-full h-[200px] object-cover rounded-sm" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The 3QTR Solution */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={performanceAbstract} alt="" loading="lazy" width={1920} height={800} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="The Solution"
              title="The Missing Quarter"
              description="3QTR bridges the gap between athletic talent and peak team performance. We use scientifically validated assessments to develop the human side of your team, so athletes and coaches perform better, together."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
              {[
                {
                  icon: Brain,
                  title: "Assess",
                  desc: "3Qtr uses science-based assessments to reveal the behavioral style, skills, motivators, and emotional intelligence behind every athlete's and coach's next level.",
                  onClick: () => setAssessModal(true),
                },
                {
                  icon: Lightbulb,
                  title: "Develop",
                  desc: "Customized coaching strategies that turn insights into actionable development.",
                  onClick: () => setDevelopModal(true),
                },
                {
                  icon: TrendingUp,
                  title: "Perform",
                  desc: "Cohesive teams that communicate, lead, and compete at the highest level.",
                  onClick: () => setPerformModal(true),
                },
              ].map((s, i) => (
                <button
                  key={i}
                  onClick={s.onClick}
                  className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all cursor-pointer group flex flex-col h-full"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-balance flex-1">{s.desc}</p>
                  <span className="mt-4 flex items-center justify-center gap-1 text-xs font-semibold text-primary uppercase tracking-wider">
                    Learn More <ArrowRight size={12} />
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Assess Modal */}
      <AssessmentModal isOpen={assessModal} onClose={() => setAssessModal(false)} title="Assess: The Foundation">
        <div className="space-y-6">
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-2">Athlete</h4>
            <p className="font-semibold text-foreground mb-1">Behavioral &amp; Motivational Assessment</p>
            <p>A comprehensive assessment that uncovers how athletes behave and why they do what they do. It measures four core behavioral styles alongside 12 driving forces that shape attitude, effort, and commitment. Together, these insights give athletes a deeper self-awareness and a roadmap for building trust, managing conflict, and aligning personal purpose with team goals, sustaining motivation, reducing burnout, and unlocking performance when it matters most.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-2">Coaches</h4>
            <p className="font-semibold text-foreground mb-1">Behavioral Style Assessment</p>
            <p className="mb-4">A behavioral assessment that reveals how coaches communicate, compete, and collaborate under pressure. It identifies four core behavioral styles, Dominance, Influence, Steadiness, and Conscientiousness, giving coaches a shared language for building trust, managing conflict, and performing when it matters most.</p>
            <p className="font-semibold text-foreground mb-1">Emotional Intelligence Assessment</p>
            <p>An assessment that measures a coach's ability to recognize, understand, and manage emotions, both their own and others'. High emotional intelligence translates to better decision-making under pressure, stronger team chemistry, and the mental resilience to lead through adversity.</p>
          </div>
        </div>
      </AssessmentModal>

      {/* Develop Modal */}
      <AssessmentModal isOpen={developModal} onClose={() => setDevelopModal(false)} title="Develop: Turning Insight into Action">
        <p>Most programs invest heavily in physical training and game film but leave the mental and behavioral side of performance to chance.</p>
        <h4 className="font-display text-lg font-semibold text-primary">Athletes</h4>
        <p>Our comprehensive athlete assessment reveals what truly drives each student-athlete, measuring behavioral style, 12 driving forces, and skills that shape attitude, effort, and commitment. It uncovers what fuels their push through adversity or causes them to quietly disengage when pressure mounts. That self-knowledge doesn't stop at the final buzzer; it follows student-athletes into the classroom, their careers, and every competitive environment they will face in life.</p>
        <p>Used with intention, this tool gives student-athletes the self-awareness to become the competitor and teammate their team needs them to be.</p>
        <h4 className="font-display text-lg font-semibold text-primary">Coaches</h4>
        <p>Great coaching requires more than strategy. It requires knowing how to reach each individual and lead with consistency under pressure.</p>
        <p>Our behavioral style assessment shows coaches how each athlete is wired to communicate and compete, so they can be coached in the way that lands. Our emotional intelligence assessment identifies each coach's capacity to handle pressure, conflict, and team dynamics with the maturity that separates good coaches from great ones.</p>
        <p>Used together, these two assessments give coaches the insight to develop each individual with purpose and precision, and the self-awareness to lead a team that performs when it matters most.</p>
      </AssessmentModal>

      {/* Perform Modal */}
      <AssessmentModal isOpen={performModal} onClose={() => setPerformModal(false)} title="Perform: Where It All Comes Together">
        <p>Championships are not won on talent alone. The teams that consistently win know how to communicate under pressure, stay motivated through a grueling season, and manage the emotional weight of competition without fracturing.</p>
        <p>Science-based assessments measuring behavioral style, motivators, skills, and emotional intelligence give programs the behavioral intelligence to do exactly that.</p>
        <p>When coaches understand what drives each player, they stop coaching to the group and start developing individuals. Individual development is what moves the scoreboard.</p>
        <p>When every athlete understands how they and their teammates are wired, communication sharpens, trust builds faster, and conflict gets resolved before it becomes a locker room problem.</p>
        <p>When emotional discipline is developed, performing in pressure moments, bouncing back from defeat, and leading when the team needs it most becomes a culture not a coincidence.</p>
        <p>These tools do not replace hard work or great coaching. They make both more effective.</p>
      </AssessmentModal>

      {/* Founder Preview */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img src={founderPortrait} alt="Colette M. Hosie, Founder of 3QTR" loading="lazy" width={800} height={1024} className="w-full max-w-sm mx-auto rounded-sm object-cover aspect-[3/4]" />
                <div className="absolute inset-0 rounded-sm ring-1 ring-primary/20 max-w-sm mx-auto" />
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-primary/40 rounded-br-sm max-w-sm mx-auto" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">Founder</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Colette M. Hosie</h2>
                <div className="gold-divider-left mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A unique combination of athlete, engineer, and executive leader. With more than 25 years in Fortune 500 leadership, NCAA-certified AAU coaching experience, and triple certification as a Certified Professional Behavioral Analyst, Certified Professional Motivators Analyst, and Certified Emotional Quotient Analyst, Colette brings a rare perspective to sports performance development.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
                  Read Full Bio <ArrowRight size={16} />
                </Link>
                <div className="mt-8 space-y-3">
                  <ExpandableCredential
                    label="Athlete & Hall of Fame Team Member"
                    details="Missouri University of Science & Technology Women's Varsity Basketball"
                  />
                  <ExpandableCredential label="NCAA-Certified AAU Coach" />
                  <ExpandableCredential
                    label="25+ years Fortune 500 experience"
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
                        <li>• Bachelor of Science – Mechanical Engineering – Missouri University of Science & Technology, Rolla, MO</li>
                        <li>• Masters Business Administration (MBA) – University of Dallas, Irving, TX</li>
                      </ul>
                    }
                  />
                  <div className="p-3 rounded-sm bg-secondary/30 border border-border">
                    <span className="text-sm font-medium block mb-2">Triple-Certified:</span>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Certified Professional Behavioral Analyst</li>
                      <li>• Certified Professional Motivators Analyst</li>
                      <li>• Certified Emotional Quotient Analyst</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="Services"
              title="Performance Solutions"
              description="Tailored assessment and development programs for every level of competitive sports."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Student-Athlete Profile", price: "Custom packages available", desc: "A science-based assessment delivering behavioral style, motivators, and skills insights for individual athlete development." },
              { title: "Coaching Staff Development", price: "Custom packages available", desc: "Science-based assessments delivering behavioral style and emotional intelligence insights for coaching staff alignment and growth." },
              { title: "The 3QTR Edge", price: "Custom packages available", desc: "Our flagship comprehensive team performance program.", featured: true },
              { title: "Season Retainer", price: "Custom packages available", desc: "Ongoing strategic support throughout your competitive season." },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`p-8 rounded-sm border h-full flex flex-col ${s.featured ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border bg-card"} hover:border-primary/50 transition-colors`}>
                  {s.featured && <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Flagship</span>}
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{s.price}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Preview */}
      <section className="relative py-24 md:py-32 bg-card overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="Audiences"
              title="Who We Serve"
              description="From high school varsity to elite college programs, 3QTR empowers athletes, coaches, and parents."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Varsity High School", anchor: "varsity" },
                { icon: Award, title: "College Programs", anchor: "college" },
                { icon: Users, title: "AAU & Club Sports", anchor: "aau" },
                { icon: Heart, title: "Parents", anchor: "parents" },
              ].map((a, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Link
                    to={`/who-we-serve#${a.anchor}`}
                    className="text-center p-8 rounded-sm border border-border bg-secondary/20 hover:border-primary/30 transition-colors block group"
                  >
                    <a.icon size={32} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-base font-semibold">{a.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight size={10} />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.3}>
              <img src={athleteFocus} alt="Athlete focused on performance" loading="lazy" width={1280} height={854} className="w-full h-[360px] object-cover rounded-sm" />
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.4}>
            <div className="text-center mt-10">
              <Link to="/who-we-serve" className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
                Explore All Audiences <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why 3QTR */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading label="Why 3QTR" title="Built Different" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Assessment-Based", desc: "Every recommendation is grounded in validated behavioral and emotional intelligence data." },
              { title: "Customized Solutions", desc: "No cookie-cutter programs. Every engagement is tailored to your team's unique needs." },
              { title: "Communication & Leadership", desc: "We develop the skills that separate good teams from championship-caliber teams." },
              { title: "Athlete + Executive + Coach", desc: "A rare blend of real-world experience from the field, the boardroom, and the bench." },
            ].map((w, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-sm border border-border bg-card hover:border-primary/30 transition-colors">
                  <h3 className="font-display text-lg font-semibold mb-3 text-primary">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={[
        { question: "NIL has changed what athletes are focused on. How does 3Qtr help coaches keep athletes locked in on performance?", answer: "NIL has created real opportunity for student-athletes and real distraction. 3Qtr gives coaches a clear picture of what individually motivates each athlete, what fuels their commitment when the season gets hard and what pulls their focus when outside pressure builds. When coaches understand how each athlete is wired to communicate and respond under pressure, they can have more intentional conversations, set expectations that actually resonate, and reconnect athletes to their purpose when NIL noise starts competing with team goals. The coaches who figure out how to develop the whole athlete mentally, emotionally, and behaviorally are the ones who keep their programs competitive. 3Qtr gives them the tools to do exactly that." },
        { question: "With NIL money on the table, team culture is harder to protect. Can 3Qtr help with that?", answer: "Culture does not break down because of NIL. It breaks down when coaches lose visibility into what is driving individual behavior inside the program. 3Qtr gives coaches the behavioral and motivational insight to spot disconnection early, address it directly, and build a culture where individual goals and team goals are not in conflict. When athletes understand how they and their teammates are wired, trust builds faster and the shared language needed to protect culture under pressure already exists. NIL changes the environment. It does not have to change the culture." },
      ]} />

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={teamHuddle} alt="" loading="lazy" width={1280} height={854} className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-card/90" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight">
              Let's Talk About What Your Team Is <span className="text-gradient-gold">Missing</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Schedule a complimentary discovery call to explore how 3QTR can elevate your team's performance.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="inline-block px-10 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
                Book Your Discovery Call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Home;
