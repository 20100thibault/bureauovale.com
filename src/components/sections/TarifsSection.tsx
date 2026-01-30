"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const tariffData = [
  { key: "steelTariff" as const, rate: "50%", trend: "+25% juin" },
  { key: "aluminumTariff" as const, rate: "50%", trend: "+25% juin" },
  { key: "autoTariff" as const, rate: "25%", trend: "15% UE/JP" },
  { key: "agriTariff" as const, rate: "10-50%", trend: "Variable" },
];

export function TarifsSection() {
  const t = useTranslations("tarifs");

  return (
    <SectionWrapper
      id="tarifs"
      ariaLabel={t("sectionTitle")}
      variant="fade-up"
      className="bg-[var(--surface)]"
    >
      <SectionHeader number={t("sectionNumber")} title={t("sectionTitle")} />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Interactive map placeholder */}
        <Card variant="solid" className="aspect-[4/3] overflow-hidden p-0 lg:row-span-2">
          <div className="flex h-full flex-col items-center justify-center bg-presidential-blue/5 dark:bg-presidential-blue/20 p-8">
            <svg
              viewBox="0 0 200 120"
              className="mb-6 w-full max-w-xs opacity-20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              {/* Simplified North America outline */}
              <ellipse cx="60" cy="50" rx="40" ry="35" className="text-country-canada-blue" />
              <ellipse cx="70" cy="65" rx="35" ry="30" className="text-country-usa-blue" />
              {/* Europe */}
              <ellipse cx="150" cy="45" rx="25" ry="30" className="text-country-france-blue" />
              {/* Trade arrow */}
              <line x1="100" y1="55" x2="125" y2="50" className="text-presidential-gold" strokeWidth="1" />
              <polygon points="125,47 125,53 130,50" fill="currentColor" className="text-presidential-gold" />
            </svg>
            <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
              {t("interactiveMap")}
            </h3>
            <p className="mt-2 max-w-sm text-center font-serif text-sm text-[var(--text-muted)]">
              {t("mapDescription")}
            </p>
          </div>
        </Card>

        {/* Tariff rate cards */}
        <div className="grid grid-cols-2 gap-4">
          {tariffData.map(({ key, rate, trend }) => (
            <Card key={key} variant="glass" className="text-center">
              <p className="font-serif text-xs uppercase tracking-wider text-[var(--text-muted)]">
                {t(key)}
              </p>
              <p className="mt-2 font-mono text-3xl font-bold text-presidential-gold">
                {rate}
              </p>
              <p className="mt-1 font-mono text-xs text-presidential-red">
                {trend}
              </p>
            </Card>
          ))}
        </div>

        {/* Exchange rates */}
        <Card variant="glass">
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            {t("exchangeRates")}
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-xs text-[var(--text-muted)]">
                {t("cadUsd")}
              </p>
              <p className="mt-1 font-mono text-2xl font-bold text-[var(--text-primary)]">
                0.7407
              </p>
              <p className="mt-1 font-mono text-xs text-green-500">1 USD = 1.35 CAD</p>
            </div>
            <div>
              <p className="font-mono text-xs text-[var(--text-muted)]">
                {t("eurUsd")}
              </p>
              <p className="mt-1 font-mono text-2xl font-bold text-[var(--text-primary)]">
                1.0420
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* History timeline */}
      <div className="mt-12">
        <Card variant="outline">
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            {t("history")}
          </h3>
          <p className="mt-2 font-serif text-sm text-[var(--text-secondary)]">
            {t("historyDescription")}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-presidential-gold/20" />
            {["1930", "1962", "2002", "2018", "2025"].map((year) => (
              <span
                key={year}
                className="font-mono text-xs text-presidential-gold/60"
              >
                {year}
              </span>
            ))}
            <div className="h-[1px] flex-1 bg-presidential-gold/20" />
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
