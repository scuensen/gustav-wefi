"use client";
import { useContent } from "../context/ContentContext";

export default function Testimonials() {
  const c = useContent().testimonials;
  return (
    <section
      id="testimonials"
      className="py-24 px-6"
      style={{ backgroundColor: "#07101F", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal">
            <p
              className="eyebrow-draw mb-4 text-xs font-semibold tracking-[0.18em] uppercase inline-block"
              style={{ color: "#C9A84C", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
            >
              {c.eyebrow}
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <h2 className="font-bold" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.012em" }}>
              {c.headline}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {c.items.map((item, i) => (
            <div
              key={item.name}
              className="reveal flex flex-col p-9 rounded-[18px] transition-all duration-300"
              style={{
                backgroundColor: "#142038",
                border: "1px solid rgba(201,168,76,0.18)",
                transitionDelay: `${i * 120}ms`,
              }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(201,168,76,0.4)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(201,168,76,0.18)"; el.style.transform = "translateY(0)"; }}
            >
              {/* Quote icon */}
              <div className="mb-4" style={{ color: "#C9A84C", opacity: 0.35 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 17.5C3 12.5 6 8 11 6.5l1 2C8.5 9.5 6.5 12 6.5 14.5H10v6H3v-3zm11 0C14 12.5 17 8 22 6.5l1 2c-3.5 1-5.5 3.5-5.5 6H21v6h-7v-3z"/>
                </svg>
              </div>
              <p
                className="flex-1 text-[15.5px] leading-[1.75] italic mb-6"
                style={{ color: "#fff" }}
              >
                {item.quote}
              </p>
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "#C9A84C",
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#fff" }}>{item.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#64748b", fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: "0.04em" }}>
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
