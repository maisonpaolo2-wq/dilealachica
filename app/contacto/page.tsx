import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbeme y te respondo personalmente. Empezamos con una conversación tranquila, sin compromiso, para conocernos y ver cómo puedo acompañaros.",
};

export default function Contacto() {
  return (
    <main>
      <section className="g-split" style={{ minHeight: "100vh", background: "var(--ink)" }}>
        <div className="g-split-img" style={{ position: "relative", minHeight: 360, order: 1 }}>
          <Image src="/photos/p10.jpg" alt="Dile a la Chica" fill priority sizes="(min-width:860px) 50vw, 100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div style={{ order: 2, padding: "clamp(96px,10vw,140px) clamp(24px,5vw,72px) clamp(56px,7vw,88px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span className="eyebrow" style={{ color: "var(--coral-soft)", display: "block", marginBottom: 16 }}>Contacto</span>
          <h1 className="serif" style={{ fontSize: "clamp(30px,3.8vw,52px)", fontWeight: 400, color: "#fff", lineHeight: 1.15, margin: "0 0 18px" }}>¿Tenéis fecha? Hablemos</h1>
          <p className="sans" style={{ fontSize: 15, color: "var(--on-dark-soft)", lineHeight: 1.8, margin: "0 0 34px", fontWeight: 300, maxWidth: "48ch" }}>Escríbeme y te respondo personalmente. Sin compromiso, empezamos con una conversación para conocernos.</p>
          <Suspense fallback={null}><ContactForm /></Suspense>
          <div style={{ marginTop: 34, paddingTop: 24, borderTop: "1px solid var(--line-on-dark)", display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
            <a href={`mailto:${site.email}`} className="sans" style={{ fontSize: 13, color: "#fff", fontWeight: 300 }}>{site.email}</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="sans" style={{ fontSize: 13, color: "#fff", fontWeight: 300 }}>{site.instagramHandle}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
