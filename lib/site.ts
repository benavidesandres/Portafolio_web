// URL pública del sitio. En Vercel se detecta sola; si usas dominio propio,
// pon NEXT_PUBLIC_SITE_URL=https://tudominio.com en las variables de entorno.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
