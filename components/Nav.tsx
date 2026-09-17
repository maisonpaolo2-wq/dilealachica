"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/data";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((v) => {
      const next = !v;
      document.body.classList.toggle("menu-open", next);
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    document.body.classList.remove("menu-open");
  }, []);

  useEffect(() => {
    return () => document.body.classList.remove("menu-open");
  }, []);

  const solid = scrolled || !isHome;
  const fg = solid ? "var(--ink)" : "#fff";
  const accent = solid ? "var(--coral)" : "var(--coral-soft)";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: solid ? "12px clamp(20px,5vw,56px)" : "18px clamp(20px,5vw,56px)",
        background: solid ? "rgba(255,248,243,.97)" : "transparent",
        backdropFilter: solid ? "blur(10px)" : "none",
        boxShadow: solid && scrolled ? "0 1px 14px rgba(26,26,26,.06)" : "none",
        transition: "all .5s ease",
      }}>
        <Link href="/" onClick={closeMenu} style={{ display: "flex", flexDirection: "column", lineHeight: 1, textDecoration: "none" }}>
          <span className="serif" style={{ fontSize: 24, color: fg, transition: "color .5s", fontWeight: 600 }}>Dile a la Chica</span>
          <span className="sans" style={{ fontSize: 8, letterSpacing: "3.5px", textTransform: "uppercase", color: accent, marginTop: 3, fontWeight: 500, transition: "color .5s" }}>Event & Wedding Planner</span>
        </Link>

        <div className={`navlinks ${open ? "open" : ""}`}>
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="navlink" onClick={closeMenu} style={{ fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase", color: fg, fontWeight: 500 }}>{l.label}</Link>
          ))}
          <Link href="/contacto" onClick={closeMenu} style={{ fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase", color: "#fff", fontWeight: 600, background: "var(--coral)", padding: "12px 24px", transition: "all .3s" }}>Hablemos</Link>
        </div>

        <button className="menu-toggle" aria-label="Menu" aria-expanded={open} onClick={toggleMenu} style={{ color: fg }}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-overlay ${open ? "open" : ""}`} onClick={closeMenu} />
    </>
  );
}
