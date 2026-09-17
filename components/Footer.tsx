import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/content/data";

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", padding: "52px clamp(20px,6vw,88px)" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/dlc/logo.jpg" alt="Dile a la Chica" width={32} height={32} style={{ borderRadius: 5 }} />
          <span className="serif" style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}>Dile a la Chica</span>
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
