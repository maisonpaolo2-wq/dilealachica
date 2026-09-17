"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type LightItem = { src: string; alt: string; ratio?: string };

export function Lightbox({ items, className = "", style, gap = 8 }: { items: LightItem[]; className?: string; style?: React.CSSProperties; gap?: number }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, close, go]);

  return (
    <>
      <div className={className} style={{ display: "grid", gap, ...style }}>
        {items.map((it, i) => (
          <button key={it.src + i} onClick={() => setOpen(i)} className="zoomable" aria-label="Ampliar imagen"
            style={{ position: "relative", aspectRatio: it.ratio ?? "1/1", border: 0, padding: 0, cursor: "zoom-in", background: "var(--cream-3)", display: "block", width: "100%" }}>
            <Image src={it.src} alt={it.alt} fill sizes="(min-width:760px) 40vw, 100vw" style={{ objectFit: "cover" }} />
          </button>
        ))}
      </div>
      {open !== null && (
        <div onClick={close} role="dialog" aria-modal="true"
          style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(26,26,26,.94)", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px,5vw,64px)", animation: "fadeUp .25s ease-out" }}>
          <button onClick={close} aria-label="Cerrar" style={{ position: "absolute", top: 20, right: 22, background: "transparent", border: 0, color: "#fff", fontSize: 30, cursor: "pointer", fontFamily: "var(--sans)" }}>&times;</button>
          <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Anterior" style={{ position: "absolute", left: 16, background: "transparent", border: 0, color: "#fff", fontSize: 34, cursor: "pointer", padding: 12 }}>&lsaquo;</button>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "min(1000px,92vw)", height: "min(84vh,1100px)" }}>
            <Image src={items[open].src} alt={items[open].alt} fill sizes="92vw" style={{ objectFit: "contain" }} />
          </div>
          <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Siguiente" style={{ position: "absolute", right: 16, background: "transparent", border: 0, color: "#fff", fontSize: 34, cursor: "pointer", padding: 12 }}>&rsaquo;</button>
        </div>
      )}
    </>
  );
}
