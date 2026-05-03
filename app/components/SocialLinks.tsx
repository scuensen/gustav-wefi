"use client";
import { useContent } from "../context/ContentContext";

const ICONS: Record<string, (size: number) => React.ReactNode> = {
  instagram: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  facebook: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  telegram: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 4.5L2.5 11.5l6 2 2 6 3-4 5 4z"/>
      <path d="M8.5 13.5l9-6"/>
    </svg>
  ),
};

interface Props {
  size?: number;
  className?: string;
}

export default function SocialLinks({ size = 18, className = "" }: Props) {
  const socials = useContent().cta.socials ?? [];

  if (!socials.length) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => {
        const Icon = ICONS[s.icon];
        return (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex items-center justify-center rounded-full transition-all duration-200"
            style={{
              width: size + 16,
              height: size + 16,
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.2)",
              color: "#C9A84C",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "rgba(201,168,76,0.16)"; el.style.borderColor = "#C9A84C"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "rgba(201,168,76,0.08)"; el.style.borderColor = "rgba(201,168,76,0.2)"; el.style.transform = ""; }}
          >
            {Icon ? Icon(size) : null}
          </a>
        );
      })}
    </div>
  );
}
