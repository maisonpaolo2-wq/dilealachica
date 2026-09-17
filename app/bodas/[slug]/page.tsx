import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Lightbox } from "@/components/Lightbox";
import { weddings } from "@/content/data";

export function generateStaticParams() {
  return weddings.map((w) => ({ slug: w.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const w = weddings.find((x) => x.slug === slug);
  if (!w) return {};
  return { title: `${w.couple} / ${w.place}`, description: `Boda disenada y coordinada por Dile a la Chica. ${w.place}, ${w.year}.` };
}

const gallery = [
  { src: "/photos/p6.jpg", alt: "Momento intimo", ratio: "4/5" },
  { src: "/photos/p7.jpg", alt: "Celebracion", ratio: "1/1" },
  { src: "/photos/p5.jpg", alt: "Detalles", ratio: "1/1" },
  { src: "/photos/p1.jpg", alt: "Espacio", ratio: "4/5" },
  { src: "/photos/p11.jpg", alt: "Mesa y ambiente", ratio: "1/1" },
  { src: "/photos/p10.jpg", alt: "Fachada", ratio: "1/1" },
];

export default async function BodaDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = weddings.find((x) => x.slug === slug);
  if (!w) notFound();

  return (
    <main>
      <section style={{ position: "relative", height: "76vh", minHeight: 500, display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--ink)", padding: "0 clamp(20px,6vw,88px) clamp(48px,6vw,80px)" }}>
        <Image src={w.photo} alt={`${w.couple} / ${w.place}`} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,26,26,.88),rgba(26,26,26,.1) 60%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="sans" style={{ fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--coral-soft)", display: "block", marginBottom: 10, fontWeight: 500 }}>{w.place} &middot; {w.year}</span>
          <h1 className="serif" style={{ fontSize: "clamp(38px,6vw,82px)", fontWeight: 400, color: "#fff", lineHeight: 1.0, margin: 0, letterSpacing: ".5px" }}>{w.couple}</h1>
        </div>
      </section>

      <section style={{ background: "var(--cream)", padding: "clamp(64px,8vw,110px) clamp(20px,6vw,88px)", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow" style={{ display: "block", marginBottom: 16 }}>Su dia</span>
          <p className="serif" style={{ fontSize: "clamp(22px,2.6vw,32px)", fontWeight: 400, fontStyle: "italic", color: "var(--ink)", lineHeight: 1.5, margin: "0 0 20px" }}>Una celebracion disenada y coordinada de principio a fin en {w.place.toLowerCase()}.</p>
          <p className="sans" style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.85, margin: 0 }}>La historia completa y galeria se anadiran con permiso de la pareja.</p>
        </div>
      </section>

      <section style={{ background: "var(--cream-2)", padding: "0 clamp(20px,6vw,88px) clamp(64px,8vw,110px)" }}>
        <div className="wrap">
          <Lightbox items={gallery} style={{ gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,240px),1fr))" }} />
          <div style={{ marginTop: 44, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <Link href="/bodas" className="arrow">&larr; Todas las bodas</Link>
            <Link href="/contacto" className="btn btn-coral">Quiero la mia</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
