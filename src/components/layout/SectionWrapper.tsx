"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel: string;
  variant?: "fade-up" | "fade-in" | "slide-left" | "stamp";
}

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  stamp: {
    hidden: { opacity: 0, scale: 1.15 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function SectionWrapper({
  id,
  children,
  className,
  ariaLabel,
  variant = "fade-up",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={variants[variant]}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative py-[var(--section-padding-y)] px-[var(--section-padding-x)]",
        className
      )}
      aria-label={ariaLabel}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}
