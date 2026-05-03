"use client";
import { useState, useEffect } from "react";
import { useContentEditor, getNestedValue } from "../context/ContentContext";
import { content as defaultContent } from "../content";

// Field definitions: [label, path, multiline?]
const FIELDS: Array<{ section: string; fields: Array<[string, string, boolean?]> }> = [
  {
    section: "Hero",
    fields: [
      ["Badge", "hero.badge"],
      ["Zeile 1", "hero.headline1"],
      ["Zeile 2 (Gold)", "hero.headline2"],
      ["Zeile 3", "hero.headline3"],
      ["Untertitel", "hero.subtext", true],
      ["Button 1", "hero.buttonPrimary"],
      ["Button 2", "hero.buttonSecondary"],
      ["Stat 1 Wert", "hero.stats.0.value"],
      ["Stat 1 Label", "hero.stats.0.label"],
      ["Stat 2 Wert", "hero.stats.1.value"],
      ["Stat 2 Label", "hero.stats.1.label"],
      ["Stat 3 Wert", "hero.stats.2.value"],
      ["Stat 3 Label", "hero.stats.2.label"],
    ],
  },
  {
    section: "Profil (Über mich)",
    fields: [
      ["Überschrift 1", "about.headline1"],
      ["Überschrift 2 (Gold)", "about.headline2"],
      ["Absatz 1", "about.text1", true],
      ["Absatz 2", "about.text2", true],
      ["Punkt 1", "about.highlights.0"],
      ["Punkt 2", "about.highlights.1"],
      ["Punkt 3", "about.highlights.2"],
      ["Punkt 4", "about.highlights.3"],
    ],
  },
  {
    section: "Methodik",
    fields: [
      ["Überschrift", "process.headline"],
      ["Untertitel", "process.subtext", true],
      ["Phase 1 Titel", "process.steps.0.title"],
      ["Phase 1 Text", "process.steps.0.description", true],
      ["Phase 2 Titel", "process.steps.1.title"],
      ["Phase 2 Text", "process.steps.1.description", true],
      ["Phase 3 Titel", "process.steps.2.title"],
      ["Phase 3 Text", "process.steps.2.description", true],
    ],
  },
  {
    section: "Partner-System",
    fields: [
      ["Überschrift 1", "wefi.headline1"],
      ["Überschrift 2 (Gold)", "wefi.headline2"],
      ["Text", "wefi.text", true],
      ["Feature 1", "wefi.features.0"],
      ["Feature 2", "wefi.features.1"],
      ["Feature 3", "wefi.features.2"],
      ["Feature 4", "wefi.features.3"],
      ["Karte: Zeile 1 Label", "wefi.card.rows.0.label"],
      ["Karte: Zeile 1 Wert", "wefi.card.rows.0.value"],
      ["Karte: Zeile 2 Label", "wefi.card.rows.1.label"],
      ["Karte: Zeile 2 Wert", "wefi.card.rows.1.value"],
      ["Karte: Zeile 3 Label", "wefi.card.rows.2.label"],
      ["Karte: Zeile 3 Wert", "wefi.card.rows.2.value"],
      ["Disclaimer", "wefi.card.disclaimer", true],
    ],
  },
  {
    section: "Referenzen",
    fields: [
      ["Referenz 1 Text", "testimonials.items.0.quote", true],
      ["Referenz 1 Name", "testimonials.items.0.name"],
      ["Referenz 1 Rolle", "testimonials.items.0.role"],
      ["Referenz 2 Text", "testimonials.items.1.quote", true],
      ["Referenz 2 Name", "testimonials.items.1.name"],
      ["Referenz 2 Rolle", "testimonials.items.1.role"],
      ["Referenz 3 Text", "testimonials.items.2.quote", true],
      ["Referenz 3 Name", "testimonials.items.2.name"],
      ["Referenz 3 Rolle", "testimonials.items.2.role"],
    ],
  },
  {
    section: "FAQ",
    fields: [
      ["Frage 1", "faq.items.0.question"],
      ["Antwort 1", "faq.items.0.answer", true],
      ["Frage 2", "faq.items.1.question"],
      ["Antwort 2", "faq.items.1.answer", true],
      ["Frage 3", "faq.items.2.question"],
      ["Antwort 3", "faq.items.2.answer", true],
      ["Frage 4", "faq.items.3.question"],
      ["Antwort 4", "faq.items.3.answer", true],
      ["Frage 5", "faq.items.4.question"],
      ["Antwort 5", "faq.items.4.answer", true],
    ],
  },
  {
    section: "Kontakt / CTA",
    fields: [
      ["Überschrift 1", "cta.headline1"],
      ["Überschrift 2 (Gold)", "cta.headline2"],
      ["Untertitel", "cta.subtext", true],
      ["Button Text", "cta.buttonPrimary"],
      ["E-Mail", "cta.email"],
      ["Telefon", "cta.phone"],
      ["Telefon Href", "cta.phoneHref"],
    ],
  },
];

function getVal(content: typeof defaultContent, path: string): string {
  const val = getNestedValue(content, path);
  return typeof val === "string" ? val : "";
}

export default function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { content, updateField, reset, exportContent } = useContentEditor();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "e") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const section = FIELDS[activeSection];

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[90] flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold shadow-lg transition-all duration-200"
        style={{
          backgroundColor: open ? "#142038" : "#C9A84C",
          color: open ? "#C9A84C" : "#0A1628",
          border: open ? "1px solid rgba(201,168,76,0.4)" : "none",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}
        title="Bearbeiten (Ctrl+E)"
      >
        {open ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            Schließen
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Bearbeiten
          </>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed top-0 right-0 bottom-0 z-[89] flex flex-col"
          style={{
            width: "360px",
            backgroundColor: "#07101F",
            borderLeft: "1px solid rgba(201,168,76,0.2)",
            boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "ui-monospace, monospace" }}>
                Inhalte bearbeiten
              </div>
              <div className="text-[11px] mt-0.5" style={{ color: "#475569" }}>Änderungen speichern sich automatisch</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={exportContent}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
                style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}
                title="Änderungen als JSON herunterladen"
              >
                Export
              </button>
              {showResetConfirm ? (
                <button
                  onClick={() => { reset(); setShowResetConfirm(false); }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#f87171", border: "1px solid rgba(239,68,68,0.3)" }}
                >
                  Bestätigen
                </button>
              ) : (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "#64748b", border: "1px solid rgba(255,255,255,0.06)" }}
                  title="Alle Änderungen zurücksetzen"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Section tabs */}
          <div className="flex gap-1 px-3 py-2 overflow-x-auto" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
            {FIELDS.map((s, i) => (
              <button
                key={s.section}
                onClick={() => setActiveSection(i)}
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-150"
                style={{
                  backgroundColor: activeSection === i ? "rgba(201,168,76,0.15)" : "transparent",
                  color: activeSection === i ? "#C9A84C" : "#64748b",
                  border: activeSection === i ? "1px solid rgba(201,168,76,0.3)" : "1px solid transparent",
                }}
              >
                {s.section.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Fields */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
            <div className="text-xs font-semibold mb-1" style={{ color: "#64748b" }}>{section.section}</div>
            {section.fields.map(([label, path, multi]) => {
              const val = getVal(content, path);
              return (
                <label key={path} className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-medium" style={{ color: "#64748b", fontFamily: "ui-monospace, monospace" }}>
                    {label}
                  </span>
                  {multi ? (
                    <textarea
                      rows={3}
                      value={val}
                      onChange={(e) => updateField(path, e.target.value)}
                      className="w-full rounded-xl px-3 py-2.5 text-xs leading-relaxed resize-none outline-none transition-colors duration-150"
                      style={{
                        backgroundColor: "#0A1628",
                        border: "1px solid rgba(201,168,76,0.12)",
                        color: "#e2e8f0",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"; }}
                    />
                  ) : (
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => updateField(path, e.target.value)}
                      className="w-full rounded-xl px-3 py-2.5 text-xs outline-none transition-colors duration-150"
                      style={{
                        backgroundColor: "#0A1628",
                        border: "1px solid rgba(201,168,76,0.12)",
                        color: "#e2e8f0",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"; }}
                    />
                  )}
                </label>
              );
            })}
          </div>

          {/* Footer hint */}
          <div className="px-4 py-3 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[11px]" style={{ color: "#334155" }}>
              Änderungen speichern sich lokal im Browser.<br />
              <span style={{ color: "#475569" }}>&ldquo;Export&rdquo; &rarr; in GitHub hochladen &rarr; auto-deploy.</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
