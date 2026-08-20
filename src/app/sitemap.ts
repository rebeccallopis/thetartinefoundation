import type { MetadataRoute } from "next";

const routes = ["", "/about", "/mission", "/programs", "/facts", "/team", "/get-involved", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thetartinefoundation.vercel.app";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
