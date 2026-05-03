import { content } from "../content";

const c = content.footer;

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 text-center"
      style={{ backgroundColor: "#07101F", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="inline-flex flex-col items-center gap-2 mb-5">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-gm.png`}
          alt="GM Logo"
          width={48}
          height={48}
          style={{ objectFit: "contain", opacity: 0.92, filter: "drop-shadow(0 2px 8px rgba(201,168,76,0.25))" }}
        />
        <span
          className="text-base font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-playfair)", color: "#C9A84C", letterSpacing: "0.04em" }}
        >
          Gustav Mostetschnig
        </span>
      </div>
      <p className="text-xs mb-1" style={{ color: "#64748b" }}>
        © {new Date().getFullYear()} Gustav Mostetschnig. Alle Rechte vorbehalten.
        <span className="mx-2">·</span>
        <a href="/impressum" style={{ color: "#94a3b8" }} className="hover:underline">Impressum</a>
        <span className="mx-2">·</span>
        <a href="/datenschutz" style={{ color: "#94a3b8" }} className="hover:underline">Datenschutz</a>
      </p>
      <p className="text-[11px] mt-2 max-w-2xl mx-auto" style={{ color: "#475569" }}>{c.disclaimer}</p>
    </footer>
  );
}
