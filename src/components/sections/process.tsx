"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/sections/section-heading";

export function Process() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A process that respects your time"
          description="No mystery, no ghosting, no surprise invoices. Four predictable stages from first call to production launch."
        />

        <div ref={ref} className="relative mt-16 max-w-3xl mx-auto">
          {/* Vertical track */}
          <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-border/60" />

          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 sm:left-8 top-2 w-px bg-gradient-to-b from-primary via-primary to-primary/40 origin-top"
          />

          {/* Steps */}
          <div className="space-y-10">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Number node */}
                <div className="absolute left-0 top-0 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full glass-strong">
                  <span className="font-display font-bold text-base sm:text-lg text-gradient-primary">
                    {step.number}
                  </span>
                  <span className="absolute inset-0 rounded-full ring-1 ring-primary/30" />
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary/10"
                    initial={{ scale: 1, opacity: 0.5 }}
                    whileInView={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 + i * 0.1 }}
                  />
                </div>

                {/* Content */}
                <div className="pt-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1.5">
                    <h3 className="font-display font-semibold text-xl tracking-tight">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded-full bg-muted/50">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {step.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
