import PathLayout from "@/components/PathLayout";
import performanceAbstract from "@/assets/performance-abstract.jpg";

const LeadersOrganizations = () => (
  <PathLayout
    type="organization"
    label="Leaders & Organizations"
    title="Leaders & Organizations"
    tagline="Strengthen leadership. Develop people. Improve how teams work together."
    heroImage={performanceAbstract}
    intro={
      <>
        <p>
          Organizations may come to 3Qtr because they are experiencing leadership or team challenges, communication gaps, low morale, misaligned goals, unclear expectations, or limited development opportunities.
        </p>
        <p>Others recognize the value of investing in their leaders and people before challenges arise.</p>
        <p>
          3Qtr begins by listening. We work to understand your organization, your people, your goals, and what may be limiting progress. When a challenge exists, we look beyond the visible symptoms to identify the people, leadership, or organizational factors that may be contributing to it.
        </p>
        <p>From there, we develop a practical solution tailored to your needs.</p>
      </>
    }
    servicesTitle="Services for Leaders & Organizations"
    services={[
      "Leadership and behavioral assessment",
      "Emotional-intelligence assessment",
      "Leadership experience (The Maxwell Leadership Game)",
      "Coaching and mentoring",
      "Mastermind groups and facilitated learning experiences",
      "Workshops / lunch-and-learns",
      "Strategic-session facilitation",
      "Keynotes and speaking engagements",
    ]}
    closing={
      <p>
        Our goal is not simply to deliver a program. It is to strengthen leadership, improve communication, support employee development, build trust, and help people work together more effectively.
      </p>
    }
    formPrompt="Tell us about your organization and what you would like to accomplish."
  />
);

export default LeadersOrganizations;
