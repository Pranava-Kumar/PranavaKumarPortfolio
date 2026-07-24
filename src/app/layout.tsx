import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pranava Kumar — Freelance AI & Backend Engineer",
  description:
    "Premium freelance engineering studio of Pranava Kumar. Building production GenAI systems, multi-agent backends, and scalable full-stack products for startups and enterprises worldwide.",
  keywords: [
    "Pranava Kumar",
    "Freelance AI Engineer",
    "GenAI Developer",
    "LLM Backend",
    "Multi-Agent Systems",
    "LangChain",
    "FastAPI",
    "Next.js",
    "Hire AI Developer",
    "Freelance Backend Engineer India",
  ],
  authors: [{ name: "Pranava Kumar" }],
  openGraph: {
    title: "Pranava Kumar — Freelance AI & Backend Engineer",
    description:
      "Production GenAI systems, multi-agent backends, and scalable full-stack products. Available for select freelance engagements.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranava Kumar — Freelance AI & Backend Engineer",
    description:
      "Production GenAI systems, multi-agent backends, and scalable full-stack products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrains.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
