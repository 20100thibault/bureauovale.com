export const SITE_NAME = "Bureau Ovale";
export const SITE_URL = "https://bureauovale.com";

export const INAUGURATION_DATE = new Date("2025-01-20T12:00:00-05:00");

export const SECTIONS = [
  { id: "hero", labelKey: "navigation.hero" },
  { id: "edition", labelKey: "navigation.edition" },
  { id: "tarifs", labelKey: "navigation.tarifs" },
  { id: "impact-canada", labelKey: "navigation.impactCanada" },
  { id: "impact-france", labelKey: "navigation.impactFrance" },
  { id: "archives", labelKey: "navigation.archives" },
  { id: "a-propos", labelKey: "navigation.aPropos" },
] as const;

export const PARTICLE_CONFIG = {
  desktop: { count: 150, mouseParallax: true },
  mobile: { count: 50, mouseParallax: false },
} as const;

export const GOLD_COLORS = [
  "#c9a227",
  "#d4af37",
  "#ffd700",
  "#b8860b",
  "#daa520",
] as const;

export const NAV_HEIGHT = 80;
export const NAV_HEIGHT_SCROLLED = 64;
