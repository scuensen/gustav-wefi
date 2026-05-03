import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ContentProvider } from "./context/ContentContext";
import TweaksPanel from "./components/TweaksPanel";
import LangSync from "./components/LangSync";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustav Mostetschnig – Mentor für strukturierten Vermögensaufbau",
  description:
    "Gustav Mostetschnig begleitet Berufstätige im DACH-Raum beim methodischen Aufbau eines unternehmerischen Zweitstandbeins – mit klaren Prozessen und persönlicher Begleitung.",
  openGraph: {
    title: "Gustav Mostetschnig – Mentor für strukturierten Vermögensaufbau",
    description:
      "Strukturierter Aufbau eines zweiten Einkommensstandbeins im DACH-Raum. 12+ Jahre Praxiserfahrung, 500+ begleitete Partner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" style={{ backgroundColor: "#0A1628", color: "#fff" }}>
        <ContentProvider>
          <LangSync />
          {children}
          <TweaksPanel />
        </ContentProvider>
      </body>
    </html>
  );
}
