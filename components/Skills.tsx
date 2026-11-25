import { techGroups, softSkills } from "@/data/content";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { Loop, Arrow } from "./Doodles";

// Inclinaciones "a mano" para que las calcomanías no queden todas iguales.
const tilts = [-6, 4, -2, 7, -4, 2, -8, 5, -3];

export default function Skills() {
  return (
    <section id="habilidades" className="relative px-5 py-20">
      <Loop className="pointer-events-none absolute right-6 top-16 hidden h-28 w-28 text-violet md:block" />
      <Reveal className="mx-auto max-w-6xl rounded-[2rem] border border-line bg-panel p-6 sm:p-10">
        <SectionTitle kicker="Mi caja de herramientas" title="Con qué trabajo" accent="text-lime" />

        <p className="-mt-4 mb-10 flex max-w-xl items-start gap-2 font-hand text-xl text-white/60">
          Sin porcentajes: nadie sabe qué significa saber &ldquo;un 70% de React&rdquo;. Pasa el mouse por una calcomanía y te digo
          dónde la usé.
          <Arrow className="mt-2 hidden h-8 w-10 shrink-0 rotate-[100deg] text-lime sm:block" />
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g, gi) => (
            <Reveal
              key={g.title}
              delay={gi * 90}
              className={gi === 0 ? "lg:col-span-2" : ""}
            >
              <div className="relative h-full rounded-[1.5rem] border-2 border-dashed border-line bg-panel-2 p-5 pt-7">
                {/* Cinta de papel con el nombre del grupo */}
                <span
                  className="absolute -top-4 left-5 rounded-sm px-3 py-1 font-brush text-sm uppercase tracking-wide text-ink shadow-md"
                  style={{ background: g.color, transform: `rotate(${gi % 2 ? 3 : -3}deg)` }}
                >
                  {g.title}
                </span>
                <p className="font-hand text-lg text-muted">{g.note}</p>

                <ul className="mt-4 flex flex-wrap gap-3">
                  {g.items.map((t, i) => (
                    <li key={t.name} className="group relative">
                      <span
                        tabIndex={t.usedIn ? 0 : undefined}
                        className="sticker inline-flex items-center gap-2 rounded-xl border-2 bg-ink px-3 py-1.5 text-sm font-semibold outline-none"
                        style={{
                          borderColor: t.color,
                          ["--tilt" as string]: `${tilts[(i + gi * 2) % tilts.length]}deg`,
                          boxShadow: `3px 3px 0 0 ${t.color}`,
                        }}
                      >
                        <span className="h-2 w-2 rounded-full" style={{ background: t.color }} />
                        {t.name}
                      </span>
                      {t.usedIn && (
                        <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-max max-w-[14rem] -translate-x-1/2 translate-y-1 rounded-lg bg-white px-3 py-1.5 text-center font-hand text-base leading-tight text-ink opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                          lo usé en {t.usedIn}
                          <span className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-white" />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-12 font-hand text-2xl text-lime">Y lo que no se instala con npm</h3>
        <ul className="mt-3 flex flex-wrap gap-3">
          {softSkills.map((s) => (
            <li key={s} className="rounded-full border-2 border-violet px-4 py-1.5 text-sm font-medium">
              {s}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
