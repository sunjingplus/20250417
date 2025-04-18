// store.ts
import {create} from 'zustand';

type LanguageState = {
  language: string;
  setLanguage: (lang: string) => void;
};

const useLanguageStore = create<LanguageState>(set => ({
  language: 'en',
  setLanguage: (lang: string) => set({ language: lang }),
}));

export default useLanguageStore;
