"use client";
import { useContent } from "../context/ContentContext";

export default function Baccarat() {
  const c = useContent().baccarat;

  const points = [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
      title: c.point1Title,
      desc: c.point1Desc,
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: c.point2Title,
      desc: c.point2Desc,
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
      title: c.point3Title,
      desc: c.point3Desc,
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: c.point4Title,
      desc: c.point4Desc,
    },
  ];

  return (
    <section
      id="baccarat"
      className="relative py-36 px-6 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05), transparent 60%), linear-gradient(180deg, #07101F 0%, #0A1628 100%)",
        borderTop: "1px solid rgba(201,168,76,0.18)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute pointer-events-none" style={{ top: "-100px", right: "-60px", width: "500px", height: "500px", borderRadius: "50%", background: "#C9A84C", opacity: 0.07, filter: "blur(130px)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-140px", left: "-100px", width: "460px", height: "460px", borderRadius: "50%", background: "#1e3a8a", opacity: 0.14, filter: "blur(130px)" }} />

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
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A84C", boxShadow: "0 0 10px rgba(201,168,76,0.7)", animation: "wefipPulse 2.4s cubic-bezier(0.2,0.7,0.2,1) infinite" }} />
            {c.eyebrow}
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <h2
              className="font-semibold mb-5"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(40px, 5.6vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.018em" }}
            >
              {c.h1}{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {c.h2}
              </span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: "160ms" }}>
            <p className="text-[17px] leading-[1.75]" style={{ color: "#94a3b8" }}>{c.lead}</p>
          </div>
        </div>

        {/* Brand mark — links to platform */}
        <div className="reveal mb-20" style={{ transitionDelay: "220ms" }}>
          <a
            href="https://baccarat-entertainment.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-2xl mx-auto text-center relative px-8 py-14 rounded-3xl overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(20,32,56,0.8), rgba(10,22,40,0.6))",
              border: "1px solid rgba(201,168,76,0.4)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = "translateY(-4px)"; el.style.borderColor = "#C9A84C"; el.style.boxShadow = "0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = ""; el.style.borderColor = "rgba(201,168,76,0.4)"; el.style.boxShadow = "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)"; }}
          >
            <div className="absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "400px", height: "180px", background: "#C9A84C", opacity: 0.08, filter: "blur(80px)" }} />
            {/* Spade card symbol */}
            <div className="relative mb-3 inline-flex items-center justify-center" style={{ color: "#C9A84C", opacity: 0.6 }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9 6 4 8 4 12a4 4 0 0 0 6 3.4C9.5 17 9 18.5 8 20h8c-1-1.5-1.5-3-2-4.6A4 4 0 0 0 20 12c0-4-5-6-8-10z"/>
              </svg>
            </div>
            <div
              className="relative font-bold leading-none"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-0.03em", color: "#fff" }}
            >
              Baccarat<span style={{ color: "#C9A84C" }}>·</span>Entertainment
            </div>
            <div
              className="relative mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em]"
              style={{ color: "#64748b", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
            >
              <span>Staking-Plattform</span>
              <span className="inline-block w-6 h-px" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
              <span>baccarat-entertainment.com</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
            </div>
          </a>
        </div>

        {/* Feature points */}
        <div className="grid sm:grid-cols-2 gap-8 mb-14">
          {points.map((p, i) => (
            <div key={p.title} className="reveal flex gap-4 items-start" style={{ transitionDelay: `${300 + i * 90}ms` }}>
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{ width: 44, height: 44, backgroundColor: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C", boxShadow: "0 8px 20px rgba(201,168,76,0.10)" }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-playfair)", fontSize: "19px", color: "#fff", marginTop: "4px" }}>
                  {p.title}
                </h3>
                <p className="text-[14.5px] leading-[1.7]" style={{ color: "#94a3b8" }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="reveal mb-10" style={{ transitionDelay: "680ms" }}>
          <div
            className="max-w-2xl mx-auto px-5 py-4 rounded-2xl text-xs leading-relaxed text-center"
            style={{ backgroundColor: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)", color: "#64748b" }}
          >
            {c.disclaimer}
          </div>
        </div>

        {/* CTAs */}
        <div className="reveal flex flex-wrap gap-4 justify-center" style={{ transitionDelay: "760ms" }}>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${c.btnPdf}`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#E8C96A"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 14px 40px rgba(201,168,76,0.32)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#C9A84C"; el.style.transform = ""; el.style.boxShadow = "none"; }}
          >
            {c.btnPdfLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
          >
            {c.btnSecondary}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
