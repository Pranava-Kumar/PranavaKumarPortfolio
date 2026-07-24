"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Network,
  Server,
  Layers,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Network,
  Server,
  Layers,
  ShieldCheck,
  Compass,
};

const ACCENTS = [
  "from-violet-500/20 to-fuchsia-500/10 text-violet-600 dark:text-violet-300",
  "from-cyan-500/20 to-blue-500/10 text-cyan-600 dark:text-cyan-300",
  "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-300",
  "from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-300",
  "from-rose-500/20 to-pink-500/10 text-rose-600 dark:text-rose-300",
  "from-indigo-500/20 to-violet-500/10 text-indigo-600 dark:text-indigo-300",
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I do"
          title="Services built for shipping"
          description="Six focused engagement types. Each one scoped, priced, and delivered with the rigor of someone who's shipped production systems under real constraints — not just demoed them."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Sparkles;
            const accent = ACCENTS[i % ACCENTS.length];

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl glass p-6 hover:glass-strong transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              >
                {/* Hover gradient glow */}
                <div
                  className={cn(
                    "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md",
                    accent
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    accent
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-xl tracking-tight mb-2">
                  {service.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.summary}
                </p>

                {/* Deliverables */}
                <ul className="space-y-1.5 mb-5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Footer: stack + price */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.stack.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                    {service.stack.length > 2 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground">
                        +{service.stack.length - 2}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-foreground">
                    from {service.priceFrom}
                  </span>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
