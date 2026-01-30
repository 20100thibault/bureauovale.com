import {
  Playfair_Display,
  Libre_Baskerville,
  Source_Serif_4,
  JetBrains_Mono,
} from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-baskerville",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-serif",
  weight: ["400", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
});

export const fontVariables = [
  playfairDisplay.variable,
  libreBaskerville.variable,
  sourceSerif.variable,
  jetbrainsMono.variable,
].join(" ");
