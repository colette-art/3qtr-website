import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Trophy } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import teamHuddle from "@/assets/team-huddle.jpg";
import founderPhoto from "@/assets/colette-hosie.jpg";

const paths = [
  {
    icon: Briefcase,
    title: "Leaders & Organizations",
    tagline: "Strengthen leadership. Develop people. Improve how teams work together.",
    to: "/leaders-organizations",
  },
  {
    icon: Trophy,
    title: "Competitive Sports Teams",
    tagline: "Develop the whole student-athlete. Equip coaches. Strengthen the team.",
    to: "/sports-teams",
  },
];

const Home = () => (
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
          3Qtr | Unlocking Human Performance
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto"
        >
          Stronger People. Stronger Teams. <span className="text-gradient-gold">Better Performance.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          3Qtr helps leaders, organizations, coaches, and student-athletes better understand the people behind performance. We identify opportunities to strengthen leadership, communication, trust, alignment, development, and team effectiveness—then create practical solutions tailored to each client.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#paths" className="px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
            How Can We Help You?
          </a>
          <Link to="/contact" className="px-8 py-4 text-sm font-semibold border border-primary text-primary rounded-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
            Start the Conversation
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Paths */}
    <section id="paths" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Get Started"
            title="How Can We Help You?"
            description="Select the path that best describes your organization."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {paths.map((p, i) => (
            <AnimatedSection key={p.to} delay={i * 0.15}>
              <Link
                to={p.to}
                className="group flex flex-col h-full p-10 rounded-sm border border-border bg-secondary/20 hover:border-primary/60 hover:bg-primary/5 transition-colors"
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <p.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{p.tagline}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider group-hover:gap-3 transition-all">
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Development designed around your people */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={teamHuddle} alt="" loading="lazy" width={1280} height={854} className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Development Designed Around <span className="text-gradient-gold">Your People</span>
          </h2>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>3Qtr does not begin with a predetermined program.</p>
            <p>
              We begin by listening, asking thoughtful questions, and understanding what the organization or team hopes to accomplish. We then select the right tools and experiences to support those goals.
            </p>
            <p>
              Whether the need is addressing a business challenge, developing emerging leaders, strengthening an established team, or pouring more intentionally into student-athletes and coaches, the experience is built around the people being served.
            </p>
            <p className="text-foreground font-display text-xl italic">Because when people grow, teams and organizations grow with them.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Meet Colette */}
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 relative">
              <img src={founderPhoto} alt="Colette Hosie, Founder and Principal of 3Qtr" loading="lazy" width={458} height={689} className="w-full max-w-sm mx-auto rounded-sm object-cover aspect-[2/3]" />
              <div className="absolute inset-0 rounded-sm ring-1 ring-primary/20 max-w-sm mx-auto" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-primary/40 rounded-br-sm max-w-sm mx-auto" />
            </div>
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">Founder &amp; Principal</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Meet Colette Hosie</h2>
              <div className="gold-divider-left mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Colette Hosie is the Founder and Principal of 3Qtr. A mechanical engineer with an MBA, she brings nearly 30 years of leadership, operations, and organizational transformation experience, including executive roles with Tiffany &amp; Co., Amazon, and Nike.
                </p>
                <p>
                  Colette is also a former college basketball player, coach, and mother of two athletes. Her certifications span behavioral analysis, emotional intelligence, and tools that reveal individual motivators and skills. Together, these experiences allow her to understand performance from both business and sports perspectives.
                </p>
                <p>
                  She listens, asks the right questions, identifies what is limiting performance, and develops practical solutions that help organizations and teams move forward.
                </p>
              </div>
              <p className="mt-6 font-display text-xl text-primary">Unlocking Human Performance.</p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
                Credentials &amp; Background <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            Want to <span className="text-gradient-gold">learn more?</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us about your organization and what you would like to accomplish.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/leaders-organizations#inquiry" className="px-8 py-4 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
              Leaders &amp; Organizations
            </Link>
            <Link to="/sports-teams#inquiry" className="px-8 py-4 text-sm font-semibold border border-primary text-primary rounded-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
              Competitive Sports Teams
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default Home;
