import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Gustav Mostetschnig",
};

export default function DatenschutzPage() {
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
            Datenschutzerklärung.
          </h1>
          <p className="text-base mb-12 leading-relaxed" style={{ color: "#94a3b8" }}>
            Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst und behandeln diese vertraulich gemäß den gesetzlichen Datenschutzvorschriften (DSGVO, DSG, TKG).
          </p>

          <div className="flex flex-col gap-10">
            <Section title="1. Verantwortlicher">
              <p>Gustav Mostetschnig<br />Musterstraße 1, 1010 Wien, Österreich<br />
                E-Mail: <a href="mailto:kontakt@gustavmostetschnig.com" style={{ color: "#C9A84C" }}>kontakt@gustavmostetschnig.com</a><br />
                Telefon: <a href="tel:+43123456789" style={{ color: "#C9A84C" }}>+43 123 456 789</a>
              </p>
            </Section>

            <Section title="2. Erhebung und Speicherung personenbezogener Daten">
              <p className="mb-3">Beim Besuch dieser Website werden automatisch Informationen durch den Browser an den Server unseres Hosting-Providers gesendet und temporär in einem sogenannten Logfile gespeichert. Folgende Daten werden ohne Ihr Zutun erfasst:</p>
              <ul className="flex flex-col gap-1.5 mb-3 pl-4" style={{ listStyleType: "disc" }}>
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser sowie ggf. das Betriebssystem</li>
              </ul>
              <p>Die Verarbeitung erfolgt zur Gewährleistung eines reibungslosen Verbindungsaufbaus und zur Auswertung der Systemsicherheit. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
            </Section>

            <Section title="3. Kontaktaufnahme">
              <p>Bei Kontaktaufnahme per E-Mail oder Telefon werden die übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage gespeichert und verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
            </Section>

            <Section title="4. Weitergabe von Daten">
              <p>Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet nicht statt, es sei denn, Sie haben ausdrücklich eingewilligt (Art. 6 Abs. 1 lit. a DSGVO), eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO) oder dies zur Vertragserfüllung erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO).</p>
            </Section>

            <Section title="5. Cookies">
              <p>Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine Tracking- oder Marketing-Cookies eingesetzt. Die Speicherdauer ist auf die jeweilige Browser-Sitzung begrenzt.</p>
            </Section>

            <Section title="6. Eingebundene Schriftarten">
              <p>Diese Website nutzt Google Fonts zur einheitlichen Darstellung. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriften, wodurch Ihre IP-Adresse an Google übermittelt werden kann. Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Weitere Informationen:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>
                  policies.google.com/privacy
                </a>.
              </p>
            </Section>

            <Section title="7. Externe Links">
              <p>Diese Website enthält Verlinkungen auf Webseiten Dritter (z. B. wefi.co). Auf deren Inhalte und Datenverarbeitung haben wir keinen Einfluss. Es gelten die jeweiligen Datenschutzbestimmungen der verlinkten Seiten.</p>
            </Section>

            <Section title="8. Ihre Rechte">
              <p className="mb-3">Sie haben jederzeit das Recht:</p>
              <ul className="flex flex-col gap-1.5 mb-3 pl-4" style={{ listStyleType: "disc" }}>
                <li>auf <strong style={{ color: "#fff" }}>Auskunft</strong> über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>auf <strong style={{ color: "#fff" }}>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>auf <strong style={{ color: "#fff" }}>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
                <li>auf <strong style={{ color: "#fff" }}>Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
                <li>auf <strong style={{ color: "#fff" }}>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li>auf <strong style={{ color: "#fff" }}>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p>Zuständige Aufsichtsbehörde in Österreich: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien —{" "}
                <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>
                  www.dsb.gv.at
                </a>.
              </p>
            </Section>

            <Section title="9. Datensicherheit">
              <p>Diese Website verwendet SSL/TLS-Verschlüsselung in der jeweils höchsten unterstützten Stufe. Zusätzlich treffen wir geeignete technische und organisatorische Maßnahmen zum Schutz Ihrer Daten.</p>
            </Section>

            <Section title="10. Aktualität dieser Datenschutzerklärung">
              <p>Aufgrund der Weiterentwicklung unseres Angebots oder geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Fassung kann jederzeit auf dieser Seite abgerufen werden.</p>
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
        <Link href="/impressum" style={{ color: "#64748b" }}>Impressum</Link>
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
