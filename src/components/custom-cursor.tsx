"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovering, setHovering] = React.useState(false);
  const [hidden, setHidden] = React.useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);

  const ringX = useSpring(cursorX, { damping: 22, stiffness: 140, mass: 0.6 });
  const ringY = useSpring(cursorY, { damping: 22, stiffness: 140, mass: 0.6 });

  React.useEffect(() => {
    // Skip on touch / small screens
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function move(e: MouseEvent) {
      setHidden(false);
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
      );
      setHovering(Boolean(interactive));
    }

    function leave() {
      setHidden(true);
    }

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-primary mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="absolute h-9 w-9 rounded-full border border-primary/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: hovering ? 1.7 : 1,
          backgroundColor: hovering
            ? "color-mix(in oklch, var(--primary) 12%, transparent)"
            : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </div>
  );
}
