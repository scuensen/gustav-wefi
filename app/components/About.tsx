import { content } from "../content";

const c = content.about;

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: "#07101F" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center" style={{ gridTemplateColumns: "1fr 1.1fr" }}>
          {/* Photo / placeholder */}
          <div className="reveal relative">
            <div
              className="aspect-[4/5] rounded-2xl flex items-center justify-center overflow-hidden relative"
              style={{
                backgroundColor: "#142038",
                border: "1px solid rgba(201,168,76,0.15)",
                animation: "panBg 14s ease-in-out infinite",
              }}
            >
              {/* Decorative stripes */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "repeating-linear-gradient(-45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 14px)",
                }}
              />
              <div className="relative text-center p-8 flex flex-col items-center gap-4">
                <div
                  className="text-4xl opacity-30"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  GM
                </div>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", color: "#64748b", letterSpacing: "0.12em" }}
                >
                  Portrait · Gustav Mostetschnig
                </p>
              </div>
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
