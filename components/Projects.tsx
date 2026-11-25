import Image from "next/image";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { GithubIcon, ArrowUpRight, ArrowRight } from "./Icons";

export default function Projects() {
  const github = profile.socials.find((s) => s.icon === "github")?.href;

  return (
    <section id="proyectos" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle kicker="Lo que he construido" title="Proyectos" />
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-lime hover:underline"
            >
              Ver todo en GitHub <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-panel transition duration-300 hover:-translate-y-1.5 hover:border-violet hover:shadow-[0_20px_50px_-20px_#7b3cf5]">
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`Captura de ${p.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center text-7xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {p.emoji}
                    </span>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-brush text-xl uppercase tracking-wide">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-white/70">{p.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-violet/15 px-2.5 py-0.5 text-xs font-medium text-[#b99bff]">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-2 text-sm font-semibold transition hover:border-white"
                    >
                      <GithubIcon className="h-4 w-4" /> Código
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime py-2 text-sm font-semibold text-ink transition hover:brightness-110"
                      >
                        Demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
