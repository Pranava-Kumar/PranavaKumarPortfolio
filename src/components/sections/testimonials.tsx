"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SlideDir = 1 | -1;

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<SlideDir>(1);
  const [paused, setPaused] = React.useState(false);

  const next = React.useCallback(() => {
    setDirection(1);
    setIndex((p) => (p + 1) % TESTIMONIALS.length);
  }, []);
  const prev = React.useCallback(() => {
    setDirection(-1);
    setIndex((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Faster interval: 4.5s instead of 7s
  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next, paused]);

  const current = TESTIMONIALS[index];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative 3D rotating wireframe sphere backdrop */}
      <RotatingSphereBackdrop />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client voices"
          title="What clients say after launch"
          description="A few words from people I've worked with. Identities anonymized at their request — happy to share named references privately once we're in conversation."
          align="center"
        />

        <div
          className="mt-14 max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="relative rounded-3xl glass-strong p-8 sm:p-12 overflow-hidden min-h-[22rem] flex flex-col justify-center"
            style={{ perspective: "1400px" }}
          >
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/15 -scale-x-100" />
            <Quote className="absolute bottom-6 right-6 h-12 w-12 text-primary/15" />

            {/* Progress bars across the top of the card */}
            <div className="absolute top-0 inset-x-0 h-1 flex gap-1 px-4 pt-2">
              {TESTIMONIALS.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-0.5 bg-muted-foreground/20 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: i < index ? "100%" : "0%" }}
                    animate={{
                      width:
                        i < index
                          ? "100%"
                          : i === index
                          ? paused
                            ? "30%"
                            : "100%"
                          : "0%",
                    }}
                    transition={{
                      duration: i === index && !paused ? 4.5 : 0.4,
                      ease: "linear",
                    }}
                  />
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={index}
                custom={direction}
                initial={(d: SlideDir) => ({
                  opacity: 0,
                  rotateY: d * 65,
                  x: d * 60,
                  scale: 0.92,
                })}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  x: 0,
                  scale: 1,
                }}
                exit={(d: SlideDir) => ({
                  opacity: 0,
                  rotateY: -d * 65,
                  x: -d * 60,
                  scale: 0.92,
                })}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                className="relative z-10"
              >
                <p className="font-display text-lg sm:text-xl leading-relaxed text-foreground/90 mb-7">
                  "{current.quote}"
                </p>
                <footer className="flex items-center gap-3">
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-chart-4/30 font-display font-bold text-sm ring-2 ring-primary/20"
                  >
                    {current.initials}
                  </motion.span>
                  <div>
                    <div className="text-sm font-medium">{current.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {current.role}
                    </div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* Floating sparkles for accent */}
            <FloatingSparkle delay={0} className="top-10 right-12 text-primary/30" />
            <FloatingSparkle delay={1.4} className="bottom-14 left-16 text-chart-4/30" />
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 bg-primary"
                      : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full glass h-9 w-9"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full glass h-9 w-9"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingSparkle({
  delay,
  className,
}: {
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      aria-hidden
      className={cn("absolute", className)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0.6],
        y: [0, -8, 4],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Sparkles className="h-3 w-3" />
    </motion.div>
  );
}

/**
 * Slowly rotating 3D wireframe "sphere" built with pure CSS — gives the
 * section a premium, immersive backdrop without the weight of a real
 * Three.js scene. Uses CSS preserve-3d + transforms for the orbit effect.
 */
function RotatingSphereBackdrop() {
  const dots = React.useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        angle: (i / 14) * 360,
        y: ((i % 7) - 3) * 22,
        size: 4 + (i % 3) * 2,
        opacity: 0.2 + (i % 4) * 0.12,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      aria-hidden
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {dots.map((d) => (
          <motion.span
            key={d.id}
            className="absolute rounded-full bg-primary"
            style={{
              width: d.size,
              height: d.size,
              opacity: d.opacity,
              transform: `rotateY(${d.angle}deg) translateZ(180px) translateY(${d.y}px)`,
            }}
          />
        ))}
        {/* Inner ring */}
        <motion.div
          className="absolute rounded-full border border-primary/15"
          style={{ width: 360, height: 360, transform: "rotateX(70deg)" }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute rounded-full border border-chart-4/15"
          style={{ width: 280, height: 280, transform: "rotateX(70deg) rotateY(60deg)" }}
          animate={{ rotateZ: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}
