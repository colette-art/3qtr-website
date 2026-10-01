import PathLayout from "@/components/PathLayout";
import SportsApproach from "@/components/SportsApproach";
import teamHuddle from "@/assets/team-huddle.jpg";

const SportsTeams = () => (
  <PathLayout
    type="sports"
    label="Sports"
    title="Sports"
    tagline="Develop coaches and student-athletes. Build connection. Improve team performance."
    heroImage={teamHuddle}
    intro={
      <>
        <p className="text-foreground font-display text-xl">
          You Develop Their Talent. We Help You Unlock Their Potential.
        </p>
        <p>
          How coaches lead, how athletes respond, and how teams communicate all influence performance. 3Qtr helps coaches and student-athletes strengthen these connections so they can get more from their preparation, their talent, and each other.
        </p>
        <p className="text-foreground font-semibold">Development for Athletes. Support for Coaches.</p>
        <p>
          Each student-athlete receives a personal development blueprint centered on behaviors, motivators, and skills. It provides practical insight into communication preferences, team contribution, and responses to challenges or pressure—supporting growth in sports and life beyond competition.
        </p>
        <p>
          Coaches have access to personalized development that strengthens self-awareness, communication, and emotional intelligence. They gain insight into their own leadership approach, how they respond under pressure, and how their behaviors influence others, alongside a deeper understanding of the athletes they lead.
        </p>
        <p>
          Together, these insights can support clearer expectations, more effective feedback, stronger relationships, and greater team cohesion—helping coaches and athletes bring more focus, trust, and accountability to preparation and competition.
        </p>
      </>
    }
    servicesTitle="Services for Sports Programs"
    servicesSubtitle="Personalized support to develop student-athletes, equip coaches, and strengthen team performance."
    services={[
      {
        title: "Student-Athlete Development",
        description: "Build self-awareness and provide a personal development blueprint centered on behaviors, motivators, and skills, with guidance for applying insights in sports and life.",
      },
      {
        title: "Coach Development & Leadership",
        description: "Strengthen self-awareness, communication, and emotional intelligence to help coaches lead effectively, respond to pressure, and develop the athletes they serve.",
      },
      {
        title: "Team Communication & Effectiveness",
        description: "Build trust, clarify expectations, and strengthen coach-athlete and teammate connections through guided debriefs and team development sessions.",
      },
      {
        title: "Athletic Leadership-Team Development",
        description: "Help athletic directors and coaching staffs align priorities, strengthen collaboration, and establish consistent leadership practices across the program.",
      },
      {
        title: "Facilitation & Speaking",
        description: "Engage coaches and student-athletes through facilitated discussions and speaking engagements tailored to the program's goals.",
      },
    ]}
    middle={<SportsApproach />}
    formPrompt="Tell us about your athletic program and what you would like to accomplish."
  />
);

export default SportsTeams;
