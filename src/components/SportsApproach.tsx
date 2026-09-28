import { useState } from "react";
import { ArrowRight, Brain, Lightbulb, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import AssessmentModal from "@/components/AssessmentModal";
import performanceAbstract from "@/assets/performance-abstract.jpg";

const SportsApproach = () => {
  const [assessModal, setAssessModal] = useState(false);
  const [developModal, setDevelopModal] = useState(false);
  const [performModal, setPerformModal] = useState(false);

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={performanceAbstract} alt="" loading="lazy" width={1920} height={800} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              label="Our Approach"
              title="Assess. Develop. Perform."
              description="3Qtr uses science-based assessments to develop the human side of your team, so athletes and coaches perform better, together."
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

      <AssessmentModal isOpen={performModal} onClose={() => setPerformModal(false)} title="Perform: Where It All Comes Together">
        <p>Championships are not won on talent alone. The teams that consistently win know how to communicate under pressure, stay motivated through a grueling season, and manage the emotional weight of competition without fracturing.</p>
        <p>Science-based assessments measuring behavioral style, motivators, skills, and emotional intelligence give programs the behavioral intelligence to do exactly that.</p>
        <p>When coaches understand what drives each player, they stop coaching to the group and start developing individuals. Individual development is what moves the scoreboard.</p>
        <p>When every athlete understands how they and their teammates are wired, communication sharpens, trust builds faster, and conflict gets resolved before it becomes a locker room problem.</p>
        <p>When emotional discipline is developed, performing in pressure moments, bouncing back from defeat, and leading when the team needs it most becomes a culture not a coincidence.</p>
        <p>These tools do not replace hard work or great coaching. They make both more effective.</p>
      </AssessmentModal>
    </>
  );
};

export default SportsApproach;
