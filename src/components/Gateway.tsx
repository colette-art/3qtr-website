import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Trophy, X } from "lucide-react";
import { Audience, AUDIENCES, useAudience } from "@/context/AudienceContext";
import logo from "@/assets/3qtr-logo.png";

const options: { key: Audience; icon: typeof Briefcase }[] = [
  { key: "leaders", icon: Briefcase },
  { key: "sports", icon: Trophy },
];

/** First-visit pop-up: pick a path so visitors only see content meant for them. */
const Gateway = () => {
  const { gatewayOpen, closeGateway, choose } = useAudience();

  return (
    <DialogPrimitive.Root open={gatewayOpen} onOpenChange={(open) => !open && closeGateway()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-background/85 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-[61] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 max-h-[92vh] overflow-y-auto rounded-sm border border-primary/30 bg-card shadow-2xl shadow-black/60 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <div className="h-1 w-full bg-gold-gradient" />
          <DialogPrimitive.Close
            aria-label="Close and browse the site"
            className="absolute right-4 top-5 rounded-sm p-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X size={18} />
          </DialogPrimitive.Close>

          <div className="px-6 py-10 md:px-12 md:py-12 text-center">
            <img src={logo} alt="3Qtr" className="mx-auto h-16 w-auto mb-6" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Welcome to 3Qtr</span>
            <DialogPrimitive.Title className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
              How can we <span className="text-gradient-gold">help you?</span>
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Select the path that best describes you, and we&apos;ll take you straight to what matters.
            </DialogPrimitive.Description>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
              {options.map(({ key, icon: Icon }, i) => (
                <motion.button
                  key={key}
                  type="button"
                  autoFocus={i === 0}
                  onClick={() => choose(key)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col p-8 rounded-sm border border-border bg-secondary/20 hover:border-primary/70 hover:bg-primary/5 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{AUDIENCES[key].label}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{AUDIENCES[key].tagline}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider group-hover:gap-3 transition-all">
                    Enter <ArrowRight size={16} />
                  </span>
                </motion.button>
              ))}
            </div>

            <button
              type="button"
              onClick={closeGateway}
              className="mt-8 text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
            >
              Just looking around? Continue to the main site
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default Gateway;
