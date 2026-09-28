import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const AssessmentModal = ({ isOpen, onClose, title, children }: AssessmentModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-2xl md:w-full z-50 max-h-[80vh] overflow-y-auto rounded-sm border border-border bg-card p-8 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{title}</h3>
            <button onClick={onClose} className="p-2 rounded-sm hover:bg-secondary/50 transition-colors">
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
            {children}
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default AssessmentModal;
