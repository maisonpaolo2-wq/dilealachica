import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { services, process, site } from "@/content/data";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Planificacion completa, diseno con alma, coordinacion del dia y bodas destino. Elige como quieres que te acompane Dile a la Chica.",
};

export default function Servicios() {
  return (
    <main>
      <section style={{ position: "relative", minHeight: "62vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--ink)", padding: "150px clamp(20px,6vw,88px) clamp(52px,6vw,88px)" }}>
        <div style={{ position: "absolute", inset: 0, animation: "slowZoom 26s ease-in-out infinite alternate" }}>
          <Image src="/photos/p11.jpg" alt="Servicios de Dile a la Chica" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,26,26,.88),rgba(26,26,26,.3))" }} />
        <div style={{ position: "absolute", inset: "clamp(14px,2vw,26px)", border: "1px solid rgba(240,184,168,.3)", pointerEvents: "none", zIndex: 2 }} />
        <div style={{ position: "relative", zIndex: 3, maxWidth: 760 }}>
          <span className="eyebrow" style={{ color: "var(--coral-soft)", display: "block", marginBottom: 16 }}>Lo que hago</span>
          <h1 className="serif" style={{ fontSize: "clamp(40px,5.8vw,86px)", fontWeight: 400, color: "#fff", lineHeight: 1.06, margin: "0 0 20px", letterSpacing: ".5px" }}>Servicios</h1>
          <p className="sans" style={{ fontSize: "clamp(15px,1.2vw,17px)", color: "rgba(255,255,255,.9)", lineHeight: 1.7, margin: 0, fontWeight: 300, maxWidth: 520 }}>Decidid cuanto quereis delegar. Desde la planificacion completa hasta la coordinacion del dia, siempre con el mismo cuidado y la misma intencion.</p>
        </div>
      </section>

      {services.map((s, idx) => {
        const imgFirst = idx % 2 === 0;
        const img = (
          <div key="i" className="g-split-img zoomable" style={{ position: "relative", minHeight: 480, order: imgFirst ? 1 : 2 }}>
            <Image src={s.photo} alt={s.title} fill sizes="(min-width:860px) 50vw, 100vw" style={{ objectFit: "cover" }} />
          </div>
        );
        const copy = (
          <div key="c" style={{ padding: "clamp(48px,6vw,88px) clamp(28px,5vw,72px)", display: "flex", flexDirection: "column", justifyContent: "center", order: imgFirst ? 2 : 1 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
              <span className="serif" style={{ fontSize: 30, color: "var(--coral)", fontStyle: "italic", lineHeight: 1 }}>{s.n}</span>
              <span className="eyebrow" style={{ fontSize: 11 }}>{s.tag}</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(28px,3.2vw,44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.15, margin: "0 0 16px" }}>{s.title}</h2>
            <p className="sans" style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.85, margin: "0 0 24px" }}>{s.detail}</p>
            <p className="eyebrow" style={{ fontSize: 11, color: "var(--coral)", margin: "0 0 12px" }}>Que incluye</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {s.includes.map((it) => (
                <li key={it} className="sans" style={{ fontSize: 14.5, color: "var(--ink)", padding: "10px 0", borderTop: "1px solid var(--line)", display: "flex", gap: 12 }}>
                  <span style={{ color: "var(--coral)" }} aria-hidden>&bull;</span>{it}
                </li>
              ))}
            </ul>
            <Link href={`/servicios?servicio=${encodeURIComponent(s.title)}#contacto-form`} className="btn btn-coral" style={{ marginTop: 26, alignSelf: "flex-start" }}>Me interesa</Link>
          </div>
        );
        return (
          <section key={s.n} className="g-split" style={{ background: idx % 2 ? "var(--cream-2)" : "var(--cream)" }}>
            {imgFirst ? [img, copy] : [copy, img]}
          </section>
        );
      })}

      <section style={{ background: "var(--ink)", padding: "clamp(64px,8vw,110px) clamp(20px,6vw,88px)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="eyebrow" style={{ color: "var(--coral-soft)", display: "block", marginBottom: 14 }}>Paso a paso</span>
            <h2 className="serif" style={{ fontSize: "clamp(28px,3.6vw,46px)", fontWeight: 400, color: "#fff", margin: 0 }}>Asi es trabajar conmigo</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 0, borderTop: "1px solid var(--line-on-dark)" }}>
            {process.map((p, i) => (
              <div key={p.n} style={{ padding: "30px 24px", borderRight: i < process.length - 1 ? "1px solid var(--line-on-dark)" : undefined }}>
                <span className="serif" style={{ fontSize: 30, fontStyle: "italic", color: "var(--coral-soft)", display: "block", marginBottom: 12 }}>{p.n}</span>
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, color: "#fff", margin: "0 0 8px" }}>{p.title}</h3>
                <p className="sans" style={{ fontSize: 13, color: "var(--on-dark-soft)", lineHeight: 1.65, margin: 0, fontWeight: 300 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto-form" style={{ background: "#222", padding: "clamp(64px,8vw,120px) clamp(20px,6vw,88px)", scrollMarginTop: 80 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow" style={{ color: "var(--coral-soft)", display: "block", marginBottom: 14 }}>Hablemos</span>
            <h2 className="serif" style={{ fontSize: "clamp(28px,3.6vw,46px)", fontWeight: 400, color: "#fff", margin: "0 0 12px" }}>Reserva tu fecha</h2>
            <p className="sans" style={{ fontSize: 14.5, color: "var(--on-dark-soft)", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>Elegid el servicio arriba y queda seleccionado aqui. Os respondo personalmente.</p>
          </div>
          <Suspense fallback={null}><ContactForm /></Suspense>
          <p className="sans" style={{ textAlign: "center", marginTop: 28, fontSize: 13, color: "var(--on-dark-soft)" }}>
            <a href={`mailto:${site.email}`} style={{ color: "#fff" }}>{site.email}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
