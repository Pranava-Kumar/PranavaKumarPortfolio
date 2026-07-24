"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProjectVisual } from "@/components/3d/project-visual";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ACCENT_STYLES: Record<string, { ring: string; glow: string; text: string; bg: string }> = {
  violet: {
    ring: "ring-violet-500/30",
    glow: "from-violet-500/30 to-fuchsia-500/10",
    text: "text-violet-600 dark:text-violet-300",
    bg: "bg-violet-500/10",
  },
  rose: {
    ring: "ring-rose-500/30",
    glow: "from-rose-500/30 to-pink-500/10",
    text: "text-rose-600 dark:text-rose-300",
    bg: "bg-rose-500/10",
  },
  amber: {
    ring: "ring-amber-500/30",
    glow: "from-amber-500/30 to-orange-500/10",
    text: "text-amber-600 dark:text-amber-300",
    bg: "bg-amber-500/10",
  },
  cyan: {
    ring: "ring-cyan-500/30",
    glow: "from-cyan-500/30 to-blue-500/10",
    text: "text-cyan-600 dark:text-cyan-300",
    bg: "bg-cyan-500/10",
  },
  emerald: {
    ring: "ring-emerald-500/30",
    glow: "from-emerald-500/30 to-teal-500/10",
    text: "text-emerald-600 dark:text-emerald-300",
    bg: "bg-emerald-500/10",
  },
  indigo: {
    ring: "ring-indigo-500/30",
    glow: "from-indigo-500/30 to-violet-500/10",
    text: "text-indigo-600 dark:text-indigo-300",
    bg: "bg-indigo-500/10",
  },
  lime: {
    ring: "ring-lime-500/30",
    glow: "from-lime-500/30 to-green-500/10",
    text: "text-lime-600 dark:text-lime-300",
    bg: "bg-lime-500/10",
  },
};

export function CaseStudies() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const progressRef = React.useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    function update() {
      setIsDesktop(mql.matches);
    }
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Refs: pinWrapRef wraps ONLY the card track (not the heading). When we
  // pin this wrapper, the heading above it has already scrolled away.
  const pinWrapRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!isDesktop || !pinWrapRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const pinWrap = pinWrapRef.current;
      const cards = track.querySelectorAll("[data-case-card]");
      const totalCards = cards.length;

      // Total horizontal distance to scroll: from first card flush-left
      // to last card flush-right with the viewport.
      const computeTotal = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      let totalScroll = computeTotal();

      const tween = gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          // Pin only the track wrapper — the heading above scrolls away
          // naturally so it doesn't occupy the viewport during the carousel.
          trigger: pinWrap,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          // Snap to each card boundary so the user never sees an awkward
          // half-and-half state. Each card = 1/(N-1) of the total progress.
          snap: {
            snapTo: 1 / Math.max(1, totalCards - 1),
            duration: { min: 0.3, max: 0.6 },
            ease: "power2.out",
            inertia: false,
          },
          onRefresh: () => {
            totalScroll = computeTotal();
          },
          onUpdate: (self) => {
            // Update progress bar
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
            // Update active card index based on scroll position
            const progress = self.progress;
            const idx = Math.min(
              totalCards - 1,
              Math.round(progress * (totalCards - 1))
            );
            setActiveIndex(idx);
          },
        },
      });

      return () => {
        tween.kill();
      };
    },
    { dependencies: [isDesktop], scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Heading block — scrolls away naturally. Only the pinWrap below
          gets pinned, so once the title scrolls off, the navbar + card
          occupy the full viewport. */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-8 lg:pb-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Selected work"
            title="Case studies from the field"
            description="A sampling of production systems I've shipped — across AI, multi-agent automation, mission-critical embedded, and open source. Each one solved a real problem for a real stakeholder."
          />
          {/* Desktop progress indicator */}
          {isDesktop && (
            <div className="hidden md:flex items-center gap-4 pb-2">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="text-foreground font-semibold tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>{String(CASE_STUDIES.length).padStart(2, "0")}</span>
              </div>
              <div className="h-px w-32 bg-muted-foreground/20 overflow-hidden rounded-full">
                <div
                  ref={progressRef}
                  className="h-full bg-primary origin-left"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: vertical scroll / Desktop: horizontal pin scroll */}
      {isDesktop ? (
        // pinWrap is the element that gets pinned. It's 100vh tall so the
        // card (68vh) is vertically centered with breathing room above and
        // below. The heading above has already scrolled away by the time
        // this pins.
        <div ref={pinWrapRef} className="h-screen flex items-center">
          <div
            ref={trackRef}
            className="flex gap-6 pl-4 sm:pl-6 lg:pl-8 pr-8 will-change-transform"
          >
            {CASE_STUDIES.map((cs, i) => (
              <CaseCard key={cs.id} cs={cs} index={i} />
            ))}
            <EndCard />
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 flex flex-col gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} index={i} mobile />
          ))}
          <EndCard mobile />
        </div>
      )}
    </section>
  );
}

function CaseCard({
  cs,
  index,
  mobile = false,
}: {
  cs: (typeof CASE_STUDIES)[number];
  index: number;
  mobile?: boolean;
}) {
  const accent = ACCENT_STYLES[cs.accent] ?? ACCENT_STYLES.violet;
  // Desktop: each card fills almost the entire viewport so ONE card is the
  // hero at any scroll position. A thin sliver of the next card peeks in
  // to signal scrollability.
  const width = mobile
    ? "w-full"
    : "w-[95vw] lg:w-[92vw] xl:w-[88vw] 2xl:w-[84vw] shrink-0";
  // Pinned section height = viewport. Reserve room for the heading block
  // above the track so the card never gets clipped vertically.
  const height = mobile ? "" : "h-[78vh] min-h-[520px] max-h-[720px]";

  return (
    <article
      data-case-card
      className={cn(
        "relative rounded-3xl glass-strong overflow-hidden",
        "ring-1",
        accent.ring,
        width,
        height
      )}
    >
      {/* Top accent bar */}
      <div className={cn("h-1.5 w-full bg-gradient-to-r", accent.glow)} />

      <div className={cn("flex", mobile ? "flex-col" : "flex-row", "h-[calc(100%-1.5rem)]")}>
        {/* Desktop: Project visual — flush left, full height */}
        {!mobile && (
          <div className="hidden md:block w-[34%] min-w-[200px] relative overflow-hidden">
            <div className="absolute inset-0">
              <ProjectVisual
                projectId={cs.id}
                accent={cs.accent}
                className="w-full h-full"
              />
            </div>
            {/* Gradient fade to the right so the visual blends into content */}
            <div
              className={cn(
                "absolute inset-y-0 right-0 w-12 bg-gradient-to-l",
                "from-background/0 to-background/0",
                "via-background/30"
              )}
            />
          </div>
        )}

        {/* Mobile: visual banner */}
        {mobile && (
          <div className="md:hidden w-full h-36 relative overflow-hidden">
            <ProjectVisual
              projectId={cs.id}
              accent={cs.accent}
              className="w-full h-full"
            />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />
          </div>
        )}

        {/* Content area */}
        <div className="flex-1 p-5 sm:p-7 lg:p-8 flex flex-col min-w-0 overflow-y-auto">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4 shrink-0">
            <div>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 text-[10px] lg:text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-full mb-2",
                  accent.bg,
                  accent.text
                )}
              >
                {cs.category}
              </span>
              <h3 className="font-display font-bold text-2xl lg:text-3xl xl:text-4xl tracking-tight">
                {cs.name}
              </h3>
              <p className="mt-1 text-sm lg:text-base text-muted-foreground">{cs.headline}</p>
            </div>
            <span className="font-mono text-xs text-muted-foreground/60 tabular-nums shrink-0 ml-4">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Description — clamped to 4 lines so card stays balanced */}
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 line-clamp-4">
            {cs.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 shrink-0">
            {cs.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl bg-background/40 border border-border/40 p-4 text-center"
              >
                <div className={cn("font-display font-bold text-base lg:text-lg xl:text-xl", accent.text)}>
                  {m.value}
                </div>
                <div className="text-[10px] lg:text-xs text-muted-foreground leading-tight mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4 shrink-0">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] lg:text-xs font-mono px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/40"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Deliverable note + GitHub link — pinned to bottom */}
          <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between gap-3 shrink-0">
            <span className="text-xs lg:text-sm text-muted-foreground truncate">
              <span className="font-semibold text-foreground">Deliverable:</span>{" "}
              {cs.deliverable}
            </span>
            {cs.repoUrl && (
              <a
                href={cs.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs lg:text-sm font-medium text-primary hover:underline shrink-0"
              >
                View repo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Decorative background glow */}
      <div
        className={cn(
          "absolute -top-12 -right-12 h-48 w-48 rounded-full bg-gradient-to-br blur-3xl opacity-50 -z-10",
          accent.glow
        )}
      />
    </article>
  );
}

function EndCard({ mobile = false }: { mobile?: boolean }) {
  const width = mobile
    ? "w-full"
    : "w-[95vw] lg:w-[92vw] xl:w-[88vw] 2xl:w-[84vw] shrink-0";
  const height = mobile ? "" : "h-[78vh] min-h-[520px] max-h-[720px]";
  return (
    <article
      data-case-card
      className={cn(
        "relative rounded-3xl glass overflow-hidden flex items-center justify-center p-10 text-center",
        width,
        height
      )}
    >
      <div>
        <h3 className="font-display font-bold text-2xl mb-2">Your project next?</h3>
        <p className="text-sm text-muted-foreground mb-5">
          Let's add your case study to the list.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm lg:text-base font-medium text-primary hover:underline"
        >
          Start a conversation
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
