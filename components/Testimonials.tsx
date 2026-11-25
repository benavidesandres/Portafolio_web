import Image from "next/image";
import { testimonials } from "@/data/content";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function Testimonials() {
  return (
    <section id="testimonios" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Lo que dicen de mí" title="Testimonios" accent="text-coral" />

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 110} className={i % 2 ? "md:mt-12" : ""}>
              <figure
                className="relative flex h-full flex-col rounded-[1.5rem] border border-line bg-panel p-6 transition hover:!rotate-0"
                style={{ boxShadow: `6px 6px 0 0 ${t.color}`, rotate: `${[-1, 1.2, 0.6, -1.4][i % 4]}deg` }}
              >
                <span className="absolute -top-5 right-6 font-brush text-6xl leading-none" style={{ color: t.color }} aria-hidden>
                  “
                </span>
                <blockquote className="flex-1 text-lg leading-relaxed text-white/85">{t.text}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full font-bold text-ink"
                    style={{ background: t.color }}
                  >
                    {t.avatar ? (
                      <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
                    ) : (
                      initials(t.name)
                    )}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
