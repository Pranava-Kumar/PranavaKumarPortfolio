"use client";

import * as React from "react";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { NoiseOverlay } from "@/components/effects/ambient";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { CTABand } from "@/components/sections/cta-band";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />

      <div className="relative min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <Marquee />
          <Services />
          <CaseStudies />
          <Process />
          <TechStack />
          <Stats />
          <Testimonials />
          <CTABand />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
