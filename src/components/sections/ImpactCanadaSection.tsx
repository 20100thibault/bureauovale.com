"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const dashboardMetrics = [
  { labelKey: "gdpLabel" as const, value: "+2.6%", trend: "up" },
  { labelKey: "employmentLabel" as const, value: "6.8%", trend: "down" },
  { labelKey: "exportsLabel" as const, value: "67.3%", trend: "down" },
  { labelKey: "tradeBalanceLabel" as const, value: "+4.8G$", trend: "up" },
];

const sectors = [
  { key: "auto" as const, impact: "25%", color: "bg-country-canada-red", label: "80 G$ CAD" },
  { key: "steel" as const, impact: "50%", color: "bg-presidential-gold", label: "12.6 G$ CAD" },
  { key: "energy" as const, impact: "Exempté", color: "bg-presidential-blue", label: "63% import. US" },
  { key: "agriculture" as const, impact: "Variable", color: "bg-green-700", label: "Laitier, canola" },
];

export function ImpactCanadaSection() {
  const t = useTranslations("impactCanada");

  return (
    <SectionWrapper id="impact-canada" ariaLabel={t("sectionTitle")} variant="fade-up">
      <SectionHeader number={t("sectionNumber")} title={t("sectionTitle")} />

      {/* Dashboard */}
      <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
        {t("dashboard")}
      </h3>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {dashboardMetrics.map(({ labelKey, value, trend }) => (
          <Card key={labelKey} variant="glass" className="text-center">
            <p className="font-serif text-xs uppercase tracking-wider text-[var(--text-muted)]">
              {t(labelKey)}
            </p>
            <p
              className={`mt-2 font-mono text-2xl font-bold ${
                trend === "down"
                  ? "text-presidential-red"
                  : "text-presidential-gold"
              }`}
            >
              {value}
            </p>
          </Card>
        ))}
      </div>

      {/* Sectors */}
      <h3 className="mt-12 font-display text-xl font-bold text-[var(--text-primary)]">
        {t("affectedSectors")}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sectors.map(({ key, impact, color, label }) => (
          <Card key={key} variant="solid">
            <div className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${color}`} />
              <span className="font-serif text-sm font-bold text-[var(--text-primary)]">
                {t(key)}
              </span>
            </div>
            <p className={`mt-3 font-mono text-xl font-bold ${impact === "Exempté" ? "text-green-500" : "text-presidential-gold"}`}>
              {impact}
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
              {label}
            </p>
          </Card>
        ))}
      </div>

      {/* Regional analysis + Scenarios */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Card variant="outline">
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            {t("regional")}
          </h3>
          <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--text-secondary)]">
            {t("regionalDescription")}
          </p>
          {/* Map placeholder */}
          <div className="mt-4 aspect-[3/2] rounded bg-presidential-blue/5 dark:bg-presidential-blue/20" />
        </Card>

        <Card variant="outline">
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            {t("scenarios")}
          </h3>
          <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--text-secondary)]">
            {t("scenariosDescription")}
          </p>
          <div className="mt-4 space-y-3">
            {[t("scenarioOptimiste"), t("scenarioModere"), t("scenarioPessimiste")].map((scenario, i) => (
              <div
                key={scenario}
                className="flex items-center gap-3 rounded-lg border border-[var(--border-default)] p-3"
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    i === 0
                      ? "bg-green-500"
                      : i === 1
                        ? "bg-presidential-gold"
                        : "bg-presidential-red"
                  }`}
                />
                <span className="font-serif text-sm text-[var(--text-primary)]">
                  {scenario}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
