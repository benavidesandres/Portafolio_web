# Portafolio web

Portafolio personal hecho con **Next.js (App Router) + TypeScript + Tailwind CSS**, listo para desplegar en **Vercel**.

## Secciones (en orden)

1. Menú de navegación: sticky, menú hamburguesa en celular, scroll suave y enlace activo resaltado (`components/Navbar.tsx`)
2. Hero con botón **Descargar CV** (`components/Hero.tsx`)
3. Sobre mí (`components/About.tsx`)
4. Proyectos con enlaces a GitHub y a la demo (`components/Projects.tsx` + `data/projects.ts`)
5. Testimonios, mínimo 3 (`components/Testimonials.tsx`)
6. Experiencia académica y laboral (`components/Experience.tsx`)
7. ⭐ Sección adicional: Habilidades (`components/Skills.tsx`)
8. Contacto con formulario validado y mensaje de confirmación (`components/Contact.tsx`)
9. Pie de página con redes, enlaces rápidos y botón para volver arriba (`components/Footer.tsx`)

## Personalizar

- Datos personales y redes: `data/profile.ts`
- Proyectos: `data/projects.ts`
- Testimonios, experiencia y habilidades: `data/content.ts`
- Tu foto: ponla en `public/images/` y cambia `photo` en `data/profile.ts`
- Tu CV: reemplaza `public/cv.pdf`
- Formulario (opcional): copia `.env.example` a `.env.local` y pon tu ID de Formspree. Sin él, el formulario valida los campos y muestra la confirmación, pero el mensaje no se envía a ningún lado.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

## Despliegue

Sube el repo a GitHub e impórtalo en [vercel.com/new](https://vercel.com/new).
