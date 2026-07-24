"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/effects/ambient";
import { PROFILE, HERO_STATS } from "@/lib/portfolio-data";

// 3D scene loaded only on client (no SSR) — keeps initial load fast.
const HeroScene = dynamic(
  () => import("@/components/3d/hero-scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null }
);
const ThreeErrorBoundary = dynamic(
  () =>
    import("@/components/3d/error-boundary").then((m) => m.ThreeErrorBoundary),
  { ssr: false }
);

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yScene = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16"
    >
      <AuroraBackground variant="cool" />

      {/* Background 3D scene */}
      <motion.div
        style={{ y: yScene, opacity }}
        className="absolute inset-0 z-0"
      >
        <ThreeErrorBoundary>
          <HeroScene />
        </ThreeErrorBoundary>
      </motion.div>

      {/* Foreground content */}
      <motion.div
        style={{ y: yText, opacity, scale }}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full pointer-events-none"
      >
        <div className="max-w-3xl">
          {/* Availability pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium mb-6 pointer-events-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-muted-foreground">{PROFILE.availability}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-shadow-premium"
          >
            <span className="block text-gradient">Freelance AI</span>
            <span className="block">
              <span className="text-gradient-primary">& Backend</span> engineer
            </span>
            <span className="block text-muted-foreground text-3xl sm:text-4xl lg:text-5xl mt-2">
              for clients who ship.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {PROFILE.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3 pointer-events-auto"
          >
            <Button asChild size="lg" className="rounded-full group">
              <Link href="#contact">
                <Sparkles className="mr-1.5 h-4 w-4" />
                Start a project
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full glass border-transparent hover:bg-accent/50"
            >
              <Link href="#work">See case studies</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl pointer-events-auto"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dt className="font-display font-bold text-2xl sm:text-3xl text-gradient-primary">
                  {stat.value}
                  <span className="text-base text-muted-foreground font-sans font-normal">
                    {stat.suffix}
                  </span>
                </dt>
                <dd className="text-xs text-muted-foreground leading-snug">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background z-[5] pointer-events-none" />
    </section>
  );
}
