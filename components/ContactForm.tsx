"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { eventTypes, services, site } from "@/content/data";

const field: React.CSSProperties = {
  fontFamily: "var(--sans)", fontSize: 14, padding: "14px 16px",
  border: "1px solid rgba(240,184,168,.45)", background: "rgba(255,255,255,.1)",
  color: "#fff", outline: "none", fontWeight: 400, width: "100%",
  borderRadius: 2, transition: "border-color .3s",
};
const opt = { color: "#1A1A1A" };
const servicioOptions = ["Aún no lo sé", ...services.map((s) => s.title)];

export function ContactForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [servicio, setServicio] = useState("Aún no lo sé");

  useEffect(() => {
    const q = params.get("servicio");
    if (q && servicioOptions.includes(q)) setServicio(q);
  }, [params]);

  const note =
    status === "ok" ? "¡Gracias! Te responderé muy pronto."
    : status === "error" ? `Algo ha fallado. Escríbeme a ${site.email}.`
    : status === "sending" ? "Enviando..." : "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      setStatus("ok");
      e.currentTarget.reset();
      setServicio("Aún no lo sé");
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: 16 }}>
        <input name="name" type="text" placeholder="Nombre" required style={field} />
        <input name="email" type="email" placeholder="Email" required style={field} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: 16 }}>
        <input name="date" type="text" placeholder="Fecha aproximada" style={field} />
        <select name="eventType" defaultValue="" style={field}>
          <option style={opt} value="">Tipo de evento</option>
          {eventTypes.map((t) => <option key={t} style={opt}>{t}</option>)}
        </select>
      </div>
      <select name="servicio" value={servicio} onChange={(e) => setServicio(e.target.value)} style={field}>
        {servicioOptions.map((t) => <option key={t} style={opt}>{t === "Aún no lo sé" ? "Servicio de interés (aún no lo sé)" : t}</option>)}
      </select>
      <textarea name="message" rows={4} placeholder="Cuéntame vuestra idea..." style={{ ...field, resize: "vertical" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <button type="submit" className="btn btn-coral" disabled={status === "sending"} style={{ alignSelf: "flex-start", opacity: status === "sending" ? .6 : 1 }}>Enviar</button>
        {note && <span className="sans" style={{ fontSize: 13, color: status === "error" ? "#E8A89A" : "var(--coral-soft)", fontWeight: 300 }}>{note}</span>}
      </div>
    </form>
  );
}
