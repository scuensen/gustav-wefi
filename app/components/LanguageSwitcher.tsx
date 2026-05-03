"use client";
import { useLanguage } from "../context/ContentContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1">
      <button
        onClick={() => setLanguage("en")}
        className="flex items-center justify-center rounded-full transition-all duration-200"
        style={{
          width: 30,
          height: 30,
          fontSize: "16px",
          opacity: language === "en" ? 1 : 0.4,
          transform: language === "en" ? "scale(1.15)" : "scale(1)",
          backgroundColor: language === "en" ? "rgba(201,168,76,0.12)" : "transparent",
          border: language === "en" ? "1px solid rgba(201,168,76,0.35)" : "1px solid transparent",
        }}
        aria-label="Switch to English"
        title="English"
      >
        🇬🇧
      </button>
      <button
        onClick={() => setLanguage("de")}
        className="flex items-center justify-center rounded-full transition-all duration-200"
        style={{
          width: 30,
          height: 30,
          fontSize: "16px",
          opacity: language === "de" ? 1 : 0.4,
          transform: language === "de" ? "scale(1.15)" : "scale(1)",
          backgroundColor: language === "de" ? "rgba(201,168,76,0.12)" : "transparent",
          border: language === "de" ? "1px solid rgba(201,168,76,0.35)" : "1px solid transparent",
        }}
        aria-label="Auf Deutsch wechseln"
        title="Deutsch"
      >
        🇩🇪
      </button>
    </div>
  );
}
