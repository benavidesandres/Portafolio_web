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
  // Pon tu foto en /public/images/ y cambia esta ruta (ej. "/images/foto.jpg")
  photo: "/images/foto.jpg",
  cv: "/cv.pdf",
  email: "tu-correo@ejemplo.com",
  phone: "+57 300 000 0000",
  location: "Colombia",
  about: [
    "Soy estudiante de Ingeniería de Sistemas y me apasiona el desarrollo frontend: pasar de un diseño a una página que funciona, se ve bien y responde en cualquier pantalla.",
    "Disfruto aprender tecnologías nuevas, trabajar en equipo y cuidar los detalles que hacen que una interfaz se sienta bien.",
  ],
  quickFacts: [
    { label: "Ubicación", value: "Colombia" },
    { label: "Semestre", value: "—" },
    { label: "Intereses", value: "UI, web, videojuegos" },
    { label: "Idiomas", value: "Español, Inglés" },
  ],
  values: ["Enfoque", "Disciplina", "Constancia"],
  socials: [
    { label: "GitHub", href: "https://github.com/benavidesandres", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tu-usuario", icon: "linkedin" },
    { label: "Instagram", href: "https://instagram.com/tu-usuario", icon: "instagram" },
    { label: "WhatsApp", href: "https://wa.me/573000000000", icon: "whatsapp" },
  ] satisfies Social[],
};
