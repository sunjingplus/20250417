import Image from "next/image";
import { AiFillTikTok } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt={t("logoAlt")} width={30} height={30} />
              <h3 className="text-sm font-medium">{t("logoText")}</h3>
            </div>
            <p className="text-sm text-gray-600">{t("tagline")}</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:opacity-80" title={t("socialMediaTitles.tiktok")}>
                <AiFillTikTok size="30" />
              </a>
              <a href="#" className="hover:opacity-80" title={t("socialMediaTitles.instagram")}>
                <AiOutlineInstagram size="30" />
              </a>
              <a href="#" className="hover:opacity-80" title={t("socialMediaTitles.twitter")}>
                <AiOutlineTwitter size="30" />
              </a>
              <a href="#" className="hover:opacity-80" title={t("socialMediaTitles.youtube")}>
                <AiOutlineYoutube size="30" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">{t("products")}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("productItems.useCases")}>
                  {t("productItems.useCases")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("productItems.chromeExtension")}>
                  {t("productItems.chromeExtension")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("productItems.apiDocs")}>
                  {t("productItems.apiDocs")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("productItems.pricing")}>
                  {t("productItems.pricing")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("productItems.videoTutorials")}>
                  {t("productItems.videoTutorials")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("productItems.resources")}>
                  {t("productItems.resources")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("productItems.blog")}>
                  {t("productItems.blog")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("productItems.faq")}>
                  {t("productItems.faq")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">{t("weAlsoBuilt")}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("builtItems.resumeScanner")}>
                  {t("builtItems.resumeScanner")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("builtItems.invoiceScanner")}>
                  {t("builtItems.invoiceScanner")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("builtItems.quizGenerator")}>
                  {t("builtItems.quizGenerator")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("builtItems.quickyAI")}>
                  {t("builtItems.quickyAI")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("builtItems.doctrine")}>
                  {t("builtItems.doctrine")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("builtItems.pdfGPTs")}>
                  {t("builtItems.pdfGPTs")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("builtItems.pdfAIGenerator")}>
                  {t("builtItems.pdfAIGenerator")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("builtItems.otherTools")}>
                  {t("builtItems.otherTools")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">{t("company")}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("companyItems.vsChatPDF")}>
                  {t("companyItems.vsChatPDF")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("companyItems.vsAcrobat")}>
                  {t("companyItems.vsAcrobat")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("companyItems.legal")}>
                  {t("companyItems.legal")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("companyItems.affiliate")}>
                  {t("companyItems.affiliate")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black block py-1" title={t("companyItems.investor")}>
                  {t("companyItems.investor")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}