"use client";

import * as React from "react";
import { motion } from "framer-motion";

const ITEMS = [
  "LangChain",
  "LangGraph",
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "Gemini",
  "Groq",
  "Pydantic",
  "GitHub Actions",
  "GCP",
  "AWS",
  "Supabase",
  "Redis",
  "OpenAI",
  "PyTorch",
];

export function Marquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative py-10 border-y border-border/40 overflow-hidden"
    >
      <div className="mask-fade-edges flex overflow-hidden">
        <motion.div
          className="flex shrink-0 gap-12 pr-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display font-semibold text-xl sm:text-2xl text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
