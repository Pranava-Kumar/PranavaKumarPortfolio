"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

const FOOTER_LINKS = [
  {
    title: "Navigate",
    links: [
      { href: "#services", label: "Services" },
      { href: "#work", label: "Work" },
      { href: "#process", label: "Process" },
      { href: "#stack", label: "Stack" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "#services", label: "GenAI & LLM Apps" },
      { href: "#services", label: "Multi-Agent Systems" },
      { href: "#services", label: "Backend & APIs" },
      { href: "#services", label: "Full-Stack Builds" },
      { href: "#services", label: "AI Safety & Eval" },
      { href: "#services", label: "Consulting" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { href: PROFILE.socials.github, label: "GitHub", external: true },
      { href: PROFILE.socials.linkedin, label: "LinkedIn", external: true },
      { href: PROFILE.socials.pypi, label: "PyPI (QKDpy)", external: true },
      { href: `mailto:${PROFILE.email}`, label: "Email", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border/40 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="#top" className="inline-flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm">
                P
              </span>
              <span className="font-display font-semibold tracking-tight">
                {PROFILE.firstName}
                <span className="text-primary">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {PROFILE.role}. Available for select freelance engagements where
              quality, reliability, and shipping matter more than the lowest
              hourly rate.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {PROFILE.availability}
            </div>
          </motion.div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <ArrowUpRight className="h-3 w-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Big wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <div className="font-display font-bold text-[18vw] md:text-[14vw] lg:text-[12rem] leading-none tracking-tighter text-gradient opacity-[0.08] select-none">
            {PROFILE.firstName.toUpperCase()}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border/40">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
            Built with
            <Heart className="h-3 w-3 fill-primary text-primary" />
            using Next.js, GSAP, Three.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
