import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/content/data";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-cormorant", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-dm-sans", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dile a la Chica | Event & Wedding Planner",
    template: "%s | Dile a la Chica",
  },
  description:
    "Dile a la Chica. Planificacion, diseno y coordinacion de bodas con alma. Anna Alvarez, Event & Wedding Planner en Barcelona y Catalunya.",
  keywords: [
    "wedding planner Barcelona",
    "wedding planner Catalunya",
    "organizacion de bodas",
    "planificacion de bodas",
    "coordinacion de bodas",
    "bodas con alma",
    "Dile a la Chica",
    "Anna Alvarez wedding planner",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site.url,
    siteName: site.fullName,
    title: "Dile a la Chica | Event & Wedding Planner",
    description: "Planificacion, diseno y coordinacion de bodas con alma en Barcelona y Catalunya.",
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventPlanning"],
  name: "Dile a la Chica",
  description: "Planificacion, diseno y coordinacion de bodas con alma en Barcelona y Catalunya.",
  url: site.url,
  email: site.email,
  areaServed: { "@type": "Place", name: "Barcelona, Catalunya, Espana" },
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${dmSans.variable} ${caveat.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
