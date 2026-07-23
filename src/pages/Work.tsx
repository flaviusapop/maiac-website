import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Reveal from '@/components/Reveal';
import { caseStudies } from '@/data/content';

export default function Work() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <main className="px-6 pt-32 md:px-12 md:pt-44">
      <header className="pb-20 md:pb-28">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(Case studies)</p>
        <h1 className="font-display mt-6 text-[13vw] uppercase leading-[0.9] tracking-tight md:text-[9vw]">
          Selected
          <br />
          work
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/70 md:text-xl">
          A few of the technology companies we&rsquo;ve helped communicate better and grow faster.
        </p>
      </header>

      <div className="space-y-32 pb-32">
        {caseStudies.map((c, idx) => (
          <article key={c.id} id={c.id} className="scroll-mt-32 border-t border-border pt-16">
            <Reveal>
              <div className="grid gap-12 md:grid-cols-12">
                <div className="md:col-span-5">
                  <p className="text-sm text-foreground/50">({String(idx + 1).padStart(2, '0')})</p>
                  <h2 className="font-display mt-4 text-6xl lowercase tracking-tight md:text-7xl">
                    {c.client}
                  </h2>
                  <p className="mt-4 text-xl text-foreground/60">{c.tagline}</p>

                  <div className="mt-12 flex flex-wrap gap-x-12 gap-y-8">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-5xl tracking-tight md:text-6xl">{s.value}</p>
                        <p className="mt-2 max-w-[180px] text-sm text-foreground/60">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-6 md:col-start-7">
                  {c.summary.map((p, i) => (
                    <p key={i} className="mb-6 text-lg leading-relaxed text-foreground/80">
                      {p}
                    </p>
                  ))}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <span
                        key={s}
                        className="border border-border px-4 py-1.5 text-sm text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <blockquote className="mt-16 border border-border bg-white p-10 md:p-14">
                <p className="font-display max-w-3xl text-2xl leading-[1.3] tracking-tight md:text-3xl">
                  &ldquo;{c.quote.text}&rdquo;
                </p>
                <footer className="mt-8 text-foreground/70">
                  {c.quote.author}, {c.quote.role}
                </footer>
              </blockquote>
            </Reveal>
          </article>
        ))}
      </div>
    </main>
  );
}
