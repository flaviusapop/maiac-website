import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { services } from '@/data/content';

export default function Services() {
  return (
    <main className="px-6 pt-32 md:px-12 md:pt-44">
      <header className="pb-20 md:pb-28">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(What we do)</p>
        <h1 className="font-display mt-6 text-[13vw] uppercase leading-[0.9] tracking-tight md:text-[9vw]">
          Services
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/70 md:text-xl">
          Strategy, story, marketing, and the technology that compounds it all, for
          technology companies that want to grow faster.
        </p>
      </header>

      <div className="pb-32">
        {services.map((s, i) => (
          <Reveal key={s.id}>
            <section className="grid gap-8 border-t border-border py-14 md:grid-cols-12 md:py-20">
              <div className="md:col-span-4">
                <p className="text-sm text-foreground/50">({String(i + 1).padStart(2, '0')})</p>
                <h2 className="font-display mt-3 text-5xl uppercase tracking-tight md:text-6xl">
                  {s.name}
                </h2>
                <p className="mt-6 max-w-xs text-foreground/60">{s.blurb}</p>
              </div>
              <ul className="md:col-span-7 md:col-start-6">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border py-5 text-xl tracking-tight last:border-b-0 md:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}

        <Reveal>
          <div className="border-t border-border pt-16 text-center md:pt-24">
            <p className="text-sm uppercase tracking-widest text-foreground/60">(Next step)</p>
            <Link
              to="/contact"
              className="font-display mt-6 inline-block text-5xl lowercase tracking-tight transition-opacity hover:opacity-60 md:text-7xl"
            >
              work with us <ArrowRight className="inline" size={40} />
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
