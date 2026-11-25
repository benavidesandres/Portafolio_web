// ✏️ Edita aquí tu información personal. Todo el sitio la lee de este archivo.

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "whatsapp" | "mail";
};

export const profile = {
  name: "Andrés Benavides",
  shortName: "ANDRÉS",
  initials: "AB",
  roles: ["Desarrollador Web", "Frontend", "Diseño de Interfaces"],
  tagline:
    "Construyo interfaces web rápidas, claras y con personalidad. Me gusta convertir ideas en productos que la gente disfruta usar.",
  photo: "/images/foto.jpg",
  cv: "/CV_Andres_Felipe_Benavides_Bolanos.pdf",
  email: "benavidesandres217@gmail.com",
  phone: "+57 302 650 8006",
  location: "Colombia",
  about: [
    "Estudio Ingeniería de Sistemas en la Universidad Cooperativa de Colombia desde 2024, y desde ese mismo año desarrollo páginas web: paso de una idea o un diseño a un sitio que funciona, se ve bien y responde en cualquier pantalla.",
    "Disfruto aprender tecnologías nuevas, trabajar en equipo y cuidar los detalles que hacen que una interfaz se sienta bien.",
  ],
  quickFacts: [
    { label: "Ubicación", value: "Colombia" },
    { label: "Universidad", value: "U. Cooperativa de Colombia" },
    { label: "Intereses", value: "UI, web, videojuegos" },
    { label: "Idiomas", value: "Español, Inglés" },
  ],
  values: ["Enfoque", "Disciplina", "Constancia"],
  socials: [
    { label: "GitHub", href: "https://github.com/benavidesandres", icon: "github" },
    { label: "WhatsApp", href: "https://wa.me/573026508006", icon: "whatsapp" },
    { label: "Correo", href: "mailto:benavidesandres217@gmail.com", icon: "mail" },
  ] satisfies Social[],
};
