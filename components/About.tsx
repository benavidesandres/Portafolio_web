import Image from "next/image";
import { profile } from "@/data/profile";
import { aboutTags } from "@/data/content";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { Crown, Squiggle } from "./Doodles";
import { ArrowRight } from "./Icons";

export default function About() {
  return (
    <section id="sobre-mi" className="px-5 py-20">
      <Reveal className="mx-auto max-w-6xl rounded-[2rem] border border-line bg-panel p-6 sm:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Tarjeta lima con foto */}
          <div className="relative overflow-hidden rounded-[1.75rem] bg-lime p-6 text-ink">
            <ul className="relative z-10 -rotate-6 font-brush text-2xl uppercase leading-tight">
              {profile.values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
            <Crown className="absolute right-6 top-6 h-10 w-14 text-ink" />
            <div className="relative ml-auto mt-4 aspect-square w-3/4 overflow-hidden rounded-[1.5rem] border-4 border-ink bg-panel-2">
              <Image
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                fill
                sizes="(max-width: 1024px) 70vw, 340px"
                className="object-cover"
                unoptimized={profile.photo.endsWith(".svg")}
              />
            </div>
            <Squiggle className="absolute bottom-6 left-6 h-6 w-24 text-violet" />
          </div>

          {/* Texto */}
          <div>
            <SectionTitle kicker="Conóceme" title="Sobre mí" />
            <div className="space-y-4 text-white/75">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {profile.quickFacts.map((f) => (
                <div key={f.label} className="rounded-2xl border border-line bg-panel-2 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wider text-muted">{f.label}</dt>
                  <dd className="mt-1 font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {aboutTags.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-white/80">
                  {s}
                </li>
              ))}
            </ul>

            <a href="#contacto" className="mt-8 inline-flex items-center gap-2 font-semibold text-lime hover:underline">
              Hablemos
              <span className="grid h-6 w-6 place-items-center rounded-full border border-lime">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
