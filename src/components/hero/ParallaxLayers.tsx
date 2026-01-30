"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ParallaxLayers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;

    const layers = containerRef.current.querySelectorAll(".parallax-layer");

    const triggers = Array.from(layers).map((layer, i) => {
      const speed = (i + 1) * 0.15;
      return gsap.to(layer, {
        y: `${speed * 100}%`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      triggers.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[1] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Layer 1: Radial gold glow */}
      <div className="parallax-layer absolute inset-0 bg-hero-radial opacity-60" />

      {/* Layer 2: Decorative lines */}
      <div className="parallax-layer absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 800 600"
          className="h-full w-full max-w-5xl opacity-[0.04]"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          {/* Oval shape evoking the Oval Office */}
          <ellipse cx="400" cy="300" rx="350" ry="250" className="text-presidential-gold" />
          <ellipse cx="400" cy="300" rx="300" ry="210" className="text-presidential-gold" />
          <ellipse cx="400" cy="300" rx="250" ry="170" className="text-presidential-gold" />
          {/* Crossed lines */}
          <line x1="50" y1="300" x2="750" y2="300" className="text-presidential-gold" />
          <line x1="400" y1="50" x2="400" y2="550" className="text-presidential-gold" />
        </svg>
      </div>

      {/* Layer 3: Subtle vignette */}
      <div className="parallax-layer absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
    </div>
  );
}
