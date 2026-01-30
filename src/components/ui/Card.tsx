"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  variant?: "glass" | "solid" | "outline";
  hover?: boolean;
  className?: string;
  as?: "div" | "article";
}

const variantStyles = {
  glass: "glass-card",
  solid: "bg-[var(--surface)] border border-[var(--border-default)] shadow-[var(--shadow-md)]",
  outline: "border border-[var(--border-gold)] bg-transparent",
};

export function Card({
  children,
  variant = "glass",
  hover = true,
  className,
  as = "div",
}: CardProps) {
  const Tag = hover ? motion[as] : as;

  const baseClasses = cn(
    "rounded-lg p-6",
    variantStyles[variant],
    !hover && "transition-all duration-400",
    className
  );

  if (!hover) {
    const StaticTag = as;
    return <StaticTag className={baseClasses}>{children}</StaticTag>;
  }

  return (
    <Tag
      className={baseClasses}
      whileHover={{
        y: -4,
        boxShadow: "0 8px 30px rgba(201, 162, 39, 0.15)",
        borderColor: "rgba(201, 162, 39, 0.3)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}
