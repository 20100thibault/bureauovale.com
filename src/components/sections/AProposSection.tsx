"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const teamMembers = [
  { name: "Stéphan Bureau", role: "Animateur & Analyste", initials: "SB" },
  { name: "Marie-Claire Lévesque", role: "Économiste en chef", initials: "ML" },
  { name: "Philippe Durand", role: "Correspondant Washington", initials: "PD" },
];

export function AProposSection() {
  const t = useTranslations("aPropos");

  return (
    <SectionWrapper
      id="a-propos"
      ariaLabel={t("sectionTitle")}
      variant="fade-up"
      className="bg-[var(--surface)]"
    >
      <SectionHeader number={t("sectionNumber")} title={t("sectionTitle")} />

      {/* Team */}
      <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
        {t("team")}
      </h3>
      <p className="mt-2 font-serif text-sm text-[var(--text-secondary)]">
        {t("teamDescription")}
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {teamMembers.map(({ name, role, initials }) => (
          <Card key={name} variant="solid" className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-presidential-blue text-presidential-cream">
              <span className="font-display text-xl font-bold">
                {initials}
              </span>
            </div>
            <h4 className="mt-4 font-display text-lg font-bold text-[var(--text-primary)]">
              {name}
            </h4>
            <p className="mt-1 font-serif text-sm text-[var(--text-muted)]">
              {role}
            </p>
          </Card>
        ))}
      </div>

      {/* Methodology + Partners */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Card variant="glass">
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            {t("methodology")}
          </h3>
          <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--text-secondary)]">
            {t("methodologyDescription")}
          </p>
        </Card>

        <Card variant="glass">
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
            {t("partners")}
          </h3>
          <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--text-secondary)]">
            {t("partnersDescription")}
          </p>
        </Card>
      </div>

      {/* Press contact */}
      <Card variant="outline" className="mt-8">
        <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
          {t("press")}
        </h3>
        <p className="mt-2 font-serif text-sm text-[var(--text-secondary)]">
          {t("pressDescription")}
        </p>
        <p className="mt-3 font-mono text-sm text-presidential-gold">
          {t("pressEmail")}
        </p>
      </Card>
    </SectionWrapper>
  );
}
