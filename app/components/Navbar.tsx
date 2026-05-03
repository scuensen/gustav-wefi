"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { content } from "../content";

const links = content.nav.links;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10,22,40,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.18)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-[18px] flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="inline-flex items-center gap-3 flex-shrink-0">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-gm.png`}
            alt="GM Logo"
            width={38}
            height={38}
            className="logo-shimmer"
            style={{ objectFit: "contain", filter: "drop-shadow(0 2px 6px rgba(201,168,76,0.25))" }}
          />
          <span
            className="hidden lg:inline text-[15px] font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-playfair)", color: "#fff", letterSpacing: "0.02em" }}
          >
            Gustav Mostetschnig
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13.5px] font-medium transition-colors duration-200 relative group"
                style={{ color: "#94a3b8" }}
              >
                <span
                  className="transition-colors duration-200 group-hover:text-[#C9A84C]"
                  style={{ color: "inherit" }}
                  onMouseEnter={(e) => ((e.currentTarget.parentElement as HTMLElement).style.color = "#C9A84C")}
                  onMouseLeave={(e) => ((e.currentTarget.parentElement as HTMLElement).style.color = "#94a3b8")}
                >
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* wefi.co external link */}
          <a
            href="https://www.wefi.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#C9A84C",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "rgba(201,168,76,0.08)"; el.style.borderColor = "#C9A84C"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "transparent"; el.style.borderColor = "rgba(201,168,76,0.4)"; }}
          >
            wefi.co
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7"/><path d="M8 7h9v9"/>
            </svg>
          </a>
          {/* Main CTA */}
          <a
            href="#cta"
            className="btn-shimmer inline-flex items-center gap-2 px-[18px] py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200"
            style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#E8C96A"; el.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#C9A84C"; el.style.transform = "translateY(0)"; }}
          >
            {content.nav.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4" style={{ backgroundColor: "rgba(10,22,40,0.98)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium" style={{ color: "#94a3b8" }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://www.wefi.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "#C9A84C" }}
            onClick={() => setOpen(false)}
          >
            wefi.co
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7"/><path d="M8 7h9v9"/>
            </svg>
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold mt-2"
            style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
            onClick={() => setOpen(false)}
          >
            {content.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
