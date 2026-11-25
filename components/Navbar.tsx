"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "experiencia", label: "Experiencia" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (s): s is HTMLElement => !!s,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Cierra el menú móvil con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20">
        <a href="#inicio" className="font-brush text-2xl tracking-wide" onClick={() => setOpen(false)}>
          {profile.shortName}
          <span className="text-lime">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative py-1 transition-colors hover:text-lime ${
                  active === l.id ? "text-lime" : "text-white/85"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded bg-lime transition-all ${
                    active === l.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          className="grid h-12 w-12 place-items-center rounded-full bg-violet transition hover:scale-105 hover:bg-violet-2 lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-white transition-all ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-white transition-all ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </nav>

      <div
        id="menu-movil"
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[28rem]" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-6">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-panel-2 ${
                  active === l.id ? "bg-panel-2 text-lime" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
