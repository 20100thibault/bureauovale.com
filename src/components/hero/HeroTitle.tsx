"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const charVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.6 + i * 0.04,
      duration: 0.6,
      ease: EASE,
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 1.4, duration: 0.8, ease: EASE },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.6, duration: 0.8, ease: EASE },
  },
};

export function HeroTitle() {
  const t = useTranslations("hero");
  const title = t("title");
  const words = title.split(" ");

  let charIndex = 0;

  return (
    <div className="text-center" style={{ perspective: "600px" }}>
      <motion.h1
        initial="hidden"
        animate="visible"
        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight"
        aria-label={title}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-block mr-[0.2em]">
            {word.split("").map((char) => {
              const i = charIndex++;
              return (
                <motion.span
                  key={`${wi}-${i}`}
                  custom={i}
                  variants={charVariants}
                  className="inline-block text-gold-gradient"
                  style={{ transformOrigin: "bottom" }}
                  aria-hidden="true"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        className="mx-auto mt-6 h-[2px] w-32 origin-center bg-gold-gradient"
      />

      <motion.p
        initial="hidden"
        animate="visible"
        variants={subtitleVariants}
        className="mx-auto mt-6 max-w-2xl font-serif text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed"
      >
        {t("subtitle")}
      </motion.p>
    </div>
  );
}
