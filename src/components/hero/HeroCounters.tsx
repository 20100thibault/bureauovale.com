"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { useTranslations } from "@/i18n/useTranslations";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { INAUGURATION_DATE } from "@/lib/constants";

interface CounterItemProps {
  value: string;
  label: string;
  suffix?: string;
  delay: number;
}

function CounterItem({ value, label, suffix, delay }: CounterItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center"
    >
      <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient tabular-nums">
        {value}
        {suffix && (
          <span className="ml-1 text-lg font-normal text-presidential-gold/70">
            {suffix}
          </span>
        )}
      </span>
      <span className="mt-2 font-serif text-xs sm:text-sm tracking-[0.15em] uppercase text-[var(--text-muted)]">
        {label}
      </span>
    </motion.div>
  );
}

function GoldSeparator() {
  return (
    <div className="hidden sm:flex items-center justify-center" aria-hidden="true">
      <div className="h-16 w-[1px] bg-presidential-gold/20" />
    </div>
  );
}

export function HeroCounters() {
  const t = useTranslations("hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const daysSince = useMemo(() => {
    const now = new Date();
    const diff = now.getTime() - INAUGURATION_DATE.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }, []);

  const daysValue = useCountUp({
    end: daysSince,
    duration: 2500,
    enabled: isVisible,
  });
  const tarifsValue = useCountUp({
    end: 23,
    duration: 2000,
    enabled: isVisible,
  });
  const impactValue = useCountUp({
    end: 148,
    duration: 2200,
    enabled: isVisible,
  });

  return (
    <div
      ref={containerRef}
      className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-6 md:gap-10"
    >
      <CounterItem
        value={daysValue}
        label={t("counter1Label")}
        delay={2}
      />
      <GoldSeparator />
      <CounterItem
        value={tarifsValue}
        label={t("counter2Label")}
        delay={2.2}
      />
      <GoldSeparator />
      <CounterItem
        value={impactValue}
        label={t("counter3Label")}
        suffix={t("counter3Unit")}
        delay={2.4}
      />
    </div>
  );
}
