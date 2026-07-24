"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ProjectId = "qkdpy" | "rox" | "pantheon" | "pinn" | "sentinel" | "research-agent" | "krishidrishti";

const ACCENT_TO_HEX: Record<string, { light: string; medium: string; dark: string }> = {
  emerald: { light: "#6ee7b7", medium: "#34d399", dark: "#065f46" },
  cyan: { light: "#67e8f9", medium: "#22d3ee", dark: "#155e75" },
  violet: { light: "#a78bfa", medium: "#7c5cff", dark: "#4c1d95" },
  amber: { light: "#fbbf24", medium: "#f59e0b", dark: "#92400e" },
  rose: { light: "#fda4af", medium: "#fb7185", dark: "#9f1239" },
  indigo: { light: "#818cf8", medium: "#6366f1", dark: "#3730a3" },
  lime: { light: "#a3e635", medium: "#84cc16", dark: "#4d7c0f" },
};

/* ───────── 1. QKDpy — Quantum network ───────── */
function QkdVisual({ accent }: { accent: string }) {
  const c = ACCENT_TO_HEX[accent] ?? ACCENT_TO_HEX.emerald;
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="qkd-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={c.dark} stopOpacity="0.4" />
          <stop offset="100%" stopColor={c.dark} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#qkd-bg)" rx="24" />
      {/* Glowing nodes */}
      {[[100,100],[200,200],[300,120],[160,300],[280,280]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r={5} fill={c.light} opacity="0.9">
          <animate attributeName="r" values="3;7;3" dur={`${2+i*0.3}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2+i*0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* Connection lines */}
      <line x1="100" y1="100" x2="200" y2="200" stroke={c.medium} strokeWidth="1.2" opacity="0.4" strokeDasharray="4 3"/>
      <line x1="200" y1="200" x2="300" y2="120" stroke={c.medium} strokeWidth="1.2" opacity="0.4" strokeDasharray="4 3"/>
      <line x1="200" y1="200" x2="160" y2="300" stroke={c.medium} strokeWidth="1.2" opacity="0.4" strokeDasharray="4 3"/>
      <line x1="300" y1="120" x2="280" y2="280" stroke={c.medium} strokeWidth="1.2" opacity="0.4" strokeDasharray="4 3"/>
      <line x1="160" y1="300" x2="100" y2="100" stroke={c.medium} strokeWidth="1.2" opacity="0.3" strokeDasharray="4 3"/>
      <line x1="280" y1="280" x2="200" y2="200" stroke={c.medium} strokeWidth="1.2" opacity="0.4" strokeDasharray="4 3"/>
      {/* Center quantum symbol */}
      <text x="200" y="215" textAnchor="middle" fill={c.light} fontSize="48" fontFamily="monospace" opacity="0.3">Ψ</text>
      {/* Particles - deterministic positions */}
      {[[80,80],[140,50],[230,70],[310,100],[60,220],[180,250],[270,230],[340,280]].map(([cx,cy],i)=>(
        <circle key={`p${i}`} cx={cx} cy={cy} r="1.5" fill={c.light} opacity="0.3">
          <animate attributeName="opacity" values="0;0.6;0" dur={`${1.5+i*0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* Label */}
      <text x="200" y="370" textAnchor="middle" fill={c.light} fontSize="14" fontFamily="monospace" opacity="0.6" letterSpacing="4">QKD</text>
    </svg>
  );
}

/* ───────── 2. ROXα — Rocket / Flight Computer ───────── */
function RoxVisual({ accent }: { accent: string }) {
  const c = ACCENT_TO_HEX[accent] ?? ACCENT_TO_HEX.cyan;
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="rox-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={c.dark} stopOpacity="0.4" />
          <stop offset="100%" stopColor={c.dark} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#rox-bg)" rx="24" />
      {/* Stylized rocket */}
      <g transform="translate(200,180)">
        {/* Body */}
        <path d="M0,-80 Q30,-60 20,40 L-20,40 Q-30,-60 0,-80Z" fill={c.medium} opacity="0.3" stroke={c.light} strokeWidth="1.5"/>
        {/* Nose cone */}
        <path d="M0,-80 Q-15,-60 -20,-40 L20,-40 Q15,-60 0,-80Z" fill={c.light} opacity="0.5"/>
        {/* Fins */}
        <path d="M20,20 L45,55 L20,45Z" fill={c.medium} opacity="0.5"/>
        <path d="M-20,20 L-45,55 L-20,45Z" fill={c.medium} opacity="0.5"/>
        {/* Exhaust */}
        <ellipse cx="0" cy="55" rx="12" ry="4" fill={c.light} opacity="0.4">
          <animate attributeName="ry" values="4;8;4" dur="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.2;0.4" dur="0.8s" repeatCount="indefinite" />
        </ellipse>
      </g>
      {/* Telemetry rings */}
      <circle cx="200" cy="180" r="100" stroke={c.medium} strokeWidth="0.5" opacity="0.15" fill="none">
        <animateTransform attributeName="transform" type="rotate" from="0 200 180" to="360 200 180" dur="20s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="180" r="120" stroke={c.light} strokeWidth="0.3" opacity="0.1" fill="none" strokeDasharray="4 6">
        <animateTransform attributeName="transform" type="rotate" from="360 200 180" to="0 200 180" dur="30s" repeatCount="indefinite" />
      </circle>
      {/* Telemetry dots */}
      {[[80,100],[310,80],[70,260],[320,290]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2" fill={c.light} opacity="0.5">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${1.5+i*0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <text x="200" y="370" textAnchor="middle" fill={c.light} fontSize="13" fontFamily="monospace" opacity="0.6" letterSpacing="3">ROXα</text>
    </svg>
  );
}

/* ───────── 3. Pantheon — Trading / Market ───────── */
function PantheonVisual({ accent }: { accent: string }) {
  const c = ACCENT_TO_HEX[accent] ?? ACCENT_TO_HEX.violet;
  // Candlestick data
  const candles = [
    { x: 40, o: 180, h: 160, l: 200, c: 170 },
    { x: 80, o: 170, h: 155, l: 195, c: 185 },
    { x: 120, o: 185, h: 165, l: 210, c: 175 },
    { x: 160, o: 175, h: 150, l: 190, c: 160 },
    { x: 200, o: 160, h: 140, l: 180, c: 150 },
    { x: 240, o: 150, h: 135, l: 170, c: 155 },
    { x: 280, o: 155, h: 140, l: 165, c: 145 },
    { x: 320, o: 145, h: 125, l: 160, c: 130 },
    { x: 360, o: 130, h: 115, l: 150, c: 135 },
  ];
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="pan-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={c.dark} stopOpacity="0.4" />
          <stop offset="100%" stopColor={c.dark} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pan-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={c.light} stopOpacity="0" />
          <stop offset="50%" stopColor={c.light} stopOpacity="1" />
          <stop offset="100%" stopColor={c.light} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#pan-bg)" rx="24" />
      {/* Trend line */}
      <polyline points="40,270 120,260 200,240 280,230 360,220" stroke="url(#pan-line)" strokeWidth="2" opacity="0.6" fill="none" />
      {/* Candles */}
      {candles.map((cndl, i) => (
        <g key={i}>
          <line x1={cndl.x} y1={cndl.h} x2={cndl.x} y2={cndl.l} stroke={c.medium} strokeWidth="1" opacity="0.6" />
          <rect
            x={cndl.x - 6} y={Math.min(cndl.o, cndl.c)}
            width="12" height={Math.abs(cndl.c - cndl.o)}
            fill={cndl.c < cndl.o ? c.medium : c.light} opacity="0.7" rx="1"
          />
        </g>
      ))}
      {/* Grid lines */}
      {[100, 160, 220, 280, 340].map(y=>(
        <line key={y} x1="20" y1={y} x2="380" y2={y} stroke={c.medium} strokeWidth="0.3" opacity="0.1" strokeDasharray="3 3" />
      ))}
      {/* Confidence meter */}
      <g transform="translate(50, 340)">
        <rect x="0" y="0" width="300" height="4" rx="2" fill={c.dark} opacity="0.4" />
        <rect x="0" y="0" width="180" height="4" rx="2" fill={c.medium} opacity="0.6">
          <animate attributeName="width" values="120;200;120" dur="4s" repeatCount="indefinite" />
        </rect>
      </g>
      <text x="200" y="370" textAnchor="middle" fill={c.light} fontSize="12" fontFamily="monospace" opacity="0.6" letterSpacing="4">PANTHEON</text>
    </svg>
  );
}

/* ───────── 4. SMART-DEORBIT — Satellite / Orbit ───────── */
function PinnVisual({ accent }: { accent: string }) {
  const c = ACCENT_TO_HEX[accent] ?? ACCENT_TO_HEX.amber;
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="pinn-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={c.dark} stopOpacity="0.4" />
          <stop offset="100%" stopColor={c.dark} stopOpacity="0" />
        </radialGradient>
        <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={c.light} opacity="0.6" />
        </marker>
      </defs>
      <rect width="400" height="400" fill="url(#pinn-bg)" rx="24" />
      {/* Earth */}
      <circle cx="150" cy="280" r="60" fill={c.medium} opacity="0.15" />
      <circle cx="150" cy="280" r="50" fill={c.medium} opacity="0.2" />
      <ellipse cx="150" cy="280" rx="35" ry="8" fill={c.light} opacity="0.08" />
      {/* Orbit ellipse */}
      <ellipse cx="150" cy="280" rx="170" ry="70" stroke={c.medium} strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="6 4"
        transform="rotate(-15,150,280)"
      />
      {/* Satellite */}
      <g transform="translate(240,165)">
        <rect x="-8" y="-4" width="16" height="8" rx="2" fill={c.light} opacity="0.7" />
        <rect x="-12" y="4" width="24" height="3" rx="1" fill={c.medium} opacity="0.5" />
        <line x1="-16" y1="-8" x2="-24" y2="-14" stroke={c.light} strokeWidth="1" opacity="0.6" />
        <line x1="16" y1="-8" x2="24" y2="-14" stroke={c.light} strokeWidth="1" opacity="0.6" />
        <circle cx="-24" cy="-14" r="3" fill={c.light} opacity="0.8" />
        <circle cx="24" cy="-14" r="3" fill={c.light} opacity="0.8" />
      </g>
      {/* Trajectory arrow */}
      <path d="M 230,190 Q 280,220 250,280" stroke={c.light} strokeWidth="1.5" opacity="0.4" fill="none" markerEnd="url(#arrow)" strokeDasharray="5 3"/>
      {/* De-orbit trail */}
      <circle cx="260" cy="235" r="2" fill={c.medium} opacity="0.3">
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="245" cy="245" r="1.5" fill={c.light} opacity="0.3">
        <animate attributeName="opacity" values="0;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <text x="200" y="370" textAnchor="middle" fill={c.light} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">DEORBIT</text>
    </svg>
  );
}

/* ───────── 5. Sentinel Env — Shield / Security ───────── */
function SentinelVisual({ accent }: { accent: string }) {
  const c = ACCENT_TO_HEX[accent] ?? ACCENT_TO_HEX.rose;
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="sen-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={c.dark} stopOpacity="0.4" />
          <stop offset="100%" stopColor={c.dark} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#sen-bg)" rx="24" />
      {/* Shield */}
      <g transform="translate(200,160)">
        <path d="M0,-80 L60,-60 L60,20 Q60,70 0,100 Q-60,70 -60,20 L-60,-60Z"
          fill={c.dark} opacity="0.3" stroke={c.medium} strokeWidth="1.5" />
        <path d="M0,-80 L60,-60 L60,20 Q60,70 0,100 Q-60,70 -60,20 L-60,-60Z"
          fill={c.dark} opacity="0.3" stroke={c.medium} strokeWidth="1.5" />
        {/* Lock icon */}
        <rect x="-12" y="-18" width="24" height="18" rx="4" fill="none" stroke={c.light} strokeWidth="1.8" />
        <path d="M-12,-18 Q-12,-36 0,-36 Q12,-36 12,-18" fill="none" stroke={c.light} strokeWidth="1.8" />
        <circle cx="0" cy="-8" r="3" fill={c.light} opacity="0.5" />
        {/* Inner glow */}
        <circle cx="0" cy="-25" r="15" fill={c.light} opacity="0.06" />
      </g>
      {/* Attack tiers */}
      {[{x:70,y:90,t:"EASY"},{x:330,y:90,t:"MED"},{x:200,y:340,t:"HARD"}].map((p,i)=>(
        <g key={i}>
          <rect x={p.x-24} y={p.y-10} width="48" height="20" rx="10" fill={c.dark} opacity="0.4" stroke={c.medium} strokeWidth="0.5" />
          <text x={p.x} y={p.y+4} textAnchor="middle" fill={c.light} fontSize="9" fontFamily="monospace" opacity="0.7">{p.t}</text>
        </g>
      ))}
      {/* Connection lines to shield */}
      {[{x:70,y:90},{x:330,y:90},{x:200,y:340}].map((p,i)=>(
        <line key={i} x1={p.x} y1={p.y+(p.y<200?-10:10)} x2={200} y2={160+50*(p.y<200?-1:1)} stroke={c.medium} strokeWidth="0.5" opacity="0.2" strokeDasharray="3 3" />
      ))}
      <text x="200" y="370" textAnchor="middle" fill={c.light} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">SENTINEL</text>
    </svg>
  );
}

/* ───────── 6. AI Researcher — Document / Network ───────── */
function ResearchVisual({ accent }: { accent: string }) {
  const c = ACCENT_TO_HEX[accent] ?? ACCENT_TO_HEX.indigo;
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="res-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={c.dark} stopOpacity="0.4" />
          <stop offset="100%" stopColor={c.dark} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#res-bg)" rx="24" />
      {/* Document */}
      <g transform="translate(200,150)">
        <rect x="-55" y="-70" width="110" height="140" rx="6" fill={c.dark} opacity="0.3" stroke={c.medium} strokeWidth="1" />
        {/* Text lines */}
        {[-40,-20,0,20,40].map((y,i)=>(
          <rect key={i} x="-35" y={y} width={70-(i*7)} height="4" rx="2" fill={c.light} opacity={0.4-i*0.05} />
        ))}
        <rect x="-35" y="55" width="40" height="3" rx="1.5" fill={c.light} opacity="0.25" />
      </g>
      {/* AI brain nodes around document */}
      {[[70,80],[330,80],[330,280],[70,280],[200,40]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4" fill={c.light} opacity="0.5">
          <animate attributeName="r" values="3;6;3" dur={`${2+i*0.4}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2+i*0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* Connections */}
      {[[70,80,200,100],[330,80,200,100],[70,80,200,200],[330,80,200,200],[330,280,200,200],[70,280,200,200],[200,40,200,100]].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.medium} strokeWidth="0.6" opacity="0.15" strokeDasharray="3 4" />
      ))}
      <text x="200" y="370" textAnchor="middle" fill={c.light} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">RESEARCH</text>
    </svg>
  );
}

/* ───────── 7. KrishiDrishti — Agriculture / Field ───────── */
function KrishiVisual({ accent }: { accent: string }) {
  const c = ACCENT_TO_HEX[accent] ?? ACCENT_TO_HEX.lime;
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="kri-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={c.dark} stopOpacity="0.4" />
          <stop offset="100%" stopColor={c.dark} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#kri-bg)" rx="24" />
      {/* Field grid / spectral overlay */}
      {[[60,200],[140,160],[220,200],[300,160],[100,280],[180,240],[260,280],[340,240]].map(([x,y],i)=>{
        const hue = i % 2 === 0 ? c.medium : c.light;
        return (
          <rect key={i} x={x-12} y={y-12} width="24" height="24" rx="3" fill={hue} opacity="0.2"
            stroke={c.medium} strokeWidth="0.5"
          />
        );
      })}
      {/* NDVI heatmap overlay */}
      <circle cx="120" cy="180" r="30" fill={c.light} opacity="0.08" />
      <circle cx="200" cy="250" r="35" fill={c.medium} opacity="0.06" />
      <circle cx="280" cy="180" r="25" fill={c.light} opacity="0.1" />
      {/* Plant icon */}
      <g transform="translate(200,120)">
        <line x1="0" y1="0" x2="0" y2="30" stroke={c.light} strokeWidth="2" opacity="0.5" />
        <path d="M0,0 Q-15,-10 -10,-25" stroke={c.light} strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M0,0 Q15,-10 10,-25" stroke={c.light} strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M0,10 Q-12,0 -8,-15" stroke={c.medium} strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M0,10 Q12,0 8,-15" stroke={c.medium} strokeWidth="1.5" fill="none" opacity="0.5" />
      </g>
      {/* Spectral lines */}
      <line x1="40" y1="340" x2="360" y2="340" stroke={c.medium} strokeWidth="0.5" opacity="0.15" />
      {[80,140,200,260,320].map(x=>(
        <line key={x} x1={x} y1="335" x2={x} y2="345" stroke={c.light} strokeWidth="0.5" opacity="0.2" />
      ))}
      {/* Scanning effect */}
      <line x1="40" y1="150" x2="40" y2="310" stroke={c.medium} strokeWidth="0.5" opacity="0.3">
        <animate attributeName="x1" values="40;360;40" dur="6s" repeatCount="indefinite" />
        <animate attributeName="x2" values="40;360;40" dur="6s" repeatCount="indefinite" />
      </line>
      <text x="200" y="375" textAnchor="middle" fill={c.light} fontSize="10" fontFamily="monospace" opacity="0.6" letterSpacing="3">KRISHI</text>
    </svg>
  );
}

/* ───────── Map of visuals ───────── */
const VISUAL_MAP: Record<ProjectId, React.ComponentType<{ accent: string }>> = {
  qkdpy: QkdVisual,
  rox: RoxVisual,
  pantheon: PantheonVisual,
  pinn: PinnVisual,
  sentinel: SentinelVisual,
  "research-agent": ResearchVisual,
  krishidrishti: KrishiVisual,
};

export function ProjectVisual({
  projectId,
  accent = "violet",
  className,
}: {
  projectId: string;
  accent?: string;
  className?: string;
}) {
  const Visual = VISUAL_MAP[projectId as ProjectId];
  if (!Visual) return null;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Visual accent={accent} />
    </div>
  );
}
