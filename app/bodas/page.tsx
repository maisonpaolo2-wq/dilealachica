import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { weddings } from "@/content/data";

export const metadata: Metadata = {
  title: "Bodas",
  description: "Bodas reales disenadas y coordinadas por Dile a la Chica. Celebraciones autenticas con alma.",
};

export default function Bodas() {
  return (
    <main>
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--ink)", padding: "150px clamp(20px,6vw,88px) clamp(52px,6vw,88px)" }}>
        <div style={{ position: "absolute", inset: 0, animation: "slowZoom 26s ease-in-out infinite alternate" }}>
          <Image src="/photos/p7.jpg" alt="Bodas de Dile a la Chica" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,26,26,.88),rgba(26,26,26,.3))" }} />
        <div style={{ position: "absolute", inset: "clamp(14px,2vw,26px)", border: "1px solid rgba(240,184,168,.3)", pointerEvents: "none", zIndex: 2 }} />
        <div style={{ position: "relative", zIndex: 3, maxWidth: 760 }}>
          <span className="eyebrow" style={{ color: "var(--coral-soft)", display: "block", marginBottom: 16 }}>Portfolio</span>
          <h1 className="serif" style={{ fontSize: "clamp(40px,5.8vw,86px)", fontWeight: 400, color: "#fff", lineHeight: 1.06, margin: "0 0 16px", letterSpacing: ".5px" }}>Bodas con alma</h1>
          <p className="sans" style={{ fontSize: "clamp(15px,1.2vw,17px)", color: "rgba(255,255,255,.9)", lineHeight: 1.7, margin: 0, fontWeight: 300, maxWidth: 520 }}>Cada celebracion es unica. Aqui podeis ver algunas de las historias que he tenido el placer de acompanar.</p>
        </div>
      </section>

      <section style={{ background: "var(--cream)", padding: "clamp(64px,9vw,128px) clamp(20px,6vw,88px)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,340px),1fr))", gap: 24 }}>
            {weddings.map((w) => (
              <Link key={w.slug} href={`/bodas/${w.slug}`} className="zoomable" style={{ position: "relative", textDecoration: "none", display: "block", aspectRatio: "4/5" }}>
                <Image src={w.photo} alt={w.couple} fill sizes="(min-width:860px) 50vw, 100vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,26,26,.8),rgba(26,26,26,0) 50%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 32 }}>
                  <span className="sans" style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--coral-soft)", fontWeight: 500 }}>{w.place} &middot; {w.year}</span>
                  <h3 className="serif" style={{ fontSize: "clamp(24px,2.6vw,32px)", color: "#fff", margin: "6px 0 0", fontWeight: 400 }}>{w.couple}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--coral-bg)", padding: "clamp(56px,8vw,100px) clamp(20px,6vw,88px)", textAlign: "center" }}>
        <h2 className="serif" style={{ fontSize: "clamp(26px,3.4vw,44px)", fontWeight: 400, color: "var(--ink)", margin: "0 0 24px", fontStyle: "italic" }}>Quieres que tu boda este aqui?</h2>
        <Link href="/contacto" className="btn btn-coral">Hablemos</Link>
      </section>
    </main>
  );
}
