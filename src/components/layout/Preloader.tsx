"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("bo-loaded");
    if (alreadyLoaded || prefersReduced) {
      setIsVisible(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("bo-loaded", "1");
        setIsVisible(false);
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
        "-=0.2"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.2"
      )
      .to({}, { duration: 0.4 })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [prefersReduced]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-presidential-blue"
      aria-hidden="true"
    >
      <div ref={textRef} className="opacity-0 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gold-gradient">
          BUREAU OVALE
        </h1>
      </div>
      <div
        ref={lineRef}
        className="mt-4 h-[2px] w-24 origin-left scale-x-0 bg-gold-gradient"
      />
      <div ref={subtitleRef} className="mt-4 opacity-0">
        <p className="font-serif text-sm tracking-[0.3em] uppercase text-presidential-cream/60">
          Analyse &bull; Économie &bull; Géopolitique
        </p>
      </div>
    </div>
  );
}
