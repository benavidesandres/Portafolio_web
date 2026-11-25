import { Squiggle, StarOutline } from "./Doodles";

export default function SectionTitle({
  kicker,
  title,
  accent = "text-violet",
}: {
  kicker: string;
  title: string;
  accent?: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 flex items-center gap-2 font-hand text-xl text-lime">
        <StarOutline className="h-4 w-4" />
        {kicker}
      </p>
      <h2 className="flex flex-wrap items-center gap-4 font-brush text-4xl uppercase tracking-wide sm:text-5xl">
        {title}
        <Squiggle className={`h-6 w-20 ${accent}`} />
      </h2>
    </div>
  );
}
