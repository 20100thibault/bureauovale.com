import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LenisProvider } from "@/providers/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bureau Ovale — Analyse de l'Amérique trumpienne",
  description:
    "Analyse bi-mensuelle approfondie des décisions économiques américaines et de leurs répercussions sur le Canada et la France.",
  openGraph: {
    title: "Bureau Ovale",
    description:
      "L'Amérique trumpienne et ses répercussions sur nos économies.",
    siteName: "Bureau Ovale",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={fontVariables} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LenisProvider>
            <a href="#main-content" className="skip-to-content">
              Aller au contenu principal
            </a>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
