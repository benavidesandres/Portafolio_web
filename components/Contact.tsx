"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import { MailIcon, PinIcon, PhoneIcon, socialIcons } from "./Icons";
import { Bolt } from "./Doodles";

// Si creas un formulario en https://formspree.io pon su ID en .env.local:
// NEXT_PUBLIC_FORMSPREE_ID=xxxxxxx  → los mensajes llegarán a tu correo.
// Sin ID, el botón abre la app de correo del visitante con el mensaje ya escrito.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const errs: Record<string, string> = {};
    if (name.length < 2) errs.name = "Escribe tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Escribe un correo válido.";
    if (message.length < 10) errs.message = "El mensaje debe tener al menos 10 caracteres.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error();
      } else {
        const subject = encodeURIComponent(`Mensaje desde tu portafolio — ${name}`);
        const body = encodeURIComponent(`${message}

${name} · ${email}`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-2xl border border-line bg-panel-2 px-4 py-3 outline-none transition placeholder:text-white/35 focus:border-lime focus:ring-2 focus:ring-lime/30";

  return (
    <section id="contacto" className="px-5 py-20">
      <Reveal className="mx-auto max-w-6xl rounded-[2rem] border border-line bg-panel p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-brush text-4xl uppercase leading-tight sm:text-5xl">
              Hagamos algo
              <br />
              <span className="relative inline-block px-3 text-lime">
                épico!
                <svg viewBox="0 0 200 80" className="absolute inset-0 -left-1 h-full w-[110%]" fill="none" aria-hidden>
                  <path
                    d="M30 12C80 0 170 2 190 30s-40 44-110 44S2 60 8 36 60 6 120 8"
                    stroke="#7b3cf5"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <Bolt className="ml-2 inline h-10 w-10 text-lime animate-wiggle" />
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              ¿Tienes un proyecto, una oferta o solo quieres saludar? Escríbeme y te respondo lo antes posible.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 hover:text-lime">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-line group-hover:border-lime">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4 hover:text-lime">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-line group-hover:border-lime">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-line">
                  <PinIcon className="h-5 w-5" />
                </span>
                {profile.location}
              </li>
            </ul>

            <ul className="mt-8 flex gap-3">
              {profile.socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-12 w-12 place-items-center rounded-full border border-line transition hover:-translate-y-1 hover:border-lime hover:bg-lime hover:text-ink"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {status === "sent" ? (
            <div role="status" className="flex flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-lime p-10 text-center">
              <span className="text-6xl">🎉</span>
              <p className="mt-4 font-brush text-3xl uppercase text-lime">¡Mensaje enviado!</p>
              <p className="mt-2 text-white/70">Gracias por escribirme. Te responderé muy pronto.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full border-2 border-violet px-6 py-2.5 font-semibold transition hover:bg-violet"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Nombre</label>
                <input id="name" name="name" type="text" required minLength={2} autoComplete="name" placeholder="Tu nombre" className={field} aria-invalid={!!errors.name} />
                {errors.name && <p className="mt-1 text-sm text-coral">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Correo</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="tu@correo.com" className={field} aria-invalid={!!errors.email} />
                {errors.email && <p className="mt-1 text-sm text-coral">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Mensaje</label>
                <textarea id="message" name="message" required minLength={10} rows={5} placeholder="Cuéntame tu idea…" className={`${field} resize-none`} aria-invalid={!!errors.message} />
                {errors.message && <p className="mt-1 text-sm text-coral">{errors.message}</p>}
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-coral">No se pudo enviar. Inténtalo de nuevo o escríbeme al correo.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-lime py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_#c8f53a] disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
