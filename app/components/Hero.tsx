"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useContent } from "../context/ContentContext";

function useCountUp(target: string, inView: boolean) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    if (isNaN(num)) { setDisplay(target); return; }
    const suffix = target.replace(/[\d]/g, "");
    const duration = 1200;
    const start = performance.now();
    const raf = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.floor(eased * num) + suffix);
      if (t < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, target]);
  return display;
}

type Particle = { id: number; left: string; size: number; duration: number; delay: number };

export default function Hero() {
  const content = useContent();
  const c = content.hero;
  const [parallax, setParallax] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate particles client-side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 10,
      }))
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const stat1 = useCountUp(c.stats[0].value, statsVisible);
  const stat2 = useCountUp(c.stats[1].value, statsVisible);
  const stat3 = useCountUp(c.stats[2].value, statsVisible);
  const statDisplays = [stat1, stat2, stat3];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A1628" }}
    >
      {/* Parallax grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `translateY(${parallax * 0.4}px)`,
          opacity: 0.8,
        }}
      />

      {/* Glow orb 1 */}
      <div
        className="hero-glow absolute rounded-full pointer-events-none"
        style={{
          top: "33%",
          left: "50%",
          width: "480px",
          height: "480px",
          background: "#C9A84C",
          filter: "blur(160px)",
          transform: `translate(-50%, calc(-50% + ${parallax * 0.3}px))`,
        }}
      />
      {/* Glow orb 2 */}
      <div
        className="hero-glow-2 absolute rounded-full pointer-events-none"
        style={{
          top: "70%",
          left: "20%",
          width: "380px",
          height: "380px",
          background: "#E8C96A",
          opacity: 0.06,
          filter: "blur(140px)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border"
          style={{
            borderColor: "rgba(201,168,76,0.3)",
            color: "#C9A84C",
            backgroundColor: "rgba(201,168,76,0.08)",
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          }}
        >
          <TrendingUp size={14} />
          {c.badge}
        </div>

        <h1
          className="font-bold mb-6"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(40px, 7vw, 80px)",
            lineHeight: 1.16,
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
          <br />
          {c.headline3}
        </h1>

        <p
          className="max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#94a3b8", fontSize: "clamp(16px, 1.8vw, 20px)" }}
        >
          {c.subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            className="btn-shimmer group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
            style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#E8C96A";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 14px 40px rgba(201,168,76,0.32)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#C9A84C";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            {c.buttonPrimary}
            <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border transition-all duration-200"
            style={{ borderColor: "rgba(201,168,76,0.4)", color: "#C9A84C", backgroundColor: "transparent" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
          >
            {c.buttonSecondary}
          </a>
        </div>

        {/* Stats with count-up */}
        <div ref={statsRef} className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {c.stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: "#C9A84C", fontFamily: "var(--font-playfair)" }}
              >
                {statDisplays[i]}
              </div>
              <div className="text-xs" style={{ color: "#64748b" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.4 }}
        aria-label="Weiter scrollen"
      >
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C)" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
      </a>
    </section>
  );
}
