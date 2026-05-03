"use client";
import { useLanguage } from "../context/ContentContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full overflow-hidden"
      style={{ border: "1px solid rgba(201,168,76,0.25)", backgroundColor: "rgba(201,168,76,0.04)" }}
    >
      <button
        onClick={() => setLanguage("en")}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-all duration-200"
        style={{
          backgroundColor: language === "en" ? "rgba(201,168,76,0.18)" : "transparent",
          color: language === "en" ? "#C9A84C" : "#64748b",
        }}
        aria-label="Switch to English"
        title="English"
      >
        <span style={{ fontSize: "14px", lineHeight: 1 }}>🇬🇧</span>
        <span>EN</span>
      </button>
      <div style={{ width: "1px", height: "16px", backgroundColor: "rgba(201,168,76,0.2)" }} />
      <button
        onClick={() => setLanguage("de")}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-all duration-200"
        style={{
          backgroundColor: language === "de" ? "rgba(201,168,76,0.18)" : "transparent",
          color: language === "de" ? "#C9A84C" : "#64748b",
        }}
        aria-label="Auf Deutsch wechseln"
        title="Deutsch"
      >
        <span style={{ fontSize: "14px", lineHeight: 1 }}>🇩🇪</span>
        <span>DE</span>
      </button>
    </div>
  );
}
