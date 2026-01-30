"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { SECTIONS } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("navigation");
  const year = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-presidential-blue text-presidential-cream noise-overlay"
      role="contentinfo"
    >
      <div className="gold-divider" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold text-gold-gradient">
              BUREAU OVALE
            </span>
            <p className="mt-4 max-w-xs font-serif text-sm leading-relaxed text-presidential-cream/60">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-presidential-gold">
              {t("navigation")}
            </h3>
            <ul className="mt-4 space-y-3">
              {SECTIONS.slice(1).map(({ id, labelKey }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="font-serif text-sm text-presidential-cream/60 hover:text-presidential-gold transition-colors"
                  >
                    {nav(labelKey.split(".")[1])}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-presidential-gold">
              {t("legal")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="font-serif text-sm text-presidential-cream/60">
                  {t("privacy")}
                </span>
              </li>
              <li>
                <span className="font-serif text-sm text-presidential-cream/60">
                  {t("legal")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-presidential-cream/10 pt-8 sm:flex-row">
          <p className="font-serif text-xs text-presidential-cream/40">
            {t("copyright", { year: String(year) })}
          </p>
          <p className="font-serif text-xs text-presidential-cream/40">
            {t("madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
