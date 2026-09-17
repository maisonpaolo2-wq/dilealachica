export const site = {
  name: "Dile a la Chica",
  fullName: "Dile a la Chica | Wedding & Event Planner",
  role: "Event & Wedding Planner",
  url: "https://www.dilealachica.com",
  email: "hola@dilealachica.com",
  instagram: "https://instagram.com/dilealachica",
  instagramHandle: "@dilealachica",
  whatsappNumber: "34600000000",
  whatsappText: "¡Hola! Me encantaría hablar contigo sobre mi boda.",
  location: "Barcelona & Catalunya",
};
export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappText)}`;

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/bodas", label: "Bodas" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

export type Service = { n: string; title: string; tag: string; lead: string; detail: string; includes: string[]; photo: string };
export const services: Service[] = [
  {
    n: "01", title: "Planificación completa", tag: "De principio a fin",
    lead: "Te acompaño desde el primer suspiro hasta el último abrazo. Tu boda, tu historia, tu ritmo.",
    detail: "Me convierto en tu persona de confianza. Juntas construimos el concepto, buscamos proveedores que encajen con vosotros, gestionamos cada detalle y llegamos al día con todo listo para que solo tengáis que vivirlo. Sin prisas, sin agobios, con intención.",
    includes: ["Concepto creativo y moodboard", "Selección de espacio y proveedores", "Presupuesto detallado y timeline", "Gestión de contratos y logística", "Dirección completa el día del evento"],
    photo: "/photos/p1.jpg",
  },
  {
    n: "02", title: "Diseño con alma", tag: "Estética y emoción",
    lead: "Cada boda tiene su propia voz. Yo la traduzco en colores, texturas, flores y luz.",
    detail: "No hago bodas de Pinterest. Escucho lo que sentís, lo que os importa, lo que os emociona. Y a partir de ahí creo un universo visual que sea vuestro de verdad. Desde la paleta de color hasta el último detalle de la mesa.",
    includes: ["Concepto visual personalizado", "Paleta cromática y materiales", "Propuesta floral y textil", "Diseño de mesas y papelería", "Iluminación y ambientación"],
    photo: "/photos/p5.jpg",
  },
  {
    n: "03", title: "Coordinación del día", tag: "El día D",
    lead: "Ya lo tenéis todo pensado. Yo me aseguro de que fluya sin que tengáis que preocuparos por nada.",
    detail: "Entro en las últimas semanas, reviso cada detalle con vosotros, preparo un timing al minuto y el día de la boda soy yo quien resuelve, dirige y cuida que todo suceda como lo soñasteis. Vosotros solo tenéis que estar presentes.",
    includes: ["Reunión de traspaso y revisión", "Timing detallado del día", "Confirmación con proveedores", "Dirección de ceremonia y celebración", "Equipo de apoyo"],
    photo: "/photos/p7.jpg",
  },
  {
    n: "04", title: "Bodas destino", tag: "Catalunya & más",
    lead: "Vengáis de donde vengáis, celebrad aquí. Yo soy vuestros ojos y manos sobre el terreno.",
    detail: "Si soñáis con una boda en Catalunya pero no conocéis la zona, yo os guío. Busco espacios con personalidad, proveedores que conozco de primera mano y me encargo de toda la logística para que lleguéis, celebréis y os llevéis un recuerdo que os acompañe siempre.",
    includes: ["Búsqueda de espacio con carácter", "Proveedores locales de confianza", "Logística de invitados y alojamiento", "Acompañamiento presencial continuo", "Organización integral o parcial"],
    photo: "/photos/p10.jpg",
  },
];

export const process = [
  { n: "01", title: "Nos conocemos", body: "Hablamos sin prisa. Me contáis qué imagináis, qué os importa, cómo queréis sentiros ese día. Escucho, pregunto y empiezo a visualizar." },
  { n: "02", title: "Propuesta a medida", body: "Os presento un plan con concepto, proveedores, timing y presupuesto. Todo por escrito, claro y transparente." },
  { n: "03", title: "Manos a la obra", body: "Gestiono cada detalle, confirmo proveedores, reviso todo y os mantengo al día sin agobios. Vosotros disfrutad del proceso." },
  { n: "04", title: "El gran día", body: "Llegáis, sonreís y brindáis. Yo estoy entre bastidores cuidando que todo fluya exactamente como lo planeamos." },
];

export const faqs = [
  { q: "¿Con cuánta antelación hay que empezar?", a: "Lo ideal son 10 o 14 meses para tener margen con espacios y proveedores. Para coordinación del día, con menos tiempo también funciona." },
  { q: "¿Cuántas bodas llevas al año?", a: "Pocas, de forma intencionada. Prefiero estar de verdad presente en cada proyecto a ir con prisas." },
  { q: "¿Solo trabajas en Catalunya?", a: "Es mi base, pero también organizo bodas en otras zonas. Cuéntame tu idea y vemos." },
  { q: "¿Cómo funciona el presupuesto?", a: "Cada boda es diferente. Preparo una propuesta personalizada después de nuestra primera conversación. Sin sorpresas." },
  { q: "¿Puedo contratar solo la coordinación?", a: "Por supuesto. Si ya lo tenéis todo organizado, entro para dirigir el día y que solo tengáis que vivirlo." },
];

export const dlcParaTi = [
  "Quieres que alguien cuide tu viaje emocional, no solo la logística",
  "Buscas una celebración auténtica, no una réplica de lo que ves en redes",
  "Necesitas calma, claridad e intención en el proceso",
  "Quieres celebrar con alma y sentir que cada detalle habla de vosotros",
  "Te importa el cómo tanto como el qué",
];

export const dlcNoParaTi = [
  "Solo buscas a alguien que ejecute sin implicarse",
  "Quieres una boda copiada de influencers",
  "No quieres mirar hacia dentro ni conectar con lo que sentís",
  "Te da igual el proceso, solo te importa el resultado",
];

export const testimonials = [
  {
    quote: "Fantástica, cercana y súper profesional! Nos acompañó en todo el proceso y el día de la boda fue impecable. No podríamos haber elegido mejor.",
    name: "Gisela Pesarrodona",
    date: "15/07/2023",
    stars: 5,
  },
];

export const weddings = [
  { slug: "xenia-laura", couple: "Xènia & Laura", place: "Masía entre pinos", year: "2026", photo: "/photos/p6.jpg" },
  { slug: "celebracion-intima", couple: "Celebración íntima", place: "Finca con encanto", year: "2025", photo: "/photos/p11.jpg" },
];

export const eventTypes = ["Boda", "Boda destino", "Evento privado", "Solo coordinación"];
export const budgetRanges = ["Menos de 20.000 €", "20.000 a 35.000 €", "35.000 a 50.000 €", "Más de 50.000 €"];
