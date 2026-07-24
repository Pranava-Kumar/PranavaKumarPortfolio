"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PROFILE } from "@/lib/portfolio-data";
import { AuroraBackground } from "@/components/effects/ambient";

const BUDGET_RANGES = [
  "< $3k",
  "$3k – $7k",
  "$7k – $15k",
  "$15k+",
  "Not sure yet",
];

const SERVICE_OPTIONS = [
  "GenAI / LLM app",
  "Multi-agent system",
  "Backend / API",
  "Full-stack product",
  "AI safety / eval",
  "Consulting",
];

export function Contact() {
  const [submitting, setSubmitting] = React.useState(false);
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [budget, setBudget] = React.useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      services: selectedServices,
      budget,
      message: data.get("message"),
    };

    // Simulate async submission — replace with real endpoint when wired up
    await new Promise((r) => setTimeout(r, 900));

    toast.success("Message received", {
      description: `Thanks ${payload.name || "there"} — I'll reply within one business day.`,
    });

    form.reset();
    setSelectedServices([]);
    setBudget("");
    setSubmitting(false);
  }

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <AuroraBackground variant="warm" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          {/* Left: copy + contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-primary mb-3">
              <span className="h-px w-6 bg-primary/60" />
              Start here
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-gradient leading-[1.1]">
              Let's build something that ships.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Tell me about your project. I read every message personally and
              reply within one business day — with a honest read on whether I'm
              the right fit.
            </p>

            <div className="mt-8 space-y-3">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={PROFILE.email}
                href={`mailto:${PROFILE.email}`}
              />
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value={PROFILE.phone}
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value={`${PROFILE.location} · ${PROFILE.timezone}`}
              />
              <ContactRow
                icon={<Clock className="h-4 w-4" />}
                label="Response time"
                value="Within 1 business day"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Button asChild variant="outline" className="rounded-full glass border-transparent">
                <a href={PROFILE.socials.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full glass border-transparent">
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full glass border-transparent">
                <a href={PROFILE.socials.pypi} target="_blank" rel="noreferrer">
                  PyPI <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl glass-strong p-7 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Your name *</Label>
                  <Input id="name" name="name" required placeholder="Jane Founder" className="rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="jane@company.com" className="rounded-xl" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="company">Company / project</Label>
                <Input id="company" name="company" placeholder="Acme Inc. / side project" className="rounded-xl" />
              </div>

              {/* Service chips */}
              <div className="space-y-2">
                <Label>What do you need?</Label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((s) => {
                    const selected = selectedServices.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={
                          "text-xs px-3 py-1.5 rounded-full border transition-all " +
                          (selected
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background/50 border-border hover:border-primary/50 hover:bg-accent/30")
                        }
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget chips */}
              <div className="space-y-2">
                <Label>Budget range</Label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_RANGES.map((b) => {
                    const selected = budget === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={
                          "text-xs px-3 py-1.5 rounded-full border transition-all " +
                          (selected
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background/50 border-border hover:border-primary/50 hover:bg-accent/30")
                        }
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Project details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you building? What's the timeline? What does success look like?"
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl group"
                disabled={submitting}
              >
                {submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send project brief
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to a no-pressure discovery conversation.
                No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 group">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg glass">
        {icon}
      </span>
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium group-hover:text-primary transition-colors">
          {value}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
