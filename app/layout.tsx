import type { Metadata } from "next";
import { Playfair_Display, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/content/data";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-outfit", display: "swap" });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dancing", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dile a la Chica | Event & Wedding Planner",
    template: "%s | Dile a la Chica",
  },
  description:
    "Dile a la Chica. Planificación, diseño y coordinación de bodas con alma. Anna Álvarez, Event & Wedding Planner en Barcelona y Catalunya.",
  keywords: [
    "wedding planner Barcelona",
    "wedding planner Catalunya",
    "organización de bodas",
    "planificación de bodas",
    "coordinación de bodas",
    "bodas con alma",
    "Dile a la Chica",
    "Anna Álvarez wedding planner",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site.url,
    siteName: site.fullName,
    title: "Dile a la Chica | Event & Wedding Planner",
    description: "Planificación, diseño y coordinación de bodas con alma en Barcelona y Catalunya.",
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventPlanning"],
  name: "Dile a la Chica",
  description: "Planificación, diseño y coordinación de bodas con alma en Barcelona y Catalunya.",
  url: site.url,
  email: site.email,
  areaServed: { "@type": "Place", name: "Barcelona, Catalunya, Espana" },
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${outfit.variable} ${dancing.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
