import PathLayout from "@/components/PathLayout";
import SportsApproach from "@/components/SportsApproach";
import FaqSection from "@/components/FaqSection";
import teamHuddle from "@/assets/team-huddle.jpg";

const SportsTeams = () => (
  <PathLayout
    type="sports"
    label="Competitive Sports Teams"
    title="Competitive Sports Teams"
    tagline="Develop the whole student-athlete. Equip coaches. Strengthen the team."
    heroImage={teamHuddle}
    intro={
      <>
        <p className="text-foreground font-medium">Great teams do not have to be struggling to become better.</p>
        <p>
          3Qtr helps athletic programs invest intentionally in the people behind performance. We focus on developing the whole student-athlete, equipping coaches to connect and lead more effectively, strengthening communication and trust, and preparing athletes for life beyond sports.
        </p>
        <p>
          Each student-athlete receives a personal development blueprint centered on behaviors, motivators, and skills, with practical insight into communication preferences, team contribution, and likely responses during challenges or pressure.
        </p>
        <p>
          Coaches gain practical insight that helps them better understand, communicate with, and develop the individuals they lead.
        </p>
        <p>
          This shared understanding can strengthen coach-athlete relationships, deepen team connection, improve communication, and create an environment where student-athletes can grow as competitors, teammates, leaders, and people.
        </p>
      </>
    }
    servicesTitle="Services for Competitive Sports Teams"
    services={[
      "Student-athlete profiles (behavior, motivators, skills)",
      "Coach profiles (behavioral and/or emotional intelligence)",
      "Individual and group debriefs",
      "Team communication and development sessions",
      "Coach and leadership-team development",
      "Facilitation and speaking engagements",
    ]}
    closing={
      <p>
        Programs can be tailored for individual teams, coaching staffs, athletic departments, schools, colleges, clubs, and other competitive sports organizations.
      </p>
    }
    middle={<SportsApproach />}
    formPrompt="Tell us about your athletic program and what you would like to accomplish."
    after={
      <FaqSection
        faqs={[
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
        ]}
      />
    }
  />
);

export default SportsTeams;
