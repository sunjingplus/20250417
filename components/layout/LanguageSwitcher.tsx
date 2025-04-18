import {Menu} from '@headlessui/react';
import {useLocale} from 'next-intl';
import useLanguageStore from "@/app/store";
import {useRouter} from "next/navigation";


const LanguageSwitcher: React.FC = () => {
    
    
    const router = useRouter();
    const {setLanguage} = useLanguageStore();
    const locale = useLocale();
    
    const languages = [
        {code: "en", name: "English"},
        {code: "pt", name: "Português"},
        {code: "es", name: "Español"},
        {code: "de", name: "Deutsch"},
        {code: "fr", name: "Français"},
        {code: "id", name: "Indonesian"},
        {code: "it", name: "Italiano"},
        {code: "ru", name: "Русский"},
        {code: "ja", name: "日本語"},
        {code: "ko", name: "한국어"},
        {code: "my", name: "မြန်မာ"},
         {code: "zh", name: "简体中文"},
    ];
    
    
    const selectedLanguage = languages.find(lang => lang.code === locale)?.code || 'en';
    
    
    const handleLanguageChange = (languageCode: string) => {
        setLanguage(languageCode);
        router.push(`/${languageCode}`);
    };
    
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="inline-flex w-full justify-center rounded-md   px-3 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    {selectedLanguage}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"/>
                    </svg>
                </Menu.Button>
            </div>
            <Menu.Items
                className="absolute right-[-20vw] sm:right-0  mt-2 p-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {languages.map((lang) => (
                        <Menu.Item key={lang.code}>
                            {({active}) => (
                                <button
                                    className={`${active ? 'bg-[#276ef1] text-white' : 'text-gray-700'} block px-4 py-2 w-full text-left text-sm`}
                                    onClick={() => handleLanguageChange(lang.code)}
                                >
                                    {lang.name}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </div>
            </Menu.Items>
        </Menu>
    );
};

export default LanguageSwitcher;
