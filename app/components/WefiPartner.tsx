"use client";
import { useContent } from "../context/ContentContext";

export default function WefiPartner() {
  const c = useContent().wefiPartner;
  const points = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20z"/>
      </svg>
    ),
    title: c.point1Title,
    desc: c.point1Desc,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: c.point2Title,
    desc: c.point2Desc,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
    title: c.point3Title,
    desc: c.point3Desc,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: c.point4Title,
    desc: c.point4Desc,
  },
];
  return (
    <section
      id="wefi-partner"
      className="relative py-16 md:py-24 px-6 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06), transparent 60%), linear-gradient(180deg, #0A1628 0%, #06101e 100%)",
        borderTop: "1px solid rgba(201,168,76,0.18)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute pointer-events-none" style={{ top: "-120px", left: "-80px", width: "540px", height: "540px", borderRadius: "50%", background: "#C9A84C", opacity: 0.08, filter: "blur(140px)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-160px", right: "-120px", width: "480px", height: "480px", borderRadius: "50%", background: "#1e3a8a", opacity: 0.16, filter: "blur(140px)" }} />

      <div className="relative max-w-5xl mx-auto">
        {/* Badge */}
        <div className="reveal mb-6">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
            style={{
              backgroundColor: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#C9A84C",
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "#C9A84C",
                boxShadow: "0 0 12px rgba(201,168,76,0.7)",
                animation: "wefipPulse 2.4s cubic-bezier(0.2,0.7,0.2,1) infinite",
              }}
            />
            {c.eyebrow}
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <h2
              className="font-semibold mb-5"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(40px, 5.6vw, 64px)",
                lineHeight: 1.08,
                letterSpacing: "-0.018em",
              }}
            >
              {c.h1}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {c.h2}
              </span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: "160ms" }}>
            <p className="text-[17px] leading-[1.75]" style={{ color: "#94a3b8" }}>{c.lead}</p>
          </div>
        </div>

        {/* Big wefi.co mark */}
        <div className="reveal mb-20" style={{ transitionDelay: "220ms" }}>
          <a
            href="https://www.wefi.co"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-2xl mx-auto text-center relative px-4 py-10 sm:px-8 sm:py-14 rounded-3xl overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(20,32,56,0.8), rgba(10,22,40,0.6))",
              border: "1px solid rgba(201,168,76,0.4)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-4px)";
              el.style.borderColor = "#C9A84C";
              el.style.boxShadow = "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.4), inset 0 1px 0 rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "";
              el.style.borderColor = "rgba(201,168,76,0.4)";
              el.style.boxShadow = "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)";
            }}
          >
            {/* Inner glow */}
            <div
              className="absolute pointer-events-none"
              style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "460px", height: "200px", background: "#C9A84C", opacity: 0.10, filter: "blur(80px)" }}
            />
            <div
              className="relative font-bold leading-none"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(72px, 12vw, 128px)",
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              wefi<span style={{ color: "#C9A84C", WebkitTextFillColor: "#C9A84C" }}>.</span>co
            </div>
            <div
              className="relative mt-4 inline-flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.22em]"
              style={{ color: "#64748b", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
            >
              <span>Internationaler Partner</span>
              <span className="inline-block w-6 h-px" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
              <span>wefi.co besuchen</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/><path d="M8 7h9v9"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Feature points */}
        <div className="grid sm:grid-cols-2 gap-8 mb-18">
          {points.map((p, i) => (
            <div key={p.title} className="reveal flex gap-4 items-start" style={{ transitionDelay: `${300 + i * 90}ms` }}>
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{
                  width: 44,
                  height: 44,
                  backgroundColor: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  color: "#C9A84C",
                  boxShadow: "0 8px 20px rgba(201,168,76,0.12)",
                }}
              >
                {p.icon}
              </div>
              <div>
                <h3
                  className="font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "19px", color: "#fff", letterSpacing: "-0.005em", marginTop: "4px" }}
                >
                  {p.title}
                </h3>
                <p className="text-[14.5px] leading-[1.7]" style={{ color: "#94a3b8" }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="reveal mt-16" style={{ transitionDelay: "680ms" }}>
          <div
            className="max-w-3xl mx-auto text-center pt-9"
            style={{ borderTop: "1px solid rgba(201,168,76,0.18)" }}
          >
            <div className="inline-flex mb-4" style={{ color: "#C9A84C", opacity: 0.32 }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.5C3 12.5 6 8 11 6.5l1 2C8.5 9.5 6.5 12 6.5 14.5H10v6H3v-3zm11 0C14 12.5 17 8 22 6.5l1 2c-3.5 1-5.5 3.5-5.5 6H21v6h-7v-3z"/>
              </svg>
            </div>
            <p
              className="italic font-medium"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(22px, 3vw, 32px)",
                lineHeight: 1.32,
                color: "#fff",
                letterSpacing: "-0.005em",
              }}
            >
              {c.quote}
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="reveal mt-14 flex flex-wrap gap-4 justify-center" style={{ transitionDelay: "760ms" }}>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/WeFi-Gitbook-Deutsch.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#E8C96A"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 14px 40px rgba(201,168,76,0.32)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#C9A84C"; el.style.transform = ""; el.style.boxShadow = "none"; }}
          >
            {c.btnSecondary}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
          <a
            href="https://www.wefi.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
          >
            {c.btnPrimary}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7"/><path d="M8 7h9v9"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
