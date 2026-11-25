// ✏️ Testimonios, experiencia y habilidades.

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar?: string; // ruta en /public/images/ (opcional, si no usa iniciales)
  color: string;
};

// ✏️ Testimonios de EJEMPLO para ver la estructura. Reemplázalos por reales antes de publicar.
export const testimonials: Testimonial[] = [
  {
    name: "Valentina Rodríguez",
    role: "Compañera de equipo · SkillVibes",
    text: "A Andrés le tocó la videollamada, que era lo que más miedo nos daba a todos, y la dejó funcionando una semana antes de la entrega. Cuando algo se caía en el backend era el primero en meterse a revisar, así fueran las 11 de la noche.",
    color: "#c8f53a",
  },
  {
    name: "Santiago Gómez",
    role: "Estudiante de Ingeniería de Sistemas",
    text: "Me pasó Eternal Sleep para que le buscara bugs y terminé jugando toda la tarde. Le encontré dos, eso sí. Los arregló ese mismo día.",
    color: "#7b3cf5",
  },
  {
    name: "Diana Marcela Torres",
    role: "Docente de Desarrollo de Software",
    text: "Es de los estudiantes que preguntan el porqué de las cosas y no solo el cómo. En el proyecto final presentó pruebas y documentación sin que fuera requisito.",
    color: "#ff6a3d",
  },
  {
    name: "Camilo Hernández",
    role: "Productor audiovisual independiente",
    text: "Le conté el desorden que era cuadrar horarios de actores en un rodaje y a las pocas semanas me mostró StudioFlow. Lo que más me sirvió fue que avisa cuando alguien queda citado en dos escenas al tiempo.",
    color: "#3db4ff",
  },
];

export type ExperienceItem = {
  title: string;
  place: string;
  start: string;
  end: string;
  description: string;
};

// Ordena de lo más reciente a lo más antiguo.
export const academic: ExperienceItem[] = [
  {
    title: "Ingeniería de Sistemas",
    place: "Universidad",
    start: "2022",
    end: "Hoy",
    description: "Formación en desarrollo de software, bases de datos y diseño de interfaces.",
  },
  {
    title: "Curso de Diseño UI",
    place: "Plataforma en línea",
    start: "2021",
    end: "2021",
    description: "Fundamentos de diseño visual, tipografía, color y prototipado en Figma.",
  },
];

export const work: ExperienceItem[] = [
  {
    title: "Practicante Frontend",
    place: "Empresa Tech S.A.S.",
    start: "2024",
    end: "Hoy",
    description: "Desarrollo de componentes en React y mejoras de rendimiento en el sitio principal.",
  },
  {
    title: "Desarrollador freelance",
    place: "Sitios web para emprendedores",
    start: "2023",
    end: "2024",
    description: "Diseño y publicación de páginas para negocios locales con Next.js y Vercel.",
  },
];

// Tecnologías agrupadas por "para qué las uso". Sin porcentajes.
// usedIn: dónde la usaste (aparece al pasar el mouse).
export type Tech = { name: string; color: string; usedIn?: string };
export type TechGroup = { title: string; note: string; color: string; items: Tech[] };

export const techGroups: TechGroup[] = [
  {
    title: "Lo que se ve",
    note: "pantallas, botones y todo lo que alguien toca",
    color: "#c8f53a",
    items: [
      { name: "HTML", color: "#ff6a3d" },
      { name: "CSS", color: "#3db4ff" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "TypeScript", color: "#3178c6", usedIn: "Lens, SkillVibes y este sitio" },
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#ffffff", usedIn: "este portafolio" },
      { name: "Tailwind", color: "#38bdf8", usedIn: "este portafolio" },
      { name: "React Native", color: "#61dafb", usedIn: "Lens" },
      { name: "Expo", color: "#ffffff", usedIn: "Lens" },
    ],
  },
  {
    title: "Lo que no se ve",
    note: "APIs, lógica y la parte que nadie aplaude",
    color: "#7b3cf5",
    items: [
      { name: "Node.js", color: "#5fa04e" },
      { name: "NestJS", color: "#e0234e", usedIn: "SkillVibes" },
      { name: "Hono", color: "#ff5b11", usedIn: "el servidor de Lens" },
      { name: "Java", color: "#f89820", usedIn: "StudioFlow" },
      { name: "Spring Boot", color: "#6db33f", usedIn: "StudioFlow" },
      { name: "JWT", color: "#d63aff", usedIn: "StudioFlow y SkillVibes" },
      { name: "Zod", color: "#3e67b1", usedIn: "Lens" },
    ],
  },
  {
    title: "Donde viven los datos",
    note: "tablas, relaciones y alguna migración rota",
    color: "#3db4ff",
    items: [
      { name: "PostgreSQL", color: "#4f8fd1", usedIn: "StudioFlow y SkillVibes" },
      { name: "Supabase", color: "#3ecf8e", usedIn: "StudioFlow" },
      { name: "TypeORM", color: "#fe0803", usedIn: "SkillVibes" },
      { name: "Docker", color: "#2496ed", usedIn: "levantar las bases de datos" },
    ],
  },
  {
    title: "Para jugar",
    note: "cuando el código se vuelve pixel art",
    color: "#ff6a3d",
    items: [
      { name: "Unity", color: "#ffffff", usedIn: "Eternal Sleep" },
      { name: "C#", color: "#a179dc", usedIn: "Eternal Sleep" },
      { name: "Pixel art", color: "#ffc83d", usedIn: "Eternal Sleep" },
    ],
  },
  {
    title: "Siempre abiertos",
    note: "la pestaña que nunca cierro",
    color: "#ffc83d",
    items: [
      { name: "Git / GitHub", color: "#f05032" },
      { name: "Figma", color: "#a259ff" },
      { name: "VS Code", color: "#3ea6ff" },
      { name: "Postman", color: "#ff6c37" },
    ],
  },
];

// Las que salen como etiquetas en "Sobre mí".
export const aboutTags = ["TypeScript", "React Native", "NestJS", "Spring Boot", "PostgreSQL", "Unity", "Next.js"];

export const softSkills = ["Trabajo en equipo", "Comunicación", "Resolución de problemas", "Aprendizaje rápido", "Creatividad"];
