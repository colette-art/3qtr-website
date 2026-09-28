import { useState } from "react";
import { Award, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableCredentialProps {
  icon?: React.ReactNode;
  label: string;
  details?: string | React.ReactNode;
  color?: string;
}

const ExpandableCredential = ({ icon, label, details, color = "text-primary" }: ExpandableCredentialProps) => {
  const [open, setOpen] = useState(false);
  const isClickable = !!details;

  return (
    <div className="rounded-sm border border-border bg-secondary/30 overflow-hidden">
      <button
        onClick={() => isClickable && setOpen(!open)}
        className={`flex items-center gap-3 p-3 w-full text-left ${isClickable ? "cursor-pointer hover:bg-secondary/50 transition-colors" : "cursor-default"}`}
      >
        {icon || <Award size={16} className={`${color} shrink-0`} />}
        <span className="text-sm font-medium flex-1">{label}</span>
        {isClickable && (
          <ChevronDown
            size={14}
            className={`text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>
      <AnimatePresence>
        {open && details && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-border/50">
              {details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableCredential;
