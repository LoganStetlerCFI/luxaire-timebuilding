type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden bg-navy-950">
      <svg
        className="pointer-events-none absolute -right-24 -top-24 h-[36rem] w-[36rem] text-navy-700"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="199" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div
        className={`relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 ${
          centered ? "flex flex-col items-center text-center" : ""
        }`}
      >
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-luxaire-400">
            {eyebrow}
          </p>
        )}
        <h1
          className={`mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {title}
        </h1>
        {centered && (
          <div className="mt-5 h-1 w-16 rounded-full bg-luxaire-400" aria-hidden="true" />
        )}
        {description && (
          <p
            className={`mt-5 max-w-xl text-lg leading-8 text-slate-300 ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
