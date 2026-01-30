import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-sm tracking-[0.3em] uppercase text-presidential-gold/60">
        Erreur
      </span>
      <h1 className="mt-2 font-display text-8xl font-bold sm:text-9xl text-gold-gradient">
        404
      </h1>
      <div className="mx-auto mt-6 h-[2px] w-24 bg-gold-gradient" />
      <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-[var(--text-secondary)]">
        Cette page n&apos;existe pas ou a été déplacée.
        Retournez au Bureau Ovale.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-sm border border-presidential-gold/30 bg-presidential-gold/10 px-6 py-3 font-serif text-sm tracking-wide text-presidential-gold transition-all duration-300 hover:bg-presidential-gold hover:text-presidential-blue"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
