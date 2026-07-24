import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  /* ── Build performance ── */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,

  /* ── Package transpilation for tree-shaking ── */
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei", "@react-three/postprocessing"],

  /* ── Image optimisation ── */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },

  /* ── Bundle compression ── */
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
