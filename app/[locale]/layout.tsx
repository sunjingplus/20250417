
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations,
} from "next-intl/server";

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
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as any)) notFound();
  const messages = useMessages();
  return (
    <html lang={locale}>
      <head>
        {/* <Metrics /> */}
      </head>
      <body
        className={`antialiased bg-[#f7f5ee] text-slate-600 dark:bg-slate-900 dark:text-slate-200 ${inter.className}`}
      >
     
          <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
              </NextIntlClientProvider>
            </div>
          </div>
         

      </body>
    </html>
  );
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const formatter = await getFormatter({ locale });
  const now = await getNow({ locale });
  const timeZone = await getTimeZone({ locale });

  return {
    metadataBase: new URL("https://pdf.ai"),
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "https://pdf.ai" },
    openGraph: {
      title: t("title"),
      url: "https://pdf.ai",
      siteName: t("site-name"),
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://pdf.ai/api/og?title=${encodeURIComponent(
            t("site-title")
          )}`,
          width: 1200,
          height: 630,
          alt: t("site-title"),
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    other: {
      currentYear: formatter.dateTime(now, { year: "numeric" }),
      timeZone: timeZone || "N/A",
    },
  };
}