"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Ambient aurora background — soft animated blobs that drift slowly.
 * Use as a fixed/absolute background layer behind hero or any section.
 */
export function AuroraBackground({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "warm" | "cool";
}) {
  const palette =
    variant === "warm"
      ? ["#ff6b9d", "#ffd166", "#ff8c42"]
      : variant === "cool"
      ? ["#5ce1e6", "#7c5cff", "#a78bfa"]
      : ["#7c5cff", "#ff6b9d", "#5ce1e6"];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        className="aurora-blob absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-30 dark:opacity-40"
        style={{ background: `radial-gradient(circle, ${palette[0]}, transparent 70%)` }}
      />
      <motion.div
        className="aurora-blob absolute -bottom-40 -right-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-25 dark:opacity-35"
        style={{
          background: `radial-gradient(circle, ${palette[1]}, transparent 70%)`,
          animationDelay: "-7s",
        }}
      />
      <motion.div
        className="aurora-blob absolute top-1/3 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={{
          background: `radial-gradient(circle, ${palette[2]}, transparent 70%)`,
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}

/** Subtle SVG noise overlay for filmic grain — fixed on top of the page. */
export function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80] opacity-[var(--noise-opacity)] mix-blend-overlay"
      aria-hidden
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "180px 180px",
      }}
    />
  );
}

/** Parallax grid that drifts on scroll — gives depth to long sections. */
export function ParallaxGrid() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: y1 }}
        className="absolute -inset-[20%] bg-grid mask-fade-b opacity-60"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -inset-[20%] bg-dots opacity-40"
      />
    </div>
  );
}
