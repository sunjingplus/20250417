
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import useLanguageStore from "@/app/store";
import { Session } from "next-auth";


const NavBar: React.FC = () => {
  const { language, setLanguage } = useLanguageStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const t = useTranslations("Navbar");

  return (
    <header>
      <div className="h-auto w-screen text-black bg-white">
        <nav className="font-inter mx-auto h-auto w-full  lg:relative lg:top-0">
          <div className="flex flex-col px-6 py-6 lg:flex-row items-center lg:items-center lg:justify-between lg:px-4 lg:py-4 xl:px-10">
            <Link
              href={`/${language}`}
              className="flex justify-center items-center"
              title={t("title")}
            >
              <Image src="/logo.svg" alt={t("title")} width={50} height={50} />
              <p className="text-xl md:text-xl2 lg:text-xl3 font-bold px-2">
                {t("title")}
              </p>
            </Link>
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } flex-col mt-14 space-y-8 lg:flex lg:flex-row lg:mt-0 lg:space-x-1 lg:space-y-0`}
            >
              <Link
                href={`/${language}`}
                className="font-inter pt-8 rounded-lg lg:px-2 lg:py-4  hover:underline"
                title={t("pricing")}
              >
                {t("pricing")}
              </Link>
              <Link
                href={`/${language}`}
                className="font-inter rounded-lg lg:px-2 lg:py-4  hover:underline"
                title={t("chrome")}
              >
                {t("chrome")}
              </Link>
              <Link
                href={`/${language}`}
                className="font-inter rounded-lg lg:px-2 lg:py-4  hover:underline"
                title={t("cases")}
              >
                {t("cases")}
              </Link>
              <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
                <div className="flex items-center">
                  <LanguageSwitcher />
                </div>
              </div>
              <Link
                href={`/${language}`}
                className="font-inter rounded-lg lg:px-2 lg:py-4  hover:underline"
                title={t("started")}
              >
                {t("started")}
              </Link>
            </div>

            <button className="absolute right-5 lg:hidden" onClick={toggleMenu}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
