import { Preloader } from "@/components/layout/Preloader";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { EditionSection } from "@/components/sections/EditionSection";
import { TarifsSection } from "@/components/sections/TarifsSection";
import { ImpactCanadaSection } from "@/components/sections/ImpactCanadaSection";
import { ImpactFranceSection } from "@/components/sections/ImpactFranceSection";
import { ArchivesSection } from "@/components/sections/ArchivesSection";
import { AProposSection } from "@/components/sections/AProposSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <EditionSection />
        <TarifsSection />
        <ImpactCanadaSection />
        <ImpactFranceSection />
        <ArchivesSection />
        <AProposSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
