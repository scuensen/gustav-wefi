"use client";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { content } from "../content";

const c = content.cta;

export default function CTA() {
  return (
    <section id="cta" className="py-24 px-6" style={{ backgroundColor: "#07101F" }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest mb-4" style={{ color: "#C9A84C" }}>{c.eyebrow}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
          {c.headline1}{" "}
          <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A, #C9A84C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {c.headline2}
          </span>
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "#94a3b8" }}>{c.subtext}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={c.buttonPrimaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-200"
            style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#E8C96A"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 12px 40px rgba(201,168,76,0.45)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#C9A84C"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
          >
            {c.buttonPrimary}
            <ArrowRight size={18} />
          </a>
          <a
            href={`mailto:${c.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border transition-all duration-200"
            style={{ borderColor: "rgba(201,168,76,0.4)", color: "#C9A84C" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "rgba(201,168,76,0.08)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "transparent"; }}
          >
            <Mail size={16} />
            {c.buttonSecondary}
          </a>
        </div>

        <div className="flex items-center gap-4 mb-12 max-w-sm mx-auto">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
          <span className="text-xs" style={{ color: "#64748b" }}>oder</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={`mailto:${c.email}`}
            className="flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: "#64748b" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
          >
            <Mail size={14} />
            {c.email}
          </a>
          <a
            href={c.phoneHref}
            className="flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: "#64748b" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
          >
            <Phone size={14} />
            {c.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
