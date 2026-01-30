"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const strategicSectors = [
  { key: "wines" as const, icon: "🍷", width: 70, value: "3,9 G€" },
  { key: "aerospace" as const, icon: "✈", width: 90, value: "9 G€" },
  { key: "pharma" as const, icon: "💊", width: 55, value: "15 %" },
  { key: "luxury" as const, icon: "💎", width: 75, value: "LVMH, Hermès" },
];

export function ImpactFranceSection() {
  const t = useTranslations("impactFrance");

  return (
    <SectionWrapper
      id="impact-france"
      ariaLabel={t("sectionTitle")}
      variant="fade-up"
      className="bg-[var(--surface)]"
    >
      <SectionHeader number={t("sectionNumber")} title={t("sectionTitle")} />

      {/* EU Overview */}
      <Card variant="glass" className="mb-8">
        <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
          {t("euOverview")}
        </h3>
        <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--text-secondary)]">
          {t("euDescription")}
        </p>
        {/* EU flags placeholder */}
        <div className="mt-4 flex gap-3">
          {["🇫🇷", "🇩🇪", "🇮🇹", "🇪🇸", "🇳🇱"].map((flag) => (
            <span
              key={flag}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-presidential-blue/5 dark:bg-presidential-blue/20 text-xl"
            >
              {flag}
            </span>
          ))}
        </div>
      </Card>

      {/* Strategic sectors */}
      <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
        {t("strategicSectors")}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {strategicSectors.map(({ key, icon, width, value }) => (
          <Card key={key} variant="solid">
            <span className="text-3xl">{icon}</span>
            <h4 className="mt-3 font-display text-lg font-bold text-[var(--text-primary)]">
              {t(key)}
            </h4>
            <p className="mt-1 font-mono text-xs text-presidential-gold">
              {value}
            </p>
            <div className="mt-3 h-2 w-full rounded-full bg-presidential-blue/10 dark:bg-presidential-blue/30">
              <div
                className="h-full rounded-full bg-presidential-gold"
                style={{ width: `${width}%` }}
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Countermeasures + Diplomacy */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Card variant="outline">
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            {t("countermeasures")}
          </h3>
          <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--text-secondary)]">
            {t("countermeasuresDescription")}
          </p>
          <div className="mt-4 space-y-2">
            {(["countermeasure1", "countermeasure2", "countermeasure3"] as const).map(
              (key) => (
                <div
                  key={key}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-country-france-blue" />
                  <span className="font-serif">{t(key)}</span>
                </div>
              )
            )}
          </div>
        </Card>

        <Card variant="outline">
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            {t("diplomacy")}
          </h3>
          <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--text-secondary)]">
            {t("diplomacyDescription")}
          </p>
        </Card>
      </div>
    </SectionWrapper>
  );
}
