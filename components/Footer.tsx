import Link from "next/link";
import { nav, site } from "@/content/data";

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", padding: "52px clamp(20px,6vw,88px)" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1, textDecoration: "none" }}>
          <span className="serif" style={{ fontSize: 22, color: "#fff", fontWeight: 600 }}>Dile a la Chica</span>
          <span className="sans" style={{ fontSize: 8, letterSpacing: "3.5px", textTransform: "uppercase", color: "var(--coral-soft)", marginTop: 3, fontWeight: 500 }}>Event & Wedding Planner</span>
        </Link>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="sans" style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--on-dark-soft)", fontWeight: 500 }}>{l.label}</Link>
          ))}
          <Link href="/contacto" className="sans" style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--on-dark-soft)", fontWeight: 500 }}>Contacto</Link>
        </div>
        <span className="sans" style={{ fontSize: 10, color: "rgba(255,248,243,.35)", fontWeight: 300 }}>&copy; 2026 {site.fullName}</span>
      </div>
    </footer>
  );
}
