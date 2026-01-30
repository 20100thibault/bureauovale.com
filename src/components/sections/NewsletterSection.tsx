"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "@/i18n/useTranslations";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";

export function NewsletterSection() {
  const t = useTranslations("newsletter");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <SectionWrapper
      id="newsletter"
      ariaLabel={t("title")}
      variant="stamp"
      className="overflow-hidden"
    >
      <div className="relative mx-auto max-w-2xl text-center">
        {/* Decorative seal */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-presidential-gold/30">
          <svg
            viewBox="0 0 60 60"
            className="h-12 w-12 text-presidential-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="30" cy="30" r="28" />
            <circle cx="30" cy="30" r="22" />
            <path d="M30 8 L32 25 L30 22 L28 25 Z" fill="currentColor" />
            <path d="M30 52 L32 35 L30 38 L28 35 Z" fill="currentColor" />
            <path d="M8 30 L25 32 L22 30 L25 28 Z" fill="currentColor" />
            <path d="M52 30 L35 32 L38 30 L35 28 Z" fill="currentColor" />
          </svg>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          {t("title")}
        </h2>
        <p className="mt-4 font-serif text-base leading-relaxed text-[var(--text-secondary)]">
          {t("subtitle")}
        </p>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder={t("placeholder")}
                required
                className="flex-1 rounded-lg border border-[var(--border-default)] bg-[var(--surface)] px-4 py-3 font-serif text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-presidential-gold focus:outline-none focus:ring-1 focus:ring-presidential-gold"
                aria-label={t("placeholder")}
              />
              <button type="submit" className="btn-presidential whitespace-nowrap">
                {t("submit")}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <p className="font-serif text-lg text-presidential-gold">
                {t("thanks")}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-4 font-serif text-xs text-[var(--text-muted)]">
          {t("privacy")}
        </p>
      </div>
    </SectionWrapper>
  );
}
