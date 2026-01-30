"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { motion } from "framer-motion";
import { GoldParticleCanvas } from "@/components/hero/GoldParticleCanvas";
import { HeroTitle } from "@/components/hero/HeroTitle";
import { HeroCounters } from "@/components/hero/HeroCounters";
import { ParallaxLayers } from "@/components/hero/ParallaxLayers";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      aria-label="Accueil"
    >
      <GoldParticleCanvas />
      <ParallaxLayers />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center">
        <HeroTitle />
        <HeroCounters />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-serif text-xs tracking-[0.2em] uppercase text-[var(--text-muted)]">
          {t("scrollIndicator")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-presidential-gold/50"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
