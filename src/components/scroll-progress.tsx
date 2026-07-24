"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    mass: 0.6,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[90] origin-left bg-gradient-to-r from-primary via-chart-4 to-chart-2"
      style={{ scaleX }}
    />
  );
}
