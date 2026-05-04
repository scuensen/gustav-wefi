"use client";
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { content as defaultContent } from "../content";
import { contentEn } from "../lib/content-en";

type ContentType = typeof defaultContent;

interface ContentContextValue {
  content: ContentType;
  updateField: (path: string, value: string) => void;
  reset: () => void;
  exportContent: () => void;
  language: "en" | "de";
  setLanguage: (lang: "en" | "de") => void;
}

const ContentContext = createContext<ContentContextValue>({
  content: defaultContent,
  updateField: () => {},
  reset: () => {},
  exportContent: () => {},
  language: "en",
  setLanguage: () => {},
});

function setNestedValue(obj: unknown, path: string, value: string): unknown {
  const keys = path.split(".");
  const result = JSON.parse(JSON.stringify(obj));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = result;
  for (let i = 0; i < keys.length - 1; i++) {
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
  return result;
}

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (acc as any)?.[key];
  }, obj);
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [deContent, setContentState] = useState<ContentType>(defaultContent);
  const [language, setLanguageState] = useState<"en" | "de">("en");

  useEffect(() => {
    const saved = localStorage.getItem("gm-content-overrides");
    if (saved) {
      try {
        const overrides = JSON.parse(saved);
        const merged = JSON.parse(JSON.stringify(defaultContent));
        function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>) {
          for (const key of Object.keys(source)) {
            if (source[key] !== null && typeof source[key] === "object" && !Array.isArray(source[key])) {
              if (!target[key]) target[key] = {};
              deepMerge(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>);
            } else if (source[key] !== undefined) {
              target[key] = source[key];
            }
          }
        }
        deepMerge(merged, overrides);
        setContentState(merged as ContentType);
      } catch {}
    }
    const savedLang = localStorage.getItem("gm-language") as "en" | "de" | null;
    if (savedLang === "de" || savedLang === "en") setLanguageState(savedLang);
  }, []);

  const setLanguage = useCallback((lang: "en" | "de") => {
    setLanguageState(lang);
    localStorage.setItem("gm-language", lang);
  }, []);

  // Serve English content directly; German uses merged de+overrides
  const content = language === "en" ? contentEn : deContent;

  const updateField = useCallback((path: string, value: string) => {
    setContentState((prev) => {
      const updated = setNestedValue(prev, path, value) as ContentType;
      // Save overrides (diff from default)
      const overrides = JSON.parse(localStorage.getItem("gm-content-overrides") || "{}");
      const keys = path.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let target: any = overrides;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!target[keys[i]]) target[keys[i]] = {};
        target = target[keys[i]];
      }
      target[keys[keys.length - 1]] = value;
      localStorage.setItem("gm-content-overrides", JSON.stringify(overrides));
      return updated;
    });
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem("gm-content-overrides");
    setContentState(defaultContent);
  }, []);

  const exportContent = useCallback(() => {
    const overrides = localStorage.getItem("gm-content-overrides") || "{}";
    const blob = new Blob([`// gm-content-overrides.json\n${JSON.stringify(JSON.parse(overrides), null, 2)}`], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "content-overrides.json";
    a.click();
  }, []);

  return (
    <ContentContext.Provider value={{ content, updateField, reset, exportContent, language, setLanguage }}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => useContext(ContentContext).content;
export const useContentEditor = () => useContext(ContentContext);
export const useLanguage = () => {
  const ctx = useContext(ContentContext);
  return { language: ctx.language, setLanguage: ctx.setLanguage };
};
export { getNestedValue };
