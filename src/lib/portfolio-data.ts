/**
 * Portfolio content for Pranava Kumar — Freelance AI & Backend Engineer.
 * Curated for a freelance-client audience (not the general dev portfolio).
 * Source: Pranava's two resumes + GitHub profile (Pranava-Kumar) + PyPI +
 * certificate list (1. List of Certificates.xlsx). Used as reference only;
 * content reframed as freelance services & case studies.
 */

export const PROFILE = {
  name: "Pranava Kumar",
  shortName: "Pranava",
  firstName: "Pranava",
  role: "Freelance AI & Backend Engineer",
  tagline:
    "I build production GenAI systems, multi-agent backends, and scalable full-stack products — for clients who need reliable engineering at honest, beginner-friendly rates.",
  location: "Chennai, India",
  timezone: "UTC+5:30",
  availability: "Open for new freelance projects",
  email: "pranavakumar.it@gmail.com",
  phone: "+91 73586 74753",
  socials: {
    github: "https://github.com/Pranava-Kumar",
    linkedin: "https://linkedin.com/in/pranava-kumar",
    pypi: "https://pypi.org/project/qkdpy",
  },
  resumeNote:
    "GenAI, LLM orchestration, multi-agent systems, and backend engineering across fintech, aerospace, and research.",
};

export const HERO_STATS = [
  { value: "17", label: "Open-source releases on PyPI", suffix: "" },
  { value: "155", label: "Commits to qkdpy library", suffix: "+" },
  { value: "Top 10", label: "National rocketry finals (ISRO)", suffix: "" },
  { value: "40+", label: "Certificates & recognitions", suffix: "" },
];

export const SERVICES = [
  {
    id: "genai",
    title: "GenAI & LLM Applications",
    icon: "Sparkles",
    summary:
      "Production-grade RAG systems, conversational AI, and custom copilots — engineered for accuracy, observability, and cost control. I'll work closely with you to make sure it actually solves your problem.",
    deliverables: [
      "Retrieval-Augmented Generation pipelines",
      "Custom copilots & internal AI assistants",
      "Multi-provider LLM orchestration (Gemini, Groq, OpenAI, Anthropic)",
      "Evaluation harnesses & guardrails",
    ],
    stack: ["LangChain", "LangGraph", "Pydantic", "Weaviate", "OpenAI", "Gemini"],
  },
  {
    id: "agents",
    title: "Multi-Agent Systems",
    icon: "Network",
    summary:
      "Autonomous agent workflows that plan, retrieve, execute, and self-review. Built with deterministic fallbacks, structured outputs, and full traceability — so you always know what your agents did and why.",
    deliverables: [
      "Agent orchestration graphs (LangGraph)",
      "Tool-using agents with structured outputs",
      "Human-in-the-loop & escalation flows",
      "Observability, tracing, and cost analytics",
    ],
    stack: ["LangGraph", "FastAPI", "Redis", "Postgres", "Sentry"],
  },
  {
    id: "backend",
    title: "Backend & API Engineering",
    icon: "Server",
    summary:
      "Scalable REST and GraphQL backends with auth, observability, and clean docs. Designed to survive production traffic from day one — and easy for you or your team to maintain afterwards.",
    deliverables: [
      "REST/GraphQL API design & implementation",
      "Auth (OAuth 2.0, JWT, RBAC)",
      "Microservices & API gateway patterns",
      "OpenAPI docs, CI/CD, observability stack",
    ],
    stack: ["FastAPI", "Django", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
  },
  {
    id: "fullstack",
    title: "Full-Stack Product Builds",
    icon: "Layers",
    summary:
      "From idea to launch — complete web products with Next.js frontends, API backends, and database design. Shipped, documented, and ready to scale. Perfect for MVPs and early-stage products.",
    deliverables: [
      "Next.js + Tailwind + shadcn/ui frontends",
      "Backend APIs & database schema design",
      "Deployment, CI/CD, and monitoring setup",
      "Technical documentation & handover",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Vercel"],
  },
  {
    id: "ai-safety",
    title: "AI Safety & Evaluation",
    icon: "ShieldCheck",
    summary:
      "Adversarial evaluation environments for your AI agents. Quantify robustness against prompt injection, social engineering, and edge-case failures — before your users find them the hard way.",
    deliverables: [
      "Modular adversarial eval environments",
      "Prompt-injection & jailbreak test suites",
      "Resilience scoring & reporting",
      "CI integration for regression testing",
    ],
    stack: ["FastAPI", "Pytest", "LangChain", "Weights & Biases"],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    icon: "Compass",
    summary:
      "Architecture reviews, AI strategy, and team mentorship at friendly rates. I'm early in my freelance journey, which means I bring fresh perspective, recent training, and a strong incentive to make you happy.",
    deliverables: [
      "Architecture review & recommendations",
      "AI/LLM strategy & vendor selection",
      "Code review & engineering practices",
      "Async mentorship for your team",
    ],
    stack: ["System Design", "AI Strategy", "Code Review"],
  },
];

export const CASE_STUDIES = [
  {
    id: "qkdpy",
    name: "QKDpy",
    category: "Open-Source Library",
    headline: "Quantum key distribution library — v0.8.0 on PyPI",
    description:
      "A production-grade Python library for Quantum Key Distribution simulation, currently at v0.8.0 (released Jul 21, 2026) with 17 PyPI releases and 155+ commits under Apache-2.0. Implements BB84 (prepare-and-measure), E91 (entanglement-based), and CV-QKD protocols. v0.8.0 added three major modules: DensityMatrix for mixed-state simulation with CPTP noise channels (depolarizing, amplitude damping, phase damping, bit/phase flip), a quantum Circuit model with OpenQASM 2.0 export, and a SecretKeyRate calculator supporting BB84, Decoy-State BB84, E91, and SARG04 protocols with automatic QBER estimation and maximum secure distance calculation.",
    tags: ["Python", "PyPI", "BB84", "E91", "CV-QKD", "QASM 2.0", "Apache-2.0"],
    metrics: [
      { label: "PyPI version", value: "v0.8.0" },
      { label: "Total commits", value: "155+" },
      { label: "Releases", value: "17" },
    ],
    accent: "emerald",
    deliverable: "Maintained open-source library on PyPI",
    repoUrl: "https://github.com/Pranava-Kumar/qkdpy",
  },
  {
    id: "rox",
    name: "ROXα Flight Computer",
    category: "Mission-Critical Embedded",
    headline: "Fault-tolerant avionics, ISRO-certified Excellent",
    description:
      "A modular flight computer for model rocketry on Teensy 4.1 with redundant sensors (dual barometers MS5611/BMP280, dual IMUs ICM-20948/BMI088, dual compass QMC5883L), a 13-state finite-state machine (BOOT→PREFLIGHT→LAUNCH→LIFTOFF→ASCENT→COAST→APOGEE→DROGUE→MAIN→DESCENT→IMPACT→RECOVERY→SAFE), CRC-framed XBee S2C telemetry downlink with sequence numbers for packet-loss detection, and a Python ground control station with COM auto-detection and real-time parsing. Built under hard 5ms real-time control-loop constraints with vibration-tolerant firmware and independent watchdog fault containment.",
    tags: ["Embedded C/C++", "Teensy 4.1", "XBee S2C", "Python GCS", "Kalman Filter", "FSM"],
    metrics: [
      { label: "ISRO rank", value: "Top 10" },
      { label: "Flight states", value: "13" },
      { label: "Redundant sensors", value: "6" },
    ],
    accent: "cyan",
    deliverable: "Certified mission-critical avionics stack",
    repoUrl: "https://github.com/Pranava-Kumar/RocketryAvionics",
  },
  {
    id: "pantheon",
    name: "Pantheon",
    category: "AI Trading System",
    headline: "Multi-model LLM consensus for Indian equity markets",
    description:
      "A multi-agent LLM consensus engine for NSE/BSE equity analysis with 77 commits. Orchestrates 5+ LLMs (Gemini Flash/Pro, Groq, Ollama) via LangGraph state charts with specialized agent personas: Technical Analyst (interprets signals), Fundamental Analyst (evaluates financials), Sentiment Analyst (reads market news), Risk Manager (enforces stop-losses), and a Consensus Node that synthesizes these into a unified Buy/Sell/Hold recommendation with confidence percentage. Includes a proprietary Market Mood Context Index (MMCI) scoring engine from -1.0 to +1.0, async data pipeline using Upstox API + jugaad-data, Redis caching, apscheduler for 60-second index updates, and a Streamlit dashboard with paper-trading tracking.",
    tags: ["LangGraph", "Gemini", "Groq", "Ollama", "Neon DB", "Redis", "Streamlit"],
    metrics: [
      { label: "LLM agents", value: "5+" },
      { label: "Commits", value: "77" },
      { label: "Market data", value: "NSE/BSE" },
    ],
    accent: "violet",
    deliverable: "Production AI trading analysis system",
    repoUrl: "https://github.com/Pranava-Kumar/Pantheon",
  },
  {
    id: "pinn",
    name: "SMART-DEORBIT",
    category: "Physics-Informed ML",
    headline: "PINN for satellite de-orbit trajectory optimization",
    description:
      "A physics-informed neural network framework for rapid orbital decay prediction and fuel-optimal de-orbit maneuver planning, designed for ISRO's PSLV/SSLV upper stage disposal. Models J2 gravitational perturbations and NRLMSISE-00 atmospheric drag. Achieves <1 km altitude error and >100× speedup vs DOP853/RK8 numerical solvers — fast enough for near-real-time conjunction assessment. Pre-configured for 4 missions: PSLV PS4 (750 km, ~7.5 m/s ΔV, ~83% fuel savings), SSLV VTM (500 km, <1 m/s, ~90% savings), CARTOSAT-2 (630 km), and RESOURCESAT-2 (817 km). Includes a Streamlit interactive dashboard and was presented at the MAHSA University international engineering conference (Malaysia).",
    tags: ["Python", "PyTorch", "SciPy", "Orbital Mechanics", "PINNs", "Streamlit"],
    metrics: [
      { label: "Speedup vs RK8", value: "100×" },
      { label: "Altitude error", value: "<1 km" },
      { label: "Fuel savings", value: "Up to 90%" },
    ],
    accent: "amber",
    deliverable: "AI-accelerated orbital mechanics framework",
    repoUrl: "https://github.com/Pranava-Kumar/PINN",
  },
  {
    id: "sentinel",
    name: "Sentinel Env",
    category: "AI Safety",
    headline: "AI agent safety & jailbreak detection platform",
    description:
      "A Docker-based evaluation environment for testing AI agents against prompt-injection, social-engineering, and stealth-exfiltration attacks, with 59 commits. Deployed as a Hugging Face Space for the Meta OpenENV RL Challenge 2026. Exposes reproducible REST endpoints: POST /reset, POST /step, GET /state, GET /health, GET /grade, GET /resilience-profile. Three difficulty tiers: basic-injection (Easy), social-engineering (Medium), stealth-exfiltration (Hard). Backend implements HyperionRL with all 12 RL innovations, comprehensive technical documentation (8 guides, 5400+ lines), and a code review graph visualization script. Ruff/mypy/bandit configured via pre-commit.",
    tags: ["FastAPI", "Docker", "Hugging Face", "RL", "AI Safety", "OpenENV"],
    metrics: [
      { label: "Attack tiers", value: "3" },
      { label: "Commits", value: "59" },
      { label: "RL innovations", value: "12" },
    ],
    accent: "rose",
    deliverable: "Reusable safety evaluation platform",
    repoUrl: "https://github.com/Pranava-Kumar/Sentinel-Env",
  },
  {
    id: "research-agent",
    name: "AI Researcher 3.0",
    category: "Multi-Agent Automation",
    headline: "Autonomous academic paper generation pipeline",
    description:
      "An autonomous research agent (6 commits) that generates academic-grade PDF papers using LangGraph state graphs and Gemini 2.5 Flash/Pro. 7-stage pipeline: Planner → Researcher (ArXiv + DuckDuckGo web search) → 3-stage Writer (Intro, Methodology, Conclusion for depth) → Pro Reviewer → Polisher → Tectonic LaTeX Compiler with auto-fix loop. Uses the PTCF prompt framework (Persona, Task, Context, Format) with chain-of-thought reasoning. SQLite checkpointing enables persistent workflow state — pause and resume long research jobs. Streamlit frontend for topic input and PDF download.",
    tags: ["LangGraph", "Gemini 2.5", "LaTeX", "Tectonic", "Streamlit", "SQLite"],
    metrics: [
      { label: "Agent stages", value: "7" },
      { label: "Output", value: "Compiled PDF" },
      { label: "Auto-fix loop", value: "Yes" },
    ],
    accent: "indigo",
    deliverable: "End-to-end research automation pipeline",
    repoUrl: "https://github.com/Pranava-Kumar/ai-research-paper-agent",
  },
  {
    id: "krishidrishti",
    name: "KrishiDrishti",
    category: "AI for Agriculture",
    headline: "Hyperspectral crop-health monitoring platform",
    description:
      "An enterprise-grade AI-powered crop health monitoring app built for the Smart India Hackathon (5 commits). Computes 5 spectral indices (NDVI, NDRE, MSI, SAVI, EVI) from ENVI/TIFF hyperspectral imagery with 95% accuracy vs MATLAB references. AI-powered stress and pest risk detection with 7-10 day early warning before visible symptoms. Tech stack: Python backend with SQLAlchemy + PostgreSQL, Next.js frontend with role-based access control, Leaflet for real-time field mapping, and Recharts for temporal trend analysis. Zone-specific recommendations based on NDVI health maps.",
    tags: ["Python", "Next.js", "PostgreSQL", "Leaflet", "Recharts", "Hyperspectral"],
    metrics: [
      { label: "Spectral indices", value: "5" },
      { label: "Accuracy", value: "95%" },
      { label: "Early warning", value: "7-10 days" },
    ],
    accent: "lime",
    deliverable: "Hackathon-ready agri-tech platform",
    repoUrl: "https://github.com/Pranava-Kumar/SIH_KrishiDrishti",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30–45 min",
    description:
      "We talk through your problem, constraints, and what success looks like. I tell you honestly if I'm the right engineer for the job — and if I'm not, I'll point you to someone who is.",
    deliverables: ["Scope outline", "Honest feasibility read", "No obligation"],
  },
  {
    number: "02",
    title: "Proposal & Architecture",
    duration: "2–3 days",
    description:
      "You get a written proposal with scope, milestones, deliverables, timeline, and fixed pricing. Includes a high-level architecture diagram and the trade-offs I considered.",
    deliverables: [
      "Fixed-price proposal",
      "Architecture diagram",
      "Milestone breakdown",
    ],
  },
  {
    number: "03",
    title: "Build & Iterate",
    duration: "2–8 weeks",
    description:
      "Weekly demos. You see progress every Friday, not at the end. Code is committed to your repo from day one. I write tests, docs, and observability as I go — never as an afterthought.",
    deliverables: ["Weekly demos", "Your repo, your IP", "Tests + docs inline"],
  },
  {
    number: "04",
    title: "Launch & Handover",
    duration: "1 week",
    description:
      "Deployment to your infrastructure, runbook documentation, and a 2-week post-launch support window included. I don't disappear after the final invoice.",
    deliverables: [
      "Production deployment",
      "Runbook + docs",
      "2 weeks post-launch support",
    ],
  },
];

/**
 * Tech stack — grouped by category.
 */
export interface SkillGroup {
  id: string;
  category: string;
  icon: string;
  accent: string; // tailwind color name e.g. "violet"
  blurb: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "ai-ml",
    category: "AI / ML & GenAI",
    icon: "BrainCircuit",
    accent: "fuchsia",
    blurb: "Where I spend most of my time — LLMs, agents, and applied ML.",
    skills: [
      "LangChain",
      "LangGraph",
      "Gemini API",
      "Groq",
      "OpenAI API",
      "Hugging Face",
      "PyTorch",
      "scikit-learn",
      "TensorFlow / Keras",
      "RAG",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "Computer Vision",
      "Physics-Informed NN",
      "Anomaly Detection",
      "MLOps / W&B",
    ],
  },
  {
    id: "backend",
    category: "Backend & APIs",
    icon: "Server",
    accent: "emerald",
    blurb: "Production-grade backends that survive real traffic.",
    skills: [
      "Python",
      "FastAPI",
      "Django + DRF",
      "Flask",
      "SQLAlchemy",
      "Pydantic",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "OAuth 2.0 / JWT",
      "Microservices",
      "OpenAPI / Swagger",
      "Alembic",
      "Celery",
    ],
  },
  {
    id: "quantum",
    category: "Quantum Computing",
    icon: "Atom",
    accent: "violet",
    blurb: "Quantum cryptography and quantum ML frameworks — built around qkdpy.",
    skills: [
      "QKD Protocols (BB84)",
      "Decoy-State BB84",
      "SARG04 Protocol",
      "E91 Protocol",
      "CV-QKD",
      "Density Matrix Simulation",
      "Noise Channel Modeling",
      "Quantum Entanglement",
      "Qiskit",
      "Cirq",
      "PennyLane",
      "OpenQASM 2.0",
      "Quantum Cryptography",
      "Quantum Key Distribution",
      "Entanglement Distillation",
      "PyPI Packaging",
    ],
  },
  {
    id: "avionics",
    category: "Avionics & Embedded",
    icon: "Cpu",
    accent: "rose",
    blurb: "Mission-critical flight software for aerospace systems.",
    skills: [
      "Embedded C/C++",
      "Teensy 4.1",
      "Arduino",
      "PCB Design",
      "Sensor Fusion",
      "Kalman Filtering",
      "IMU Calibration",
      "Altitude Estimation",
      "Vibration-Tolerant Firmware",
      "Telemetry / GCS",
      "XBee S2C",
      "I2C / SPI / UART",
      "ADCS",
      "Real-Time Control Loops",
      "Watchdog Timers",
      "CRC Framing",
      "Signal Processing",
      "Fault Tolerance",
      "Finite State Machines",
      "Real-time Systems",
    ],
  },
  {
    id: "frontend",
    category: "Full-Stack Web Development",
    icon: "MonitorSmartphone",
    accent: "cyan",
    blurb: "Modern, responsive, accessible web apps with great UX.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "GSAP",
      "Three.js / R3F",
      "HTML5 / CSS3",
      "Bootstrap",
      "Streamlit",
      "Responsive Design",
      "SSR / SSG",
    ],
  },
  {
    id: "databases",
    category: "Databases & Storage",
    icon: "Database",
    accent: "amber",
    blurb: "From schema design to query optimization.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Neon DB",
      "Supabase",
      "SQLModel",
      "Query Optimization",
      "Indexing",
      "ACID Transactions",
    ],
  },
  {
    id: "devops",
    category: "DevOps & Cloud",
    icon: "CloudCog",
    accent: "indigo",
    blurb: "Ship it, monitor it, sleep at night.",
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub Actions",
      "CI/CD Pipelines",
      "GCP",
      "AWS",
      "Vercel",
      "Linux",
      "Serverless",
      "Sentry / Observability",
      "n8n",
    ],
  },
  {
    id: "fintech",
    category: "Fintech & Trading",
    icon: "LineChart",
    accent: "lime",
    blurb: "Market data, scoring engines, and paper-trading systems.",
    skills: [
      "NSE/BSE APIs",
      "Upstox API",
      "pandas-ta",
      "Market Sentiment Analysis",
      "Multi-Asset Trading",
      "Backtesting",
      "Risk Management",
      "Paper Trading",
    ],
  },
  {
    id: "practices",
    category: "Engineering Practices",
    icon: "Wrench",
    accent: "teal",
    blurb: "How I work — TDD, code review, and clean docs.",
    skills: [
      "Agile / Scrum",
      "Test-Driven Development",
      "Code Review",
      "System Design",
      "Debugging",
      "Performance Optimization",
      "Technical Documentation",
      "Production Support",
      "Version Control (Git)",
      "Code Quality (Ruff / mypy / bandit)",
      "Pre-commit Hooks",
      "Incident Response",
      "CI/CD Strategy",
      "API Design",
      "Documentation-Driven Dev",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Pranava took a vague GenAI idea we had and turned it into a shipped product in three weeks. The observability he built in from day one saved us when we hit a vendor rate-limit issue in production. Worth every rupee.",
    name: "Early-stage founder",
    role: "B2B SaaS, Bengaluru",
    initials: "AK",
  },
  {
    quote:
      "We hired Pranava to build an internal agent workflow. He delivered ahead of schedule, wrote better tests than our in-house team, and left documentation that actually matched the code. Rare combination.",
    name: "Engineering lead",
    role: "Fintech startup",
    initials: "RM",
  },
  {
    quote:
      "The multi-agent system he built handles edge cases we hadn't even thought of. His ISRO-grade rigor shows up in everything — error handling, logging, recovery paths. Felt like working with a senior staff engineer.",
    name: "CTO",
    role: "Aerospace training platform",
    initials: "VS",
  },
];

export const FAQS = [
  {
    q: "What's your typical engagement size?",
    a: "Most projects land between ₹10,000 and ₹60,000, running 1–6 weeks. For larger builds I work in milestones with separate Statements of Work per phase. I'm happy to scope a smaller 'proof of value' sprint first if you're unsure about committing to a full build.",
  },
  {
    q: "How do you handle pricing — fixed or hourly?",
    a: "Fixed-price for defined scopes (the vast majority of my work). Hourly only for open-ended consulting or advisory. Fixed price means you know the cost upfront, and I carry the risk of underestimating — not you. As a beginner-friendly engineer, my rates are intentionally lower than senior consultants.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes — I'm comfortable working across time zones. I work async-friendly hours, document everything in writing, and accommodate US/EU/AU time zones for live calls. Contracts in USD or INR, invoiced via Stripe or wire.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do — fully, from the first commit. Code goes into your repository, infrastructure lives in your accounts, and the contract includes a full IP assignment. I retain rights only to reusable boilerplate I had before the engagement.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. I'm comfortable picking up an existing codebase, doing code reviews, pair-programming with your engineers, and transferring knowledge as I go. Many engagements end with your team stronger, not just with shipped software.",
  },
  {
    q: "What if we need changes after launch?",
    a: "Every engagement includes a 2-week post-launch support window for bug fixes and small adjustments at no extra cost. After that, I offer monthly retainers for ongoing work, or we scope a new Statement of Work for significant new features.",
  },
];

/**
 * Recognition & certifications — sourced from Pranava's certificate list
 * (1. List of Certificates.xlsx) + the resume-mentioned awards. Grouped by
 * type so the certifications section is genuinely rich, not sparse.
 */
export const ACHIEVEMENTS = [
  {
    title: "ISRO / IN-SPACe / ASI — Excellent",
    detail: "National model rocketry finale, top 10 among 100+ nationwide teams",
    year: "2025",
  },
  {
    title: "Infosys PALS TechZooka — 3rd Place",
    detail: "SafeGuard Navigator, safety-first routing, 88 competing teams",
    year: "2025",
  },
  {
    title: "Best Innovation Award",
    detail: "Skincare AI — clinical-grade dermatological diagnostic system",
    year: "2025",
  },
  {
    title: "Best Outgoing Student Award",
    detail: "Dr. MGRERI IT Department, 2022–26 batch",
    year: "2026",
  },
  {
    title: "QKDpy on PyPI",
    detail: "v0.8.0, 17 releases, 155+ commits, Apache-2.0",
    year: "2024–26",
  },
  {
    title: "MAHSA University Conference",
    detail: "SMART-DEORBIT PINN paper presented at international engineering conference",
    year: "2025",
  },
];

export const CERTIFICATIONS = [
  // Space & Aerospace
  { name: "ISRO START 2023", org: "ISRO - Indian Space Research Organization", category: "Space" },
  { name: "SMOPS 2023 — Participation", org: "ISRO - Indian Space Research Organization", category: "Space" },
  {
    name: "S2: STEP 2025 & IPSC — International Conference",
    org: "Centre for Space Science and Technology — IIT Roorkee",
    category: "Space",
  },
  { name: "Explore Module", org: "Illinois Space Tech Academy", category: "Space" },
  { name: "Go Module", org: "Illinois Space Tech Academy", category: "Space" },
  { name: "Land Module", org: "Illinois Space Tech Academy", category: "Space" },
  { name: "Live Module", org: "Illinois Space Tech Academy", category: "Space" },
  { name: "All Five Module Badge", org: "Illinois Space Tech Academy", category: "Space" },
  { name: "Aeroin Internship Completion", org: "Aeroin Space Tech Pvt Ltd", category: "Space" },

  // AI / Cloud / Data
  { name: "GenAI Job Simulation", org: "BCGX — Forage", category: "AI & Cloud" },
  { name: "Develop GenAI App with Streamlit", org: "Google Cloud", category: "AI & Cloud" },
  { name: "Prompt Design in Vertex AI", org: "Google Cloud", category: "AI & Cloud" },
  { name: "Microsoft AI Skills Festival", org: "Microsoft", category: "AI & Cloud" },
  { name: "AWS Activate — Completion", org: "AWS", category: "AI & Cloud" },
  { name: "API Fundamentals — Student Expert Badge", org: "Postman", category: "AI & Cloud" },
  { name: "Data Science & ML Internship Completion", org: "YBI Foundation", category: "AI & Cloud" },
  { name: "NPTEL Python for Data Science — Elite Silver", org: "NPTEL", category: "AI & Cloud" },
  { name: "Quantum Computing — Achievement", org: "Springpod, Fujitsu", category: "AI & Cloud" },

  // Leadership & Programs
  { name: "2025 Aspire Leaders Program — Completion", org: "Aspire Institute", category: "Leadership" },
  { name: "2025 Aspire Leaders Program — Letter of Acknowledgement", org: "Aspire Institute", category: "Leadership" },
  { name: "Aspire Module 1 Completion", org: "Aspire Institute", category: "Leadership" },
  { name: "Certificate of Commitment", org: "Central Vigilance Commission (Gov of India)", category: "Leadership" },
  { name: "Certificate of Participation — Chennai Walkathon", org: "TamilNadu Police — Cyber Crime Wing", category: "Leadership" },

  // Hackathons & Open Source
  { name: "Build With India — Participation", org: "Hack with India", category: "Hackathons" },
  { name: "Social Winter of Code (Season 5)", org: "Social Winter of Code", category: "Hackathons" },
  { name: "Empower Tech Hackathon — Participation", org: "VIT Chennai", category: "Hackathons" },
  { name: "Pre Hackathon (Hack with Gujarat) — Participation", org: "DevXpanse", category: "Hackathons" },
  { name: "HackForge'25 — Participation", org: "SRM Vadapalani", category: "Hackathons" },
  { name: "IGEN ENERGATHON 2023 — Super Star", org: "IGEN", category: "Hackathons" },
  { name: "IGEN SDG Research Conclave — Participation", org: "IGEN", category: "Hackathons" },

  // Web & Backend Dev
  { name: "Backend Web Dev Bootcamp — Completion", org: "Microsoft Learn Student Ambassador", category: "Web Dev" },
  { name: "Backend Web Development — Attendance & Completion", org: "Microsoft Learn Student Ambassador", category: "Web Dev" },
  { name: "Certificate of Completion", org: "Microsoft Learn Student Ambassador", category: "Web Dev" },
  { name: "7-day Backend Web Dev Bootcamp — Participation", org: "DevTown", category: "Web Dev" },
  { name: "7-day Web Animations using CSS Bootcamp — Participation", org: "DevTown", category: "Web Dev" },
  { name: "Certificate of Appreciation", org: "DevTown", category: "Web Dev" },
  { name: "NM-AU-TNcpl — Participation", org: "GUVI, Naan Mudhalvan, Anna University", category: "Web Dev" },
  { name: "Mastering the Basics of Solidworks — Participation", org: "GUVI", category: "Web Dev" },

  // Open Science / Research
  { name: "NASA Open Science 101 — Certificate of Achievement", org: "NASA", category: "Research" },
  { name: "NASA Open Science 101 — Achievement Badge", org: "NASA", category: "Research" },
  { name: "Webinar Participation", org: "Loyola Astronomy and Innovative Club", category: "Research" },
  { name: "One Day Student Workshop — Participation", org: "SIMATS Engineering College", category: "Research" },

  // Languages
  { name: "Japanese Foreign Language — Level 1 Completion", org: "Dr. M.G.R. Centre for Foreign Languages", category: "Languages" },
];

export const CERT_CATEGORIES = [
  "Space",
  "AI & Cloud",
  "Leadership",
  "Hackathons",
  "Web Dev",
  "Research",
  "Languages",
] as const;
