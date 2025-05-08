import { defaultLocale, locales } from "./constants/locales";

export const i18n = {
  defaultLocale,
  locales: locales.map((l: any) => l.locale),
} as const;

export type Locale = (typeof i18n)["locales"][number];
