"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (!el.classList.contains("reveal-in")) {
          observer.observe(el);
        }
      });
    };

    observe();
    // Re-observe after a tick to catch dynamically rendered elements
    const t = setTimeout(observe, 100);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return null;
}
