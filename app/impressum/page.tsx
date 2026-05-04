import type { Metadata } from "next";
import Link from "next/link";
import { content } from "../content";

export const metadata: Metadata = {
  title: "Impressum — Gustav Mostetschnig",
};

export default function ImpressumPage() {
  const l = content.legal;
  return (
    <div style={{ backgroundColor: "#0A1628", minHeight: "100vh", color: "#fff" }}>
      {/* Nav */}
      <header
        className="sticky top-0 z-50 px-6 py-4"
        style={{ backgroundColor: "rgba(10,22,40,0.95)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-gm.png`}
              alt="GM"
              width={32}
              height={32}
              style={{ objectFit: "contain", filter: "drop-shadow(0 2px 6px rgba(201,168,76,0.25))" }}
            />
            <span style={{ fontFamily: "var(--font-playfair)", color: "#fff", fontSize: "14px", fontWeight: 600 }}>
              Gustav Mostetschnig
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: "#64748b" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
            style={{ color: "#C9A84C", fontFamily: "ui-monospace, monospace" }}
          >
            RECHTLICHES
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.012em" }}
          >
            Impressum.
          </h1>
          <p className="text-base mb-12 leading-relaxed" style={{ color: "#94a3b8" }}>
            Angaben gemäß § 5 ECG (Österreich) sowie § 5 TMG (Deutschland) und § 25 MedienG.
          </p>

          <div className="flex flex-col gap-10">
            <Section title="Diensteanbieter">
              <p>{l.name}<br />{l.address}<br />{l.city}</p>
            </Section>

            <Section title="Kontakt">
              <dl className="flex flex-col gap-2">
                <Row label="E-Mail"><a href={`mailto:${l.email}`} style={{ color: "#C9A84C" }}>{l.email}</a></Row>
                <Row label="Telefon"><a href={l.phoneHref} style={{ color: "#C9A84C" }}>{l.phone}</a></Row>
              </dl>
            </Section>

            <Section title="Unternehmensdaten">
              <dl className="flex flex-col gap-2">
                <Row label="Unternehmensgegenstand">{l.businessPurpose}</Row>
                <Row label="Berufsbezeichnung">{l.profession}</Row>
                <Row label="UID-Nummer">{l.uid}</Row>
                <Row label="Mitgliedschaften">{l.chamber}</Row>
                <Row label="Aufsichtsbehörde">{l.authority}</Row>
              </dl>
            </Section>

            <Section title="Verantwortlich für den Inhalt">
              <p>Gustav Mostetschnig (Anschrift wie oben)</p>
            </Section>

            <Section title="Haftungsausschluss">
              <p className="mb-3">Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Die Nutzung der Inhalte erfolgt auf eigene Gefahr.</p>
              <p>Diese Website stellt keine Anlage-, Steuer- oder Rechtsberatung dar. Wirtschaftliche Erfolge im Bereich Network-Marketing hängen maßgeblich vom individuellen Einsatz, den persönlichen Fähigkeiten und der Marktentwicklung ab. Es werden keine Einkommen, Erträge oder Gewinne zugesichert.</p>
            </Section>

            <Section title="Urheberrecht">
              <p>Sämtliche auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken, Logo) unterliegen dem Urheberrecht. Eine Vervielfältigung, Verbreitung oder sonstige Nutzung bedarf der vorherigen schriftlichen Zustimmung des Rechteinhabers.</p>
            </Section>

            <Section title="Online-Streitbeilegung">
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>
                  ec.europa.eu/consumers/odr
                </a>{" "}
                erreichen. Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Section>
          </div>

          <p className="mt-12 text-xs" style={{ color: "#475569" }}>Stand: April 2026</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-xs" style={{ color: "#475569", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        © {new Date().getFullYear()} Gustav Mostetschnig
        <span className="mx-2">·</span>
        <Link href="/" style={{ color: "#64748b" }}>Startseite</Link>
        <span className="mx-2">·</span>
        <Link href="/datenschutz" style={{ color: "#64748b" }}>Datenschutz</Link>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="text-lg font-semibold mb-3 pb-3"
        style={{ fontFamily: "var(--font-playfair)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
      >
        {title}
      </h2>
      <div className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
        {children}
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <dt className="flex-shrink-0 w-44 font-medium" style={{ color: "#64748b" }}>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
