import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mi",
  description: "Soy Anna Alvarez, event & wedding planner en Barcelona y Catalunya. Acompano a parejas en uno de los momentos mas bonitos de su vida.",
};

const valores = [
  { t: "Acompanamiento real", b: "Trabajo con pocas parejas al ano para poder estar de verdad en cada proyecto, no a medio gas." },
  { t: "Autenticidad", b: "No hago bodas de Pinterest. Cada celebracion nace de lo que sois, de lo que os emociona, de vuestra historia." },
  { t: "Calma e intencion", b: "Mi trabajo es que disfruteis del proceso. Que planear vuestra boda sea tan bonito como vivirla." },
];

export default function SobreMi() {
  return (
    <main>
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--ink)", padding: "150px clamp(20px,6vw,88px) clamp(52px,6vw,88px)" }}>
        <div style={{ position: "absolute", inset: 0, animation: "slowZoom 26s ease-in-out infinite alternate" }}>
          <Image src="/photos/p11.jpg" alt="Dile a la Chica" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,26,26,.88),rgba(26,26,26,.3))" }} />
        <div style={{ position: "absolute", inset: "clamp(14px,2vw,26px)", border: "1px solid rgba(240,184,168,.3)", pointerEvents: "none", zIndex: 2 }} />
        <div style={{ position: "relative", zIndex: 3, maxWidth: 760 }}>
          <span className="eyebrow" style={{ color: "var(--coral-soft)", display: "block", marginBottom: 16 }}>Hola, soy Anna</span>
          <h1 className="serif" style={{ fontSize: "clamp(38px,5.4vw,80px)", fontWeight: 400, color: "#fff", lineHeight: 1.06, margin: 0, letterSpacing: ".5px" }}>La persona detras<br />de vuestra tranquilidad</h1>
        </div>
      </section>

      <section style={{ background: "var(--cream)", padding: "clamp(64px,9vw,128px) clamp(20px,6vw,88px)" }}>
        <div className="wrap g-two">
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -16, left: -16, width: 120, height: 120, borderTop: "1px solid var(--coral)", borderLeft: "1px solid var(--coral)", zIndex: 0 }} />
            <div style={{ position: "absolute", bottom: -16, right: -16, width: 120, height: 120, borderBottom: "1px solid var(--coral)", borderRight: "1px solid var(--coral)", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1, aspectRatio: "4/5", overflow: "hidden" }}>
              <Image src="/photos/p8.jpg" alt="Anna Alvarez, wedding planner" fill sizes="(min-width:860px) 40vw, 100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </div>
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: 18 }}>Encantada</span>
            <h2 className="serif" style={{ fontSize: "clamp(28px,3.4vw,44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.25, margin: "0 0 22px" }}>Creo en las bodas que se sienten, no solo las que se ven</h2>
            <p className="sans" style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.85, margin: "0 0 18px" }}>Soy Anna Alvarez, event & wedding planner en Barcelona y Catalunya. Lo que mas me apasiona es acompanar a parejas en uno de los momentos mas importantes de su vida, cuidando cada detalle con intencion.</p>
            <p className="sans" style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.85, margin: "0 0 18px" }}>No busco bodas perfectas de revista. Busco celebraciones autenticas donde cada elemento cuente vuestra historia. Donde al entrar digais: esto somos nosotros.</p>
            <p className="sans" style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.85, margin: 0 }}>DLC es para ti si quieres que alguien cuide tu viaje emocional, no solo la logistica. Si buscas celebrar con alma, con calma y con intencion.</p>
            <p className="script" style={{ fontSize: 30, color: "var(--coral)", margin: "26px 0 0" }}>Anna</p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-2)", padding: "clamp(56px,8vw,110px) clamp(20px,6vw,88px)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>Mi forma de trabajar</span>
            <h2 className="serif" style={{ fontSize: "clamp(28px,3.6vw,46px)", fontWeight: 400, color: "var(--ink)", margin: 0 }}>Tres cosas que no negocio</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: 0, borderTop: "1px solid var(--line)" }}>
            {valores.map((v, i) => (
              <div key={v.t} style={{ padding: "32px 30px", borderRight: i < valores.length - 1 ? "1px solid var(--line)" : undefined }}>
                <span className="serif" style={{ fontSize: 30, fontStyle: "italic", color: "var(--coral)", display: "block", marginBottom: 14 }}>{`0${i + 1}`}</span>
                <h3 className="serif" style={{ fontSize: 23, fontWeight: 400, color: "var(--ink)", margin: "0 0 10px" }}>{v.t}</h3>
                <p className="sans" style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.7, margin: 0 }}>{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--coral-bg)", padding: "clamp(64px,8vw,120px) clamp(20px,6vw,88px)", textAlign: "center" }}>
        <h2 className="serif" style={{ fontSize: "clamp(28px,3.6vw,48px)", fontWeight: 400, color: "var(--ink)", margin: "0 0 26px", fontStyle: "italic" }}>Yo gestiono el caos, vosotros levantais la copa.</h2>
        <Link href="/contacto" className="btn btn-coral">Reserva tu fecha</Link>
      </section>
    </main>
  );
}
