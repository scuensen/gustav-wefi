"use client";
import { useRef } from "react";
import { content } from "../content";

const c = content.process;

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: "transform 0.4s cubic-bezier(0.2,0.7,0.2,1), border-color 0.3s, box-shadow 0.3s", transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-24 px-6" style={{ backgroundColor: "#07101F" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal">
            <p className="eyebrow-draw mb-4 text-xs font-semibold tracking-[0.18em] uppercase inline-block"
              style={{ color: "#C9A84C", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
              {c.eyebrow}
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <h2 className="font-bold" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.012em" }}>
              {c.headline}
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: "160ms" }}>
            <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed" style={{ color: "#64748b" }}>{c.subtext}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {c.steps.map((step, i) => (
            <div key={step.number} className="reveal card-shimmer-wrap" style={{ transitionDelay: `${i * 120}ms` }}>
              <TiltCard
                className="p-8 rounded-2xl h-full"
                style={{ backgroundColor: "#142038", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <div className="card-shimmer" aria-hidden="true" />
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-xl font-bold mb-6"
                  style={{ backgroundColor: "rgba(201,168,76,0.08)", color: "#C9A84C", fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#fff" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{step.description}</p>
                <div className="mt-6 h-0.5 w-12 rounded-full" style={{ backgroundColor: "rgba(201,168,76,0.3)" }} />
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
