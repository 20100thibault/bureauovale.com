"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const mockEditions = [
  { date: "21 Jan 2025", title: "America First Trade Policy", theme: "Politique" },
  { date: "4 Mars 2025", title: "Tarifs IEEPA : le choc du 25 %", theme: "Tarifs" },
  { date: "2 Avr 2025", title: "Liberation Day : l'onde de choc", theme: "Mondial" },
  { date: "4 Juin 2025", title: "Acier et aluminium à 50 %", theme: "Industrie" },
  { date: "21 Août 2025", title: "L'accord-cadre UE à 15 %", theme: "Europe" },
  { date: "27 Jan 2026", title: "Bilan : un an de tarifs Trump 2.0", theme: "Analyse" },
];

export function ArchivesSection() {
  const t = useTranslations("archives");

  return (
    <SectionWrapper id="archives" ariaLabel={t("sectionTitle")} variant="fade-up">
      <SectionHeader number={t("sectionNumber")} title={t("sectionTitle")} />

      {/* Search and filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--surface)] px-4 py-3 pl-10 font-serif text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-presidential-gold focus:outline-none focus:ring-1 focus:ring-presidential-gold"
            aria-label={t("searchPlaceholder")}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="flex gap-2">
          <button className="btn-presidential text-xs py-2 px-4">
            {t("filterByTheme")}
          </button>
          <button className="rounded-lg border border-[var(--border-default)] px-4 py-2 font-serif text-xs text-[var(--text-secondary)] hover:border-presidential-gold transition-colors">
            {t("filterByDate")}
          </button>
        </div>
      </div>

      {/* Editions grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockEditions.map(({ date, title, theme }) => (
          <Card key={title} variant="solid" as="article">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-presidential-gold/10 px-3 py-1 font-mono text-xs text-presidential-gold">
                {theme}
              </span>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                {date}
              </span>
            </div>
            <h3 className="mt-3 font-display text-lg font-bold text-[var(--text-primary)]">
              {title}
            </h3>
            <p className="mt-2 font-serif text-sm text-[var(--text-secondary)]">
              {t("edition")} — {title}
            </p>
            <button className="group mt-4 inline-flex items-center gap-1 font-serif text-sm font-bold text-presidential-gold">
              {t("allEditions")}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
