import type { NextConfig } from "next";
export default function nextConfig(phase: string): NextConfig {
  return {
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    distDir: phase === "phase-development-server" ? ".next-dev" : ".next",
    devIndicators: false,
  };
}
