"use client";
import { useEffect, useRef, FormEvent } from "react";
import { useContent } from "../context/ContentContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: Props) {
  const email = useContent().cta.email;
  const firstInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    setTimeout(() => firstInput.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = f.get("name") as string;
    const tel = f.get("tel") as string;
    const date = f.get("date") as string;
    const time = f.get("time") as string;
    const msg = f.get("msg") as string;
    const subject = `Erstgespräch — Anfrage von ${name}`;
    const body = [
      `Hallo Herr Mostetschnig,`,
      ``,
      `ich möchte ein unverbindliches Erstgespräch vereinbaren.`,
      ``,
      `Name: ${name}`,
      tel ? `Telefon: ${tel}` : null,
      `Wunschtermin: ${date}${time ? ", " + time + " Uhr" : ""}`,
      msg ? `\nAnliegen:\n${msg}` : null,
      ``,
      `Beste Grüße,`,
      name,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!open) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(7,16,31,0.85)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl p-8 overflow-y-auto"
        style={{
          backgroundColor: "#0A1628",
          border: "1px solid rgba(201,168,76,0.3)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200"
          style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#94a3b8" }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; }}
          aria-label="Schließen"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-2" style={{ color: "#C9A84C", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
          ERSTGESPRÄCH
        </p>
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
          Termin anfragen.
        </h3>
        <p className="text-sm mb-6 leading-relaxed" style={{ color: "#64748b" }}>
          30 Minuten, unverbindlich. Die Anfrage wird über Ihr E-Mail-Programm gesendet.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium" style={{ color: "#64748b" }}>Name *</span>
            <input
              ref={firstInput}
              name="name"
              type="text"
              required
              placeholder="Vor- und Nachname"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
              style={{ backgroundColor: "#142038", border: "1px solid rgba(201,168,76,0.15)", color: "#fff" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium" style={{ color: "#64748b" }}>Telefon</span>
            <input
              name="tel"
              type="tel"
              placeholder="+43 …"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
              style={{ backgroundColor: "#142038", border: "1px solid rgba(201,168,76,0.15)", color: "#fff" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium" style={{ color: "#64748b" }}>Wunschdatum *</span>
              <input
                name="date"
                type="date"
                required
                min={today}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                style={{ backgroundColor: "#142038", border: "1px solid rgba(201,168,76,0.15)", color: "#fff", colorScheme: "dark" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium" style={{ color: "#64748b" }}>Uhrzeit</span>
              <input
                name="time"
                type="time"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                style={{ backgroundColor: "#142038", border: "1px solid rgba(201,168,76,0.15)", color: "#fff", colorScheme: "dark" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium" style={{ color: "#64748b" }}>Anliegen (optional)</span>
            <textarea
              name="msg"
              rows={3}
              placeholder="Kurze Beschreibung Ihrer Ausgangslage"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-colors duration-200"
              style={{ backgroundColor: "#142038", border: "1px solid rgba(201,168,76,0.15)", color: "#fff" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
            />
          </label>

          <button
            type="submit"
            className="btn-shimmer mt-2 inline-flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#E8C96A"; el.style.transform = "translateY(-1px)"; el.style.boxShadow = "0 10px 30px rgba(201,168,76,0.4)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#C9A84C"; el.style.transform = ""; el.style.boxShadow = "none"; }}
          >
            Anfrage senden
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <p className="text-center text-xs" style={{ color: "#475569" }}>
            Alternativ direkt:{" "}
            <a href={`mailto:${email}`} style={{ color: "#64748b" }} className="hover:underline">{email}</a>
          </p>
        </form>
      </div>
    </div>
  );
}
