"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav } from "@/content/data";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollPos = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lockBody = useCallback(() => {
    scrollPos.current = window.scrollY;
    document.body.style.top = `-${scrollPos.current}px`;
    document.body.classList.add("menu-open");
  }, []);

  const unlockBody = useCallback(() => {
    document.body.classList.remove("menu-open");
    document.body.style.top = "";
    window.scrollTo(0, scrollPos.current);
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((v) => {
      if (v) unlockBody();
      else lockBody();
      return !v;
    });
  }, [lockBody, unlockBody]);

  const closeMenu = useCallback(() => {
    setOpen(false);
    unlockBody();
  }, [unlockBody]);

  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.top = "";
    };
  }, []);

  const solid = scrolled || !isHome;
  const fg = solid ? "var(--ink)" : "#fff";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: solid ? "10px clamp(20px,5vw,56px)" : "16px clamp(20px,5vw,56px)",
        background: solid ? "rgba(255,248,243,.97)" : "transparent",
        backdropFilter: solid ? "blur(10px)" : "none",
        boxShadow: solid && scrolled ? "0 1px 14px rgba(26,26,26,.06)" : "none",
        transition: "all .5s ease",
      }}>
        <Link href="/" onClick={closeMenu} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image
            src="/dlc/logo.jpg"
            alt="Dile a la Chica"
            width={38}
            height={38}
            style={{ borderRadius: 6 }}
          />
          <span className="serif" style={{ fontSize: 18, color: fg, transition: "color .5s", fontWeight: 600, letterSpacing: ".3px" }}>Dile a la Chica</span>
        </Link>

        <div className={`navlinks ${open ? "open" : ""}`}>
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="navlink" onClick={closeMenu} style={{ fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase", color: fg, fontWeight: 500, fontFamily: "var(--sans)" }}>{l.label}</Link>
          ))}
          <Link href="/contacto" onClick={closeMenu} style={{ fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase", color: "#fff", fontWeight: 600, background: "var(--coral)", padding: "12px 24px", transition: "all .3s", fontFamily: "var(--sans)" }}>Hablemos</Link>
        </div>

        <button className="menu-toggle" aria-label="Menú" aria-expanded={open} onClick={toggleMenu} style={{ color: fg }}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-overlay ${open ? "open" : ""}`} onClick={closeMenu} />
    </>
  );
}
