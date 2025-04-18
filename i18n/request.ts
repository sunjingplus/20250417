import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

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

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locales.includes(locale as any)) {
    notFound();
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
