import { academic, work, type ExperienceItem } from "@/data/content";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function Timeline({
  title,
  emoji,
  items,
  color,
}: {
  title: string;
  emoji: string;
  items: ExperienceItem[];
  color: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-line bg-panel p-6 sm:p-8">
      <h3 className="flex items-center gap-3 font-brush text-2xl uppercase">
        <span className="grid h-11 w-11 place-items-center rounded-2xl text-xl" style={{ background: color }}>
          {emoji}
        </span>
        {title}
      </h3>
      <ol className="relative mt-8 space-y-8 border-l-2 border-dashed border-line pl-7">
        {items.map((it, i) => (
          <li key={i} className="relative">
            <span
              className="absolute -left-[2.15rem] top-1 h-4 w-4 rounded-full border-4 border-panel"
              style={{ background: color }}
            />
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>
              {it.start === it.end ? it.start : `${it.start} – ${it.end}`}
            </p>
            <h4 className="mt-1 text-lg font-semibold">{it.title}</h4>
            <p className="text-sm text-muted">{it.place}</p>
            <p className="mt-2 text-sm text-white/75">{it.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Mi recorrido" title="Experiencia" accent="text-sky" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Timeline title="Académica" emoji="🎓" items={academic} color="#c8f53a" />
          </Reveal>
          <Reveal delay={120}>
            <Timeline title="Laboral" emoji="💼" items={work} color="#7b3cf5" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
