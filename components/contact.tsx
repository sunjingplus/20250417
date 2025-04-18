
import { useTranslations } from "next-intl";
import Dropzone from "@/components/dropzone";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <section className="py-12 md:py-16 lg:py-20"> {/* 增加垂直间距 */}
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8"> {/* 更合理的最大宽度和左右间距 */}
        <div className="flex flex-col items-center text-center mb-10"> {/* 居中容器 */}
          <h1 
            id="contact" 
            className="mb-6 text-3xl font-medium text-black sm:text-4xl md:mb-8" /* 响应式字体和间距 */
          >
            {t("title")}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            {t("content")}
          </p>
        </div>
        {/* <Dropzone /> */}
      </div>
    </section>
  );
}