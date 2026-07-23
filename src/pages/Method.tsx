import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { methodSteps, philosophy } from '@/data/content';

export default function Method() {
  return (
    <main className="px-6 pt-32 md:px-12 md:pt-44">
      <header className="pb-20 md:pb-28">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(How we work)</p>
        <h1 className="font-display mt-6 text-[13vw] uppercase leading-[0.9] tracking-tight md:text-[9vw]">
          Method
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/70 md:text-xl">
          We help tech companies communicate their vision and grow, as a partner for both strategy
          and execution.
        </p>
      </header>

      <section className="pb-28">
        {methodSteps.map((s) => (
          <Reveal key={s.n}>
            <div className="grid gap-6 border-t border-border py-14 md:grid-cols-12 md:py-20">
              <p className="text-sm text-foreground/50 md:col-span-2">({s.n})</p>
              <h2 className="font-display text-4xl leading-[1.1] tracking-tight md:col-span-5 md:text-5xl">
                {s.title}
              </h2>
              <p className="max-w-md self-end text-lg leading-relaxed text-foreground/70 md:col-span-4 md:col-start-9">
                {s.text}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Marquee */}
      <section className="-mx-6 overflow-hidden border-y border-border py-6 md:-mx-12">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display flex items-center text-[12vw] uppercase leading-none tracking-tight md:text-[8vw]">
              Clarity
              <span className="mx-[4vw] text-[6vw] md:text-[4vw]">&#10035;</span>
            </span>
          ))}
        </div>
      </section>

      <section className="py-28 md:py-36">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(Our philosophy)</p>
        <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
          {philosophy.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <p className="text-sm text-foreground/50">{p.n}</p>
              <p className="font-display mt-6 text-3xl leading-[1.15] tracking-tight md:text-4xl">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-28 text-center">
            <Link
              to="/work"
              className="font-display inline-block text-5xl lowercase tracking-tight transition-opacity hover:opacity-60 md:text-7xl"
            >
              see it in action <ArrowRight className="inline" size={40} />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
