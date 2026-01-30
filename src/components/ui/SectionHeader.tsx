"use client";

interface SectionHeaderProps {
  number: string;
  title: string;
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="section-number">{number}</span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
        {title}
      </h2>
      <div className="gold-divider mt-6 w-full max-w-xs" />
    </div>
  );
}
