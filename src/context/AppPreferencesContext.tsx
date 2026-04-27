import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, Dictionary, LocaleCode, supportedLocales, ThemeMode } from "../localization/translations";

interface AppPreferencesContextType {
  locale: LocaleCode;
  setLocale: (next: LocaleCode) => void;
  dictionary: Dictionary;
  theme: ThemeMode;
  setTheme: (next: ThemeMode) => void;
  locales: Array<{ code: LocaleCode; label: string }>;
}

const AppPreferencesContext = createContext<AppPreferencesContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = "portfolio_locale";
const THEME_STORAGE_KEY = "portfolio_theme";

export const AppPreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<LocaleCode>("en");
  const [theme, setThemeState] = useState<ThemeMode>("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY) as LocaleCode | null;
    const browserLanguage = (navigator.language || "en").split("-")[0] as LocaleCode;
    const initialLocale = savedLocale && dictionaries[savedLocale] ? savedLocale : dictionaries[browserLanguage] ? browserLanguage : "en";

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : systemPrefersDark ? "dark" : "light";

    setLocaleState(initialLocale);
    setThemeState(initialTheme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    const html = document.documentElement;
    html.setAttribute("lang", locale);
    html.setAttribute("dir", dictionaries[locale].dir);
  }, [locale]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    const html = document.documentElement;
    html.classList.remove("theme-light", "theme-dark");
    html.classList.add(theme === "light" ? "theme-light" : "theme-dark");
  }, [theme]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
      dictionary: dictionaries[locale],
      theme,
      setTheme: setThemeState,
      locales: supportedLocales,
    }),
    [locale, theme]
  );

  return <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>;
};

export const useAppPreferences = () => {
  const context = useContext(AppPreferencesContext);
  if (!context) {
    throw new Error("useAppPreferences must be used within AppPreferencesProvider");
  }
  return context;
};
