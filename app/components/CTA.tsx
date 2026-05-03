"use client";
import { useState } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useContent } from "../context/ContentContext";
import BookingModal from "./BookingModal";
import SocialLinks from "./SocialLinks";

export default function CTA() {
  const c = useContent().cta;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <section id="cta" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#07101F" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.08), transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,168,76,0.08), transparent 50%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
              {c.eyebrow}
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(36px, 6vw, 68px)",
                lineHeight: 1.1,
                letterSpacing: "-0.012em",
              }}
            >
              {c.headline1}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A, #C9A84C)",
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
            <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "#94a3b8" }}>{c.subtext}</p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ transitionDelay: "240ms" }}>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-200"
              style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#E8C96A"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 12px 40px rgba(201,168,76,0.45)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#C9A84C"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
            >
              {c.buttonPrimary}
              <ArrowRight size={18} />
            </button>
            <a
              href={`mailto:${c.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border transition-all duration-200"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "#C9A84C" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
            >
              <Mail size={16} />
              {c.buttonSecondary}
            </a>
          </div>

          <div className="flex items-center gap-4 mb-10 max-w-sm mx-auto">
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
            <span className="text-xs" style={{ color: "#64748b" }}>oder</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`mailto:${c.email}`}
              className="flex items-center justify-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
            >
              <Mail size={14} />
              {c.email}
            </a>
            <a
              href={c.phoneHref}
              className="flex items-center justify-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
            >
              <Phone size={14} />
              {c.phone}
            </a>
            <a
              href={`tel:${c.phone2?.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
            >
              <Phone size={14} />
              {c.phone2}
            </a>
          </div>
          <div className="reveal mt-10 flex justify-center" style={{ transitionDelay: "480ms" }}>
            <SocialLinks size={18} />
          </div>
        </div>
      </section>
    </>
  );
}
