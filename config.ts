import { Pathnames } from 'next-intl/navigation';

export const locales = [
  'en', 'zh', 'pt', 'es', 'de', 'fr', 'id', 'it', 'ru', 'ja', 'ko', 'my'
] as const;

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'as-needed';

export type AppPathnames = keyof typeof pathnames;
