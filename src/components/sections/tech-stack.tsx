"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Server,
  MonitorSmartphone,
  Database,
  CloudCog,
  Cpu,
  Atom,
  LineChart,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  SKILL_GROUPS,
  type SkillGroup,
  type SkillLevel,
} from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  BrainCircuit,
  Server,
  MonitorSmartphone,
  Database,
  CloudCog,
  Cpu,
  Atom,
  LineChart,
  Wrench,
};

const ACCENT_STYLES: Record<
  string,
  { ring: string; text: string; bg: string; glow: string; chipBg: string }
> = {
  fuchsia: {
    ring: "ring-fuchsia-500/30",
    text: "text-fuchsia-600 dark:text-fuchsia-300",
    bg: "bg-fuchsia-500/10",
    glow: "from-fuchsia-500/30 to-pink-500/10",
    chipBg: "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300",
  },
  emerald: {
    ring: "ring-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-300",
    bg: "bg-emerald-500/10",
    glow: "from-emerald-500/30 to-teal-500/10",
    chipBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  },
  cyan: {
    ring: "ring-cyan-500/30",
    text: "text-cyan-600 dark:text-cyan-300",
    bg: "bg-cyan-500/10",
    glow: "from-cyan-500/30 to-blue-500/10",
    chipBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300",
  },
  amber: {
    ring: "ring-amber-500/30",
    text: "text-amber-600 dark:text-amber-300",
    bg: "bg-amber-500/10",
    glow: "from-amber-500/30 to-orange-500/10",
    chipBg: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
  },
  indigo: {
    ring: "ring-indigo-500/30",
    text: "text-indigo-600 dark:text-indigo-300",
    bg: "bg-indigo-500/10",
    glow: "from-indigo-500/30 to-violet-500/10",
    chipBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300",
  },
  rose: {
    ring: "ring-rose-500/30",
    text: "text-rose-600 dark:text-rose-300",
    bg: "bg-rose-500/10",
    glow: "from-rose-500/30 to-pink-500/10",
    chipBg: "bg-rose-500/10 text-rose-600 dark:text-rose-300",
  },
  violet: {
    ring: "ring-violet-500/30",
    text: "text-violet-600 dark:text-violet-300",
    bg: "bg-violet-500/10",
    glow: "from-violet-500/30 to-purple-500/10",
    chipBg: "bg-violet-500/10 text-violet-600 dark:text-violet-300",
  },
  lime: {
    ring: "ring-lime-500/30",
    text: "text-lime-600 dark:text-lime-300",
    bg: "bg-lime-500/10",
    glow: "from-lime-500/30 to-green-500/10",
    chipBg: "bg-lime-500/10 text-lime-600 dark:text-lime-300",
  },
  teal: {
    ring: "ring-teal-500/30",
    text: "text-teal-600 dark:text-teal-300",
    bg: "bg-teal-500/10",
    glow: "from-teal-500/30 to-cyan-500/10",
    chipBg: "bg-teal-500/10 text-teal-600 dark:text-teal-300",
  },
};

const LEVEL_META: Record<
  SkillLevel,
  { label: string; dotClass: string; weight: string }
> = {
  daily: {
    label: "Daily",
    dotClass: "bg-primary",
    weight: "font-semibold",
  },
  solid: {
    label: "Solid",
    dotClass: "bg-primary/60",
    weight: "font-medium",
  },
  familiar: {
    label: "Familiar",
    dotClass: "bg-primary/30",
    weight: "font-normal",
  },
};

export function TechStack() {
  const [activeGroup, setActiveGroup] = React.useState<string>(SKILL_GROUPS[0].id);
  const current = SKILL_GROUPS.find((g) => g.id === activeGroup) ?? SKILL_GROUPS[0];

  return (
    <section id="stack" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle parallax background */}
      <div className="absolute inset-0 bg-grid opacity-30 mask-fade-edges pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Toolbox"
          title="The stack I work with"
          description="Nine domains, organized by what I actually use them for. No arbitrary percentages — just honest confidence tags so you know what you're getting."
        />

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground"
        >
          <span className="font-mono uppercase tracking-widest text-[10px]">Confidence:</span>
          {(["daily", "solid", "familiar"] as SkillLevel[]).map((lvl) => (
            <span key={lvl} className="inline-flex items-center gap-1.5">
              <span className={cn("h-2 w-2 rounded-full", LEVEL_META[lvl].dotClass)} />
              {LEVEL_META[lvl].label}
            </span>
          ))}
        </motion.div>

        {/* Category tabs — wrapped grid so ALL categories are visible at once */}
        <div className="mt-8 flex flex-wrap gap-2">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Server;
            const accent = ACCENT_STYLES[group.accent] ?? ACCENT_STYLES.violet;
            const isActive = activeGroup === group.id;
            return (
              <motion.button
                key={group.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setActiveGroup(group.id)}
                className={cn(
                  "group relative inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm transition-all",
                  isActive
                    ? "glass-strong ring-1 " + accent.ring
                    : "glass hover:bg-accent/30"
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-lg transition-transform group-hover:scale-110",
                    isActive ? accent.bg : "bg-muted/50"
                  )}
                >
                  <Icon className={cn("h-3.5 w-3.5", isActive ? accent.text : "text-muted-foreground")} />
                </span>
                <span className={isActive ? "font-semibold" : "font-medium text-muted-foreground"}>
                  {group.category}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Active group panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 grid lg:grid-cols-[0.9fr_1.4fr] gap-6"
          >
            <SkillGroupCard group={current} />
            <SkillGrid group={current} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  const Icon = ICONS[group.icon] ?? Server;
  const accent = ACCENT_STYLES[group.accent] ?? ACCENT_STYLES.violet;

  const counts = {
    daily: group.skills.filter((s) => s.level === "daily").length,
    solid: group.skills.filter((s) => s.level === "solid").length,
    familiar: group.skills.filter((s) => s.level === "familiar").length,
  };

  return (
    <motion.div
      layout
      className={cn(
        "relative rounded-3xl glass-strong p-7 sm:p-8 overflow-hidden ring-1",
        accent.ring
      )}
    >
      {/* Top accent bar */}
      <div className={cn("absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r", accent.glow)} />

      {/* Background glow */}
      <div
        className={cn(
          "absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br blur-3xl opacity-40 -z-10",
          accent.glow
        )}
      />

      <div className={cn("inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-5", accent.bg)}>
        <Icon className={cn("h-7 w-7", accent.text)} />
      </div>

      <h3 className="font-display font-bold text-2xl tracking-tight mb-2">
        {group.category}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {group.blurb}
      </p>

      <div className="grid grid-cols-3 gap-3">
        <CountTile label="Daily" value={counts.daily} accentClass={accent.text} />
        <CountTile label="Solid" value={counts.solid} accentClass={accent.text} />
        <CountTile label="Familiar" value={counts.familiar} accentClass={accent.text} />
      </div>

      <div className="mt-6 pt-5 border-t border-border/40 text-xs text-muted-foreground">
        <span className="font-mono uppercase tracking-widest text-[10px]">Total</span>
        <span className={cn("ml-2 font-display font-bold text-base", accent.text)}>
          {group.skills.length}
        </span>
        <span className="ml-1">technologies</span>
      </div>
    </motion.div>
  );
}

function CountTile({
  label,
  value,
  accentClass,
}: {
  label: string;
  value: number;
  accentClass: string;
}) {
  return (
    <div className="rounded-xl bg-background/40 border border-border/40 p-3 text-center">
      <div className={cn("font-display font-bold text-2xl", accentClass)}>{value}</div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function SkillGrid({ group }: { group: SkillGroup }) {
  const accent = ACCENT_STYLES[group.accent] ?? ACCENT_STYLES.violet;

  return (
    <motion.div
      layout
      className="rounded-3xl glass p-6 sm:p-7"
    >
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground">
          Technologies
        </h4>
        <span className="text-[10px] font-mono text-muted-foreground">
          {group.skills.length} items
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => {
          const meta = LEVEL_META[skill.level];
          return (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.025,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={cn(
                "group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs cursor-default transition-colors",
                "border-border/60 hover:border-primary/40",
                skill.level === "daily"
                  ? "bg-background/60 " + meta.weight
                  : skill.level === "solid"
                  ? "bg-background/40 " + meta.weight
                  : "bg-background/20 " + meta.weight + " text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-150",
                  meta.dotClass
                )}
              />
              {skill.name}
              <span className={cn("ml-0.5 text-[9px] font-mono uppercase tracking-wider opacity-60", accent.text)}>
                {meta.label}
              </span>
            </motion.span>
          );
        })}
      </div>

      {/* Footer hint */}
      <div className="mt-6 pt-4 border-t border-border/40 text-xs text-muted-foreground italic">
        <span className={accent.text}>Pro tip:</span> hover any tag to see it pop. Categories are clickable above.
      </div>
    </motion.div>
  );
}
