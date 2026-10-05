import type { MetadataRoute } from "next";
import { services, projects } from "@/lib/content";
import { siteUrl } from "@/lib/config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/showcase",
    "/privasi",
    ...services.map((s) => `/layanan/${s.slug}`),
    ...projects.map((p) => `/showcase/${p.slug}`),
  ].map((p) => ({
    url: `${siteUrl}${p}/`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
