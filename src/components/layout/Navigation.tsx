"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "@/i18n/useTranslations";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SECTIONS, NAV_HEIGHT } from "@/lib/constants";
import { useTheme } from "@/providers/ThemeProvider";

export function Navigation() {
  const t = useTranslations("navigation");
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    setScrollProgress(maxScroll > 0 ? y / maxScroll : 0);
    setIsScrolled(y > 50);
    setIsHidden(y > lastScrollY.current && y > NAV_HEIGHT * 2);
    lastScrollY.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 z-[100] h-[2px] bg-gold-gradient"
        style={{ width: `${scrollProgress * 100}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Navigation bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "glass-card py-3" : "py-5 bg-transparent",
          isHidden && !isMenuOpen && "-translate-y-full"
        )}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-display text-lg font-bold tracking-wider text-gold-gradient"
          >
            BUREAU OVALE
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {SECTIONS.slice(1).map(({ id, labelKey }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "group relative font-serif text-sm tracking-wide transition-colors duration-300",
                  activeSection === id
                    ? "text-presidential-gold"
                    : "text-[var(--text-secondary)] hover:text-presidential-gold"
                )}
              >
                {t(labelKey.split(".")[1])}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[1px] bg-presidential-gold transition-all duration-300",
                    activeSection === id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 text-[var(--text-secondary)] hover:text-presidential-gold transition-colors"
              aria-label={
                theme === "dark" ? "Mode clair" : "Mode sombre"
              }
            >
              {theme === "dark" ? (
                <SunIcon />
              ) : (
                <MoonIcon />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "h-[1.5px] w-6 bg-presidential-gold transition-all duration-300",
                  isMenuOpen && "translate-y-[4.5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-[1.5px] w-6 bg-presidential-gold transition-all duration-300",
                  isMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-[1.5px] w-6 bg-presidential-gold transition-all duration-300",
                  isMenuOpen && "-translate-y-[4.5px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-presidential-blue/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {SECTIONS.map(({ id, labelKey }, index) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "font-display text-2xl tracking-wide transition-colors",
                    activeSection === id
                      ? "text-presidential-gold"
                      : "text-presidential-cream/70 hover:text-presidential-gold"
                  )}
                >
                  {id === "hero"
                    ? t("hero")
                    : t(labelKey.split(".")[1])}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={toggleTheme}
                className="mt-4 text-presidential-cream/50 hover:text-presidential-gold transition-colors"
                aria-label={
                  theme === "dark" ? "Mode clair" : "Mode sombre"
                }
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
