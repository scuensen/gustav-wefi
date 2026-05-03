"use client";
import { Globe, Shield, BarChart3, Users } from "lucide-react";
import { useContent } from "../context/ContentContext";

const featureIcons = [Globe, Shield, BarChart3, Users];

export default function WefiSection() {
  const c = useContent().wefi;
  return (
    <section id="wefi" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "#C9A84C" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest mb-4" style={{ color: "#C9A84C" }}>{c.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              {c.headline1}{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {c.headline2}
              </span>
            </h2>
            <p className="text-base mb-6 leading-relaxed" style={{ color: "#94a3b8" }}>{c.text}</p>
            <ul className="space-y-4 mb-8">
              {c.features.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                      <Icon size={16} style={{ color: "#C9A84C" }} />
                    </div>
                    <span className="text-sm" style={{ color: "#94a3b8" }}>{f}</span>
                  </li>
                );
              })}
            </ul>
            <a
              href={c.buttonHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
              style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#E8C96A"; el.style.boxShadow = "0 8px 30px rgba(201,168,76,0.35)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#C9A84C"; el.style.boxShadow = "none"; }}
            >
              {c.button}
            </a>
          </div>

          <div className="relative">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "#142038", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-gm.png`} alt="GM" style={{ width: "70%", height: "70%", objectFit: "contain", filter: "drop-shadow(0 4px 10px rgba(201,168,76,0.3))" }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#C9A84C" }}>{c.card.title}</h3>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>{c.card.subtitle}</p>
              </div>
              <div className="space-y-4">
                {c.card.rows.map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <span className="text-sm" style={{ color: "#64748b" }}>{row.label}</span>
                    <span className="text-sm font-semibold" style={{ color: "#C9A84C" }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl text-center text-xs leading-relaxed" style={{ backgroundColor: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)", color: "#64748b" }}>
                {c.card.disclaimer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
