import Image from "next/image";
import { profile } from "@/data/profile";
import { DownloadIcon, ArrowUpRight } from "./Icons";
import { Blob, Star, Bolt, Crown, Smiley, Arrow, Underline, Loop, Sparks } from "./Doodles";

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:min-h-screen lg:pb-24">
      {/* Manchas de fondo */}
      <Blob className="pointer-events-none absolute -left-40 -top-40 h-72 w-72 text-violet opacity-90 sm:h-[30rem] sm:w-[30rem]" />
      <Blob className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rotate-90 text-sky opacity-80" />
      <Blob className="pointer-events-none absolute -right-28 top-24 hidden h-80 w-80 -rotate-45 text-coral opacity-80 lg:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_1fr]">
        {/* Texto */}
        <div className="relative">
          <p className="flex items-center gap-2 font-hand text-3xl text-white/90">
            Hola,
            <Arrow className="h-10 w-12 rotate-12 text-white/80" />
          </p>
          <h1 className="relative mt-1 font-brush uppercase leading-[0.9]">
            <span className="block text-5xl sm:text-6xl">Soy</span>
            <span className="relative inline-block text-6xl sm:text-8xl">
              {first}
              <Crown className="absolute -right-12 -top-6 h-10 w-14 -rotate-12 text-lime animate-wiggle" />
              <Underline className="absolute -bottom-4 left-0 h-5 w-full text-lime" />
            </span>
            {rest.length > 0 && (
              <span className="mt-3 block text-3xl text-white/70 sm:text-4xl">{rest.join(" ")}</span>
            )}
          </h1>

          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium sm:text-xl">
            {profile.roles.map((r, i) => (
              <li key={r} className="flex items-center gap-3">
                {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-lime" />}
                {r}
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-lg text-white/70">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={profile.cv}
              download
              className="group inline-flex items-center gap-3 rounded-full bg-lime px-7 py-3.5 font-semibold text-ink shadow-[0_0_0_0_#c8f53a] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_#c8f53a]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-lime">
                <DownloadIcon className="h-4 w-4 transition group-hover:translate-y-0.5" />
              </span>
              Descargar CV
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-3 rounded-full border-2 border-violet px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:bg-violet"
            >
              Ver proyectos
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <Smiley className="absolute -bottom-4 right-6 hidden h-12 w-12 -rotate-12 text-lime sm:block animate-float" />
        </div>

        {/* Foto */}
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <div className="absolute inset-4 rotate-6 rounded-[2.5rem] bg-violet" />
          <div className="absolute inset-4 -rotate-3 rounded-[2.5rem] border-2 border-dashed border-lime/70" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-ink bg-panel-2">
            <Image
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 450px"
              className="object-cover"
              unoptimized={profile.photo.endsWith(".svg")}
            />
          </div>

          {/* Globo de diálogo */}
          <div className="absolute -left-4 -top-6 z-10 sm:-left-10 animate-float" style={{ ["--r" as string]: "-10deg" }}>
            <div className="relative rounded-[2rem] bg-sky px-5 py-3 text-center font-brush text-sm uppercase leading-tight text-ink shadow-lg">
              ¡Creemos algo
              <br />
              increíble!
              <span className="absolute -bottom-2 right-6 h-5 w-5 rotate-45 bg-sky" />
            </div>
          </div>

          <Star className="absolute -right-2 top-6 h-9 w-9 text-[#ffc83d] animate-wiggle" />
          <Bolt className="absolute -bottom-6 left-6 h-12 w-12 -rotate-12 text-lime" />
          <Loop className="absolute -right-8 bottom-10 hidden h-20 w-20 text-sky sm:block" />
          <Sparks className="absolute -right-4 top-1/2 h-7 w-7 text-coral" />
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#sobre-mi"
        className="relative mx-auto mt-16 hidden w-max items-center gap-3 text-xs font-medium uppercase tracking-widest text-white/60 transition hover:text-lime lg:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border-2 border-current pt-1.5">
          <span className="h-2 w-1 rounded-full bg-current animate-scroll-dot" />
        </span>
        Desliza
      </a>
    </section>
  );
}
