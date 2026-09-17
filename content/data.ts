export const site = {
  name: "Dile a la Chica",
  fullName: "Dile a la Chica | Wedding & Event Planner",
  role: "Event & Wedding Planner",
  url: "https://www.dilealachica.com",
  email: "hola@dilealachica.com",
  instagram: "https://instagram.com/dilealachica",
  instagramHandle: "@dilealachica",
  whatsappNumber: "34600000000",
  whatsappText: "Hola! Me encantaria hablar contigo sobre mi boda.",
  location: "Barcelona & Catalunya",
};
export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappText)}`;

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/bodas", label: "Bodas" },
  { href: "/sobre-mi", label: "Sobre mi" },
];

export type Service = { n: string; title: string; tag: string; lead: string; detail: string; includes: string[]; photo: string };
export const services: Service[] = [
  {
    n: "01", title: "Planificacion completa", tag: "De principio a fin",
    lead: "Te acompano desde el primer suspiro hasta el ultimo abrazo. Tu boda, tu historia, tu ritmo.",
    detail: "Me convierto en tu persona de confianza. Juntas construimos el concepto, buscamos proveedores que encajen con vosotros, gestionamos cada detalle y llegamos al dia con todo listo para que solo tengais que vivirlo. Sin prisas, sin agobios, con intencion.",
    includes: ["Concepto creativo y moodboard", "Seleccion de espacio y proveedores", "Presupuesto detallado y timeline", "Gestion de contratos y logistica", "Direccion completa el dia del evento"],
    photo: "/photos/p1.jpg",
  },
  {
    n: "02", title: "Diseno con alma", tag: "Estetica y emocion",
    lead: "Cada boda tiene su propia voz. Yo la traduzco en colores, texturas, flores y luz.",
    detail: "No hago bodas de Pinterest. Escucho lo que sentis, lo que os importa, lo que os emociona. Y a partir de ahi creo un universo visual que sea vuestro de verdad. Desde la paleta de color hasta el ultimo detalle de la mesa.",
    includes: ["Concepto visual personalizado", "Paleta cromatica y materiales", "Propuesta floral y textil", "Diseno de mesas y papeleria", "Iluminacion y ambientacion"],
    photo: "/photos/p5.jpg",
  },
  {
    n: "03", title: "Coordinacion del dia", tag: "El dia D",
    lead: "Ya lo teneis todo pensado. Yo me aseguro de que fluya sin que tengais que preocuparos por nada.",
    detail: "Entro en las ultimas semanas, reviso cada detalle con vosotros, preparo un timing al minuto y el dia de la boda soy yo quien resuelve, dirige y cuida que todo suceda como lo sonasteis. Vosotros solo teneis que estar presentes.",
    includes: ["Reunion de traspaso y revision", "Timing detallado del dia", "Confirmacion con proveedores", "Direccion de ceremonia y celebracion", "Equipo de apoyo"],
    photo: "/photos/p7.jpg",
  },
  {
    n: "04", title: "Bodas destino", tag: "Catalunya & mas",
    lead: "Venid de donde vengais, celebrad aqui. Yo soy vuestros ojos y manos sobre el terreno.",
    detail: "Si sonais con una boda en Catalunya pero no conoceis la zona, yo os guio. Busco espacios con personalidad, proveedores que conozco de primera mano y me encargo de toda la logistica para que llegueis, celebreis y os llevéis un recuerdo que os acompane siempre.",
    includes: ["Busqueda de espacio con caracter", "Proveedores locales de confianza", "Logistica de invitados y alojamiento", "Acompanamiento presencial continuo", "Organizacion integral o parcial"],
    photo: "/photos/p10.jpg",
  },
];

export const process = [
  { n: "01", title: "Nos conocemos", body: "Hablamos sin prisa. Me cuentas que imaginais, que os importa, como quereis sentiros ese dia. Escucho, pregunto y empiezo a visualizar." },
  { n: "02", title: "Propuesta a medida", body: "Os presento un plan con concepto, proveedores, timing y presupuesto. Todo por escrito, claro y transparente." },
  { n: "03", title: "Manos a la obra", body: "Gestiono cada detalle, confirmo proveedores, reviso todo y os mantengo al dia sin agobios. Vosotros disfrutad del proceso." },
  { n: "04", title: "El gran dia", body: "Llegais, sonreis y brindais. Yo estoy entre bastidores cuidando que todo fluya exactamente como lo planeamos." },
];

export const faqs = [
  { q: "Con cuanta antelacion hay que empezar?", a: "Lo ideal son 10 o 14 meses para tener margen con espacios y proveedores. Para coordinacion del dia, con menos tiempo tambien funciona." },
  { q: "Cuantas bodas llevas al ano?", a: "Pocas, de forma intencionada. Prefiero estar de verdad presente en cada proyecto a ir con prisas." },
  { q: "Solo trabajas en Catalunya?", a: "Es mi base, pero tambien organizo bodas en otras zonas. Cuentame tu idea y vemos." },
  { q: "Como funciona el presupuesto?", a: "Cada boda es diferente. Preparo una propuesta personalizada despues de nuestra primera conversacion. Sin sorpresas." },
  { q: "Puedo contratar solo la coordinacion?", a: "Por supuesto. Si ya lo teneis todo organizado, entro para dirigir el dia y que solo tengais que vivirlo." },
];

export const weddings = [
  { slug: "xenia-laura", couple: "Xenia & Laura", place: "Masia entre pinos", year: "2026", photo: "/photos/p6.jpg" },
  { slug: "celebracion-intima", couple: "Celebracion intima", place: "Finca con encanto", year: "2025", photo: "/photos/p11.jpg" },
];

export const eventTypes = ["Boda", "Boda destino", "Evento privado", "Solo coordinacion"];
export const budgetRanges = ["Menos de 20.000 EUR", "20.000 a 35.000 EUR", "35.000 a 50.000 EUR", "Mas de 50.000 EUR"];
