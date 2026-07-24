"use client";

import * as React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ACHIEVEMENTS, CERTIFICATIONS, CERT_CATEGORIES } from "@/lib/portfolio-data";
import { Trophy, Award, CertificateIcon } from "@/components/section-icons";
import { cn } from "@/lib/utils";

function CountUp({
  end,
  suffix = "",
  duration = 1.8,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(end);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 39, suffix: "", label: "Open-source repositories on GitHub" },
  { value: 17, suffix: "", label: "PyPI releases shipped (qkdpy)" },
  { value: 40, suffix: "+", label: "Certificates & professional recognitions" },
  { value: 8, suffix: "", label: "Engineering domains covered" },
];

export function Stats() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const [activeCat, setActiveCat] = React.useState<string>(CERT_CATEGORIES[0]);
  const filteredCerts = CERTIFICATIONS.filter((c) => c.category === activeCat);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-grid opacity-40 mask-fade-edges"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <div className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gradient-primary tabular-nums">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground leading-snug max-w-[10rem] mx-auto">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl glass-strong p-7 sm:p-10 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="h-5 w-5 text-primary" />
            <h3 className="font-display font-semibold text-lg">
              Recognition & awards
            </h3>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-start gap-3 group"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-mono group-hover:bg-primary/20 transition-colors">
                  {a.year}
                </span>
                <div>
                  <div className="text-sm font-medium leading-tight">{a.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    {a.detail}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Certifications — rich, categorized */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl glass p-7 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <CertificateIcon className="h-5 w-5 text-primary" />
            <h3 className="font-display font-semibold text-lg">
              Certifications & learning
            </h3>
            <span className="ml-auto text-xs text-muted-foreground font-mono">
              {CERTIFICATIONS.length} total
            </span>
          </div>

          {/* Category filter chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CERT_CATEGORIES.map((cat) => {
              const isActive = activeCat === cat;
              const count = CERTIFICATIONS.filter((c) => c.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={cn(
                    "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background/40 border-border hover:border-primary/50 hover:bg-accent/30"
                  )}
                >
                  {cat}
                  <span
                    className={cn(
                      "text-[10px] font-mono opacity-70",
                      isActive ? "opacity-90" : ""
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cert grid for active category */}
          <motion.ul
            key={activeCat}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {filteredCerts.map((cert) => (
              <li
                key={cert.name}
                className="group rounded-xl bg-background/40 border border-border/50 p-3.5 hover:border-primary/40 hover:bg-accent/20 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-medium leading-snug group-hover:text-primary transition-colors">
                      {cert.name}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1 leading-snug">
                      {cert.org}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
