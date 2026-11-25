// ✏️ Tus proyectos. Agrega/quita objetos de la lista.
// image: ruta en /public/images/ (opcional). Si no hay imagen se usa el emoji + gradiente.

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
  emoji: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Lens",
    category: "App móvil",
    description:
      "Le dices algo como \"tengo una hora libre y no quiero gastar plata\" y te arma una ruta a pie por murales, cafés de barrio, parques y edificios con historia cerca de ti.",
    tags: ["React Native", "Expo", "TypeScript", "Hono", "Zod", "Google Maps"],
    github: "https://github.com/benavidesandres/Lens_B",
    emoji: "🗺️",
    gradient: "from-[#c8f53a] to-[#2dd4bf]",
  },
  {
    title: "StudioFlow",
    category: "Backend · Producción audiovisual",
    description:
      "Organiza rodajes: escenas, presupuesto, elenco y el plan del día. Avisa si un actor quedó citado en dos escenas a la vez o si no le da el tiempo para cambiar de locación.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Supabase", "JWT", "Docker"],
    github: "https://github.com/benavidesandres/Studio_flow",
    emoji: "🎬",
    gradient: "from-[#ff6a3d] to-[#ff3d8b]",
  },
  {
    title: "Eternal Sleep",
    category: "Videojuego · Pixel art",
    description:
      "Plataformas 2D en un mundo de sueños oscuro. Entras en las pesadillas de cinco aldeanos para despertarlos, peleas con jefes y desbloqueas habilidades como el doble salto.",
    tags: ["Unity 6", "C#", "URP 2D", "Pixel art"],
    github: "https://github.com/benavidesandres/eternal_sleep",
    emoji: "🌙",
    gradient: "from-[#7b3cf5] to-[#3db4ff]",
  },
  {
    title: "SkillVibes",
    category: "Backend · Tutorías en línea",
    description:
      "Marketplace de tutorías de programación 1 a 1. Estudiantes reservan con tutores y la sesión se hace por videollamada dentro de la misma plataforma.",
    tags: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Docker"],
    github: "https://github.com/benavidesandres/Skill_vibe_backend",
    emoji: "📹",
    gradient: "from-[#ffb547] to-[#c8f53a]",
  },
];
