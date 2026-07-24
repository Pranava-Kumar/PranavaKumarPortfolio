"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={
        align === "center"
          ? "text-center max-w-2xl mx-auto"
          : "max-w-2xl"
      }
    >
      <div
        className={
          "inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-primary mb-3 " +
          (align === "center" ? "justify-center" : "")
        }
      >
        <span className="h-px w-6 bg-primary/60" />
        {eyebrow}
      </div>
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-gradient leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
