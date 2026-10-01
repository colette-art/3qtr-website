import PathLayout from "@/components/PathLayout";
import performanceAbstract from "@/assets/performance-abstract.jpg";

const LeadersOrganizations = () => (
  <PathLayout
    type="organization"
    label="Business"
    title="Business"
    tagline="Develop people. Strengthen process. Improve performance."
    heroImage={performanceAbstract}
    intro={
      <>
        <p>
          Organizations come to 3Qtr for many reasons: leadership or team challenges, communication gaps, low morale, misaligned goals, unclear expectations, or operational results that fall short of expectations. Others recognize the value of investing in their people and strengthening their operations before challenges arise.
        </p>
        <p>
          3Qtr begins by listening. We work to understand your organization, your people, your goals, and how work gets done. We assess gaps across people, processes, and performance, looking beyond visible symptoms to understand what may be limiting progress.
        </p>
        <p>
          Our approach examines how leadership, team dynamics, workflows, accountability, and organizational priorities work together. This helps identify where expectations are unclear, processes create obstacles, or teams need additional support and development.
        </p>
        <p>
          From there, we develop a practical strategy and action plan tailored to your needs, with clear priorities, next steps, and measures of progress. Whether your goal is to develop leaders, strengthen teams, improve operations, or address a specific challenge, 3Qtr helps you turn insight into action.
        </p>
      </>
    }
    servicesTitle="Services for Leaders & Organizations"
    services={[
      {
        title: "Organizational & Operational Consulting",
        description: "Assess gaps across people, process, and performance and develop a practical strategy or action plan with clear priorities and next steps.",
      },
      {
        title: "Leadership Development & Coaching",
        description: "Build self-awareness, emotional intelligence, and leadership effectiveness through assessments, coaching, and mentoring.",
      },
      {
        title: "Team Development & Effectiveness",
        description: "Strengthen communication, trust, alignment, and accountability through tailored team experiences.",
      },
      {
        title: "Strategic Planning & Facilitation",
        description: "Guide focused discussions that clarify goals, align expectations, and turn ideas into actionable plans.",
      },
      {
        title: "Workshops & Speaking",
        description: "Engage and develop your people through practical workshops, lunch-and-learns, and keynotes tailored to your audience.",
      },
    ]}
    formPrompt="Tell us about your organization and what you would like to accomplish."
  />
);

export default LeadersOrganizations;
