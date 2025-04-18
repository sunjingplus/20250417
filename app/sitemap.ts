import { MetadataRoute } from "next";

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "daily"
    | "always"
    | "hourly"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = [
    "en",
    "zh",
    "pt",
    "es",
    "de",
    "fr",
    "id",
    "it",
    "ru",
    "ja",
    "ko",
    "my",
  ];
  const additionalItems: SitemapEntry[] = [];
  const baseurl = process.env.NEXT_PUBLIC_API_URL;
  for (const locale of locales) {
    additionalItems.push({
      url: baseurl + `/${locale}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
    });
  }
  return [
    {
      url:`${baseurl}` ,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    ...additionalItems,
  ];
}
