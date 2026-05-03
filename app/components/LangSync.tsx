"use client";
import { useEffect } from "react";
import { useLanguage } from "../context/ContentContext";

export default function LangSync() {
  const { language } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return null;
}
