"use client";

import { useEffect, useRef, useCallback } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { GOLD_COLORS, PARTICLE_CONFIG } from "@/lib/constants";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  phase: number;
  speed: number;
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -(Math.random() * 0.4 + 0.1),
    size: Math.random() * 2.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.2,
    color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.5 + 0.5,
  };
}

function resetParticle(p: Particle, w: number, h: number) {
  p.x = Math.random() * w;
  p.y = h + 10;
  p.vx = (Math.random() - 0.5) * 0.3;
  p.vy = -(Math.random() * 0.4 + 0.1);
  p.opacity = Math.random() * 0.5 + 0.2;
  p.phase = Math.random() * Math.PI * 2;
}

function initPool(count: number, w: number, h: number): Particle[] {
  return Array.from({ length: count }, () => createParticle(w, h));
}

function updateParticle(p: Particle, time: number) {
  p.x += p.vx + Math.sin(time * 0.001 + p.phase) * 0.15;
  p.y += p.vy * p.speed;
  p.opacity += Math.sin(time * 0.002 + p.phase) * 0.003;
  p.opacity = Math.max(0.05, Math.min(0.7, p.opacity));
}

export function GoldParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMobile) return;
      mouseRef.current = { x: e.clientX, y: e.clientY };
    },
    [isMobile]
  );

  const renderFrame = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      time: number
    ) => {
      ctx.clearRect(0, 0, w, h);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        updateParticle(p, time);

        if (p.y < -10 || p.x < -10 || p.x > w + 10) {
          resetParticle(p, w, h);
        }

        let drawX = p.x;
        let drawY = p.y;

        if (!isMobile && mouse.x > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            drawX += dx * force * 0.05;
            drawY += dy * force * 0.05;
          }
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    },
    [isMobile]
  );

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();

    const config = isMobile ? PARTICLE_CONFIG.mobile : PARTICLE_CONFIG.desktop;
    particlesRef.current = initPool(
      config.count,
      window.innerWidth,
      window.innerHeight
    );

    window.addEventListener("resize", resize);
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const animate = (time: number) => {
      renderFrame(ctx, window.innerWidth, window.innerHeight, time);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, prefersReduced, handleMouseMove, renderFrame]);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
