import type { MetadataRoute } from "next";
import { services, projects } from "@/lib/content";
import { siteUrl } from "@/lib/config";
import { offers } from "@/lib/catalog";
import { work } from "@/lib/work";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/showcase",
    "/privasi",
    "/pricelist",
    "/karya",
    ...offers.map((offer) => `/pricelist/${offer.slug}`),
    ...work.map((project) => `/karya/${project.slug}`),
    ...services.map((s) => `/layanan/${s.slug}`),
    ...projects.map((p) => `/showcase/${p.slug}`),
  ].map((p) => ({
    url: `${siteUrl}${p}/`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
