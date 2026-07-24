"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABand() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="font-display font-bold text-[20vw] md:text-[16vw] tracking-tighter text-gradient opacity-[0.05] select-none whitespace-nowrap">
          Let's ship
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-primary mb-4 px-3 py-1 rounded-full glass">
            <Sparkles className="h-3 w-3" />
            Ready when you are
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-gradient leading-[1.1] mb-5">
            Your project deserves an engineer who's shipped under real constraints.
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            One discovery call. No pressure, no sales pitch. Just an honest read
            on whether I'm the right fit — and a clear next step if I am.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full group">
              <Link href="#contact">
                Book a discovery call
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full glass border-transparent hover:bg-accent/50"
            >
              <Link href="#work">Browse case studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
