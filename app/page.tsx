import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { services, process, weddings, site } from "@/content/data";

export default function Home() {
  const igTiles = ["/photos/p1.jpg", "/photos/p5.jpg", "/photos/p6.jpg", "/photos/p7.jpg", "/photos/p10.jpg", "/photos/p11.jpg"];

  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: 640, display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--ink)" }}>
        <div style={{ position: "absolute", inset: 0, animation: "slowZoom 24s ease-in-out infinite alternate" }}>
          <Image src="/photos/p6.jpg" alt="Boda organizada por Dile a la Chica" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 40%" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,26,26,.85) 0%,rgba(26,26,26,.15) 45%,rgba(26,26,26,.25) 100%)" }} />
        <div style={{ position: "absolute", inset: "clamp(14px,2vw,26px)", border: "1px solid rgba(240,184,168,.3)", pointerEvents: "none", zIndex: 2 }} />
        <div style={{ position: "relative", zIndex: 3, padding: "0 clamp(22px,6vw,90px) clamp(56px,8vw,96px)", maxWidth: 920, animation: "fadeUp 1.2s ease-out" }}>
          <span className="eyebrow" style={{ color: "var(--coral-soft)", display: "block", marginBottom: 20 }}>Tu historia, tu boda</span>
          <h1 className="serif" style={{ fontSize: "clamp(42px,6.2vw,88px)", fontWeight: 400, color: "#fff", lineHeight: 1.08, margin: "0 0 22px", letterSpacing: ".5px" }}>Planear tu boda es tan divertido como vivirla</h1>
          <p className="sans" style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "rgba(255,255,255,.9)", lineHeight: 1.65, margin: "0 0 38px", fontWeight: 300, maxWidth: 520, fontStyle: "italic" }}>Dile TODO a la chica.</p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/contacto" className="btn btn-coral">Hablemos</Link>
            <Link href="/bodas" className="btn btn-outline-light">Ver bodas</Link>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", zIndex: 3 }}>
          <svg width="13" height="22" viewBox="0 0 14 22" fill="none" style={{ animation: "drift 2.4s ease-in-out infinite" }}><path d="M7 2v14M2 12l5 5 5-5" stroke="var(--coral-soft)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </section>

      {/* SOBRE DLC */}
      <section style={{ background: "var(--cream)", padding: "clamp(64px,9vw,128px) clamp(20px,6vw,88px)" }}>
        <div className="wrap g-two">
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -16, left: -16, width: 120, height: 120, borderTop: "1px solid var(--coral)", borderLeft: "1px solid var(--coral)", zIndex: 0 }} />
            <div style={{ position: "absolute", bottom: -16, right: -16, width: 120, height: 120, borderBottom: "1px solid var(--coral)", borderRight: "1px solid var(--coral)", zIndex: 0 }} />
            <div className="zoomable" style={{ position: "relative", zIndex: 1, aspectRatio: "4/5" }}>
              <Image src="/photos/p8.jpg" alt="Anna Alvarez, Event & Wedding Planner" fill sizes="(min-width:860px) 40vw, 100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
          </div>
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: 18 }}>Hola, soy Anna</span>
            <h2 className="serif" style={{ fontSize: "clamp(28px,3.4vw,46px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.25, margin: "0 0 24px" }}>No solo organizo bodas. Acompano a personas en uno de los momentos mas bonitos de su vida</h2>
            <p className="sans" style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.85, margin: "0 0 18px" }}>Soy wedding planner en Barcelona y Catalunya. Creo en las bodas autenticas, las que se sienten de verdad, las que nacen de una intencion clara y se celebran con alma.</p>
            <p className="sans" style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.85, margin: "0 0 32px" }}>Trabajo con pocas parejas al ano porque prefiero estar presente de verdad en cada proyecto. No busco bodas perfectas. Busco bodas que os representen.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap", borderTop: "1px solid var(--line)", paddingTop: 26 }}>
              <Link href="/sobre-mi" className="arrow">Conoceme mejor <span style={{ fontSize: 15 }}>&rarr;</span></Link>
              <span className="script" style={{ fontSize: 30, color: "var(--coral)" }}>Anna</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ background: "var(--ink)", padding: "clamp(64px,9vw,128px) clamp(20px,6vw,88px)" }}>
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 52 }}>
            <div>
              <span className="eyebrow" style={{ color: "var(--coral-soft)", display: "block", marginBottom: 14 }}>Lo que hago</span>
              <h2 className="serif" style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 400, color: "#fff", margin: 0, letterSpacing: ".5px" }}>Servicios</h2>
            </div>
            <Link href="/servicios" className="arrow arrow--light">Ver todos <span style={{ fontSize: 15 }}>&rarr;</span></Link>
          </div>
          <div style={{ borderTop: "1px solid var(--line-on-dark)" }}>
            {services.map((s) => (
              <div key={s.n} className="svc-row">
                <span className="serif" style={{ fontSize: "clamp(26px,2.6vw,34px)", color: "var(--coral-soft)", fontStyle: "italic" }}>{s.n}</span>
                <div>
                  <h3 className="serif" style={{ fontSize: "clamp(22px,2.4vw,30px)", fontWeight: 400, color: "#fff", margin: "0 0 6px" }}>{s.title}</h3>
                  <p className="sans" style={{ fontSize: 14, color: "var(--on-dark-soft)", lineHeight: 1.7, margin: 0, fontWeight: 300, maxWidth: 560 }}>{s.lead}</p>
                </div>
                <span className="svc-tag sans" style={{ fontSize: 11, letterSpacing: "1px", color: "var(--coral-soft)", textTransform: "uppercase" }}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODAS */}
      <section style={{ background: "var(--cream)", padding: "clamp(64px,9vw,128px) clamp(20px,6vw,88px)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>Portfolio</span>
            <h2 className="serif" style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 400, color: "var(--ink)", margin: "0 0 16px", letterSpacing: ".5px" }}>Bodas con alma</h2>
            <p className="sans" style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.75, margin: 0 }}>Celebraciones autenticas, disenadas y coordinadas de principio a fin. Cada una, irrepetible.</p>
          </div>
          <div className="g-editorial">
            <Link href={`/bodas/${weddings[0].slug}`} className="zoomable" style={{ position: "relative", textDecoration: "none", display: "block", minHeight: 340 }}>
              <Image src={weddings[0].photo} alt={weddings[0].couple} fill sizes="(min-width:860px) 58vw, 100vw" style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,26,26,.8),rgba(26,26,26,0) 55%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 32 }}>
                <span className="sans" style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--coral-soft)", fontWeight: 500 }}>{weddings[0].place}</span>
                <h3 className="serif" style={{ fontSize: "clamp(24px,2.6vw,32px)", color: "#fff", margin: "6px 0 0", fontWeight: 400 }}>{weddings[0].couple}</h3>
              </div>
            </Link>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 16 }}>
              <Link href={`/bodas/${weddings[1].slug}`} className="zoomable" style={{ position: "relative", textDecoration: "none", display: "block", minHeight: 160 }}>
                <Image src={weddings[1].photo} alt={weddings[1].couple} fill sizes="(min-width:860px) 40vw, 100vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,26,26,.8),rgba(26,26,26,0) 60%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 26 }}>
                  <span className="sans" style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--coral-soft)", fontWeight: 500 }}>{weddings[1].place}</span>
                  <h3 className="serif" style={{ fontSize: "clamp(20px,2.2vw,26px)", color: "#fff", margin: "5px 0 0", fontWeight: 400 }}>{weddings[1].couple}</h3>
                </div>
              </Link>
              <Link href="/bodas" style={{ position: "relative", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 160, background: "linear-gradient(135deg,var(--coral),var(--coral-deep))" }}>
                <div style={{ textAlign: "center", padding: 24 }}>
                  <span className="serif" style={{ fontSize: "clamp(22px,2.4vw,30px)", color: "#fff", display: "block", marginBottom: 8, fontStyle: "italic" }}>+ Ver todas</span>
                  <span className="sans" style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(255,255,255,.8)", fontWeight: 600 }}>Portfolio completo &rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section style={{ background: "var(--cream-2)", padding: "clamp(64px,9vw,128px) clamp(20px,6vw,88px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>Paso a paso</span>
            <h2 className="serif" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 400, color: "var(--ink)", margin: 0, letterSpacing: ".5px" }}>Asi es trabajar conmigo</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {process.map((p, i) => {
              const last = i === process.length - 1;
              return (
                <div key={p.n} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px,5vw,48px)", paddingBottom: last ? 0 : 36, borderLeft: last ? "1px solid transparent" : "1px solid var(--coral)", marginLeft: 12, paddingLeft: "clamp(24px,5vw,48px)", position: "relative" }}>
                  <span style={{ position: "absolute", left: -8, top: 0, width: 15, height: 15, borderRadius: "50%", background: last ? "var(--ink)" : "var(--coral)" }} />
                  <span className="serif" style={{ fontSize: "clamp(28px,3vw,40px)", color: last ? "var(--ink)" : "var(--coral)", lineHeight: .9, fontStyle: "italic" }}>{p.n}</span>
                  <div style={{ paddingTop: 4 }}>
                    <h3 className="serif" style={{ fontSize: "clamp(20px,2.2vw,27px)", fontWeight: 400, color: "var(--ink)", margin: "0 0 8px" }}>{p.title}</h3>
                    <p className="sans" style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.75, margin: 0, maxWidth: 560 }}>{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section style={{ background: "var(--coral-bg)", padding: "clamp(64px,9vw,120px) clamp(20px,6vw,88px)", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <span className="eyebrow" style={{ display: "block", marginBottom: 24, color: "var(--coral-deep)" }}>Lo que dicen nuestras parejas</span>
          <p className="serif" style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.5, margin: "0 0 26px", fontStyle: "italic" }}>Fantastica, cercana y super profesional! Nos acompano en todo el proceso y el dia de la boda fue impecable. No podriamos haber elegido mejor.</p>
          <span className="sans" style={{ fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--coral-deep)", fontWeight: 600 }}>Gisela Pesarrodona</span>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ background: "var(--cream)", padding: "clamp(56px,8vw,100px) clamp(20px,6vw,88px)" }}>
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 10 }}>El dia a dia</span>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="serif" style={{ fontSize: "clamp(24px,3vw,34px)", color: "var(--ink)", fontWeight: 400 }}>{site.instagramHandle}</a>
            </div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="arrow">Seguir <span style={{ fontSize: 15 }}>&rarr;</span></a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 8 }}>
            {igTiles.map((src, i) => (
              <a key={i} href={site.instagram} target="_blank" rel="noopener noreferrer" className="zoomable" style={{ position: "relative", aspectRatio: "1/1", display: "block" }}>
                <Image src={src} alt="Instagram de Dile a la Chica" fill sizes="180px" style={{ objectFit: "cover" }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ background: "var(--ink)", padding: "clamp(64px,9vw,128px) clamp(20px,6vw,88px)" }}>
        <div className="wrap g-contact">
          <div>
            <span className="eyebrow" style={{ color: "var(--coral-soft)", display: "block", marginBottom: 16 }}>Contacto</span>
            <h2 className="serif" style={{ fontSize: "clamp(30px,3.8vw,50px)", fontWeight: 400, color: "#fff", lineHeight: 1.15, margin: "0 0 20px" }}>Teneis fecha? Hablemos</h2>
            <p className="sans" style={{ fontSize: 15, color: "var(--on-dark-soft)", lineHeight: 1.8, margin: "0 0 32px", fontWeight: 300, maxWidth: 420 }}>Escribeme y te respondo personalmente. Empezamos con una conversacion tranquila para conocernos y ver como puedo acompanaroos.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href={`mailto:${site.email}`} className="sans" style={{ fontSize: 14, color: "#fff", fontWeight: 300 }}>{site.email}</a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="sans" style={{ fontSize: 14, color: "#fff", fontWeight: 300 }}>{site.instagramHandle}</a>
            </div>
          </div>
          <Suspense fallback={null}><ContactForm /></Suspense>
        </div>
      </section>
    </main>
  );
}
