"use client";
import { useContent } from "../context/ContentContext";

export default function About() {
  const c = useContent().about;
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: "#07101F" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center" style={{ gridTemplateColumns: "1fr 1.1fr" }}>
          {/* Photo */}
          <div className="reveal relative">
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden relative"
              style={{
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/portrait-gm.jpg`}
                alt="Gustav Mostetschnig"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
              {/* Subtle gold overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(7,16,31,0.5), transparent)" }}
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-5 -right-5 p-5 rounded-2xl text-center"
              style={{
                backgroundColor: "#142038",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="text-4xl font-bold leading-none"
                style={{ color: "#C9A84C", fontFamily: "var(--font-playfair)" }}
              >
                12+
              </div>
              <div
                className="text-[10px] uppercase tracking-widest mt-1"
                style={{ color: "#64748b", fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: "0.12em" }}
              >
                Jahre Praxiserfahrung
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="reveal">
              <p
                className="eyebrow-draw mb-4 text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ color: "#C9A84C", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
              >
                {c.eyebrow}
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: "80ms" }}>
              <h2
                className="font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  letterSpacing: "-0.012em",
                }}
              >
                {c.headline1}{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {c.headline2}
                </span>
              </h2>
            </div>
            <div className="reveal" style={{ transitionDelay: "160ms" }}>
              <p className="text-base mb-6 leading-relaxed" style={{ color: "#94a3b8", lineHeight: 1.8 }}>{c.text1}</p>
            </div>
            <div className="reveal" style={{ transitionDelay: "240ms" }}>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#94a3b8", lineHeight: 1.8 }}>{c.text2}</p>
            </div>
            <ul className="space-y-3">
              {c.highlights.map((item, i) => (
                <li
                  key={item}
                  className="reveal flex items-start gap-3"
                  style={{ transitionDelay: `${320 + i * 80}ms` }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-sm" style={{ color: "#94a3b8" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
