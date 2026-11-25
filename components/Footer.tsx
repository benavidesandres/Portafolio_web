"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { profile } from "@/data/profile";
import { NAV_LINKS } from "./Navbar";
import { socialIcons } from "./Icons";

export default function Footer() {
  // El año se calcula en el navegador (Next.js no permite leer la hora al prerenderizar).
  const year = useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => null,
  );
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="mt-10 border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <a href="#inicio" className="font-brush text-3xl">
            {profile.shortName}
            <span className="text-lime">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted">{profile.roles.join(" · ")}</p>
        </div>

        <nav aria-label="Enlaces rápidos">
          <h3 className="font-hand text-xl text-lime">Enlaces rápidos</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-white/75 hover:text-lime">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-hand text-xl text-lime">Redes</h3>
          <ul className="mt-3 flex gap-3">
            {profile.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line transition hover:border-lime hover:text-lime"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={toTop}
            className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-violet px-5 py-2 text-sm font-semibold transition hover:bg-violet"
          >
            ↑ Volver arriba
          </button>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {year ?? ""} {profile.name}. Todos los derechos reservados.
          </p>
          <p>Hecho con Next.js + TypeScript + Tailwind CSS · Desplegado en Vercel</p>
        </div>
      </div>

      {/* Botón flotante volver arriba */}
      <button
        type="button"
        onClick={toTop}
        aria-label="Volver arriba"
        className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-lime text-xl font-bold text-ink shadow-lg transition ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        ↑
      </button>
    </footer>
  );
}
