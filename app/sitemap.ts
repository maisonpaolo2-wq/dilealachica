import type { MetadataRoute } from "next";
import { weddings } from "@/content/data";

const base = "https://www.dilealachica.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${base}/servicios`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/bodas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/sobre-mi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];
  for (const w of weddings) {
    pages.push({ url: `${base}/bodas/${w.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 });
  }
  return pages;
}
