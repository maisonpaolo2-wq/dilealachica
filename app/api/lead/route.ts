import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/data";

export const runtime = "nodejs";
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let d: Record<string, string>;
  try { d = await req.json(); } catch { return NextResponse.json({ error: "invalid json" }, { status: 400 }); }
  if (!d?.name?.trim() || !d?.email?.trim() || !isEmail(d.email)) {
    return NextResponse.json({ error: "missing fields" }, { status: 422 });
  }
  const to = process.env.LEAD_TO || site.email;
  const from = process.env.LEAD_FROM || "Dile a la Chica <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `Nueva consulta - ${d.servicio && d.servicio !== "Aun no lo se" ? d.servicio : d.eventType || "Boda"} - ${d.name}`;
  const text = [
    `Servicio de interes: ${d.servicio || "No indicado"}`,
    `Tipo de evento: ${d.eventType || "No indicado"}`,
    `Nombre: ${d.name}`,
    `Email: ${d.email}`,
    `Fecha aproximada: ${d.date || "No indicada"}`,
    "",
    "Mensaje:",
    d.message || "Sin mensaje",
  ].join("\n");

  if (!apiKey) {
    console.warn("[lead] RESEND_API_KEY sin configurar - consulta recibida, no enviada:\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({ from, to, replyTo: d.email, subject, text });
    if (error) throw error;
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] error:", err);
    return NextResponse.json({ error: "send failed" }, { status: 502 });
  }
}
