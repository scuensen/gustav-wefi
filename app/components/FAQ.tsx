"use client";
import { useState } from "react";
import { content } from "../content";

const c = content.faq;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6" style={{ backgroundColor: "#0A1628" }}>
      <div className="max-w-[880px] mx-auto">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          {/* Left: heading */}
          <div>
            <div className="reveal">
              <p
                className="eyebrow-draw mb-4 text-xs font-semibold tracking-[0.18em] uppercase inline-block"
                style={{ color: "#C9A84C", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
              >
                {c.eyebrow}
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: "80ms" }}>
              <h2 className="font-bold" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.012em", lineHeight: 1.1 }}>
                {c.headline}
              </h2>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-3">
            {c.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="reveal rounded-[14px] overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? "#142038" : "#07101F",
                    border: `1px solid ${isOpen ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.06)"}`,
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <button
                    className="w-full flex items-center gap-4 px-6 py-[22px] text-left bg-transparent border-none cursor-pointer"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="text-sm font-semibold flex-shrink-0 italic min-w-[28px]"
                      style={{ color: "#C9A84C", opacity: 0.6, fontFamily: "var(--font-playfair)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base font-medium leading-snug" style={{ color: "#fff" }}>
                      {item.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full inline-flex items-center justify-center transition-all duration-200"
                      style={{
                        backgroundColor: isOpen ? "#C9A84C" : "rgba(201,168,76,0.08)",
                        color: isOpen ? "#0A1628" : "#C9A84C",
                      }}
                    >
                      {isOpen ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      )}
                    </span>
                  </button>
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: isOpen ? "320px" : "0",
                      transition: "max-height 0.4s cubic-bezier(0.2,0.7,0.2,1)",
                    }}
                  >
                    <p
                      className="text-[15px] leading-[1.75] px-6 pb-6"
                      style={{ color: "#94a3b8", paddingLeft: "70px" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
