"use client";

import { useTranslations } from "@/i18n/useTranslations";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function EditionSection() {
  const t = useTranslations("edition");

  return (
    <SectionWrapper id="edition" ariaLabel={t("sectionTitle")} variant="fade-up">
      <SectionHeader number={t("sectionNumber")} title={t("sectionTitle")} />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Video placeholder */}
        <div className="lg:col-span-2">
          <Card variant="solid" className="aspect-video overflow-hidden p-0">
            <div className="flex h-full items-center justify-center bg-presidential-blue/5 dark:bg-presidential-blue/20">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-presidential-gold/30">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 text-presidential-gold"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="font-serif text-sm text-[var(--text-muted)]">
                  {t("latestVideo")}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Executive summary */}
        <div className="flex flex-col gap-6">
          <Card variant="glass">
            <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
              {t("executiveSummary")}
            </h3>
            <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--text-secondary)]">
              {t("executiveSummaryText")}
            </p>
            <ul className="mt-4 space-y-3">
              {(["point1", "point2", "point3"] as const).map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-presidential-gold" />
                  <span className="font-serif">{t(key)}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="outline" className="border-presidential-gold/20">
            <p className="font-editorial text-base italic leading-relaxed text-[var(--text-secondary)]">
              &laquo;&nbsp;{t("quoteText")}&nbsp;&raquo;
            </p>
            <p className="mt-3 font-mono text-xs text-presidential-gold/70">
              — {t("quoteAuthor")}
            </p>
          </Card>
        </div>
      </div>

      {/* Timeline placeholder */}
      <div className="mt-12">
        <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
          {t("timeline")}
        </h3>
        <div className="mt-6 flex items-center gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex flex-shrink-0 flex-col items-center gap-2"
            >
              <div className="h-3 w-3 rounded-full border-2 border-presidential-gold bg-transparent" />
              <div className="h-16 w-[1px] bg-presidential-gold/20" />
              <Card
                variant="glass"
                hover={false}
                className="w-56 p-4"
              >
                <p className="font-mono text-xs text-presidential-gold">
                  {t(`timelineDay${i}`)}
                </p>
                <p className="mt-1 font-serif text-sm text-[var(--text-secondary)]">
                  {t(`timelineDay${i}Text`)}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
