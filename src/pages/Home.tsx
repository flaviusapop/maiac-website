import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { caseStudies, clients, methodSteps, philosophy, testimonials, contact } from '@/data/content';

export default function Home() {
  const [t, setT] = useState(0);

  return (
    <main>
      {/* ————— HERO ————— */}
      <section className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-28 md:px-12 md:pt-36">
        <div>
          <h1 className="font-display uppercase leading-[0.95] tracking-tight">
            <span className="block text-[13.5vw] md:text-[10.5vw]">A signal of</span>
            <span className="block text-right text-[13.5vw] md:text-[10.5vw]">direction</span>
            <span className="block text-[13.5vw] md:text-[10.5vw]">
              <span className="mr-[2vw] inline-block align-baseline">&amp;</span>clarity
            </span>
          </h1>
        </div>

        <div className="mt-16 flex items-end justify-between gap-8">
          <div className="max-w-xs">
            <ArrowDown size={44} strokeWidth={1.2} className="mb-8" />
            <p className="text-lg leading-snug tracking-tight md:text-xl">
              Maiac is a marketing consultancy &amp; execution agency working with global technology
              companies to help them communicate better and grow faster.
            </p>
          </div>
          <p className="hidden shrink-0 text-sm uppercase tracking-widest text-foreground/60 md:block">
            (Scroll)
          </p>
        </div>
      </section>

      {/* ————— LIGHTHOUSE BAND ————— */}
      <section className="px-6 py-10 md:px-12">
        <Reveal>
          <div className="overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}assets/lighthouse.png`}
              alt="Lighthouse in fog"
              className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
            />
          </div>
        </Reveal>
        <p className="mt-10 text-center text-sm uppercase tracking-wide md:text-base">
          Strategy &bull; Brand &bull; Marketing &bull; Development
        </p>
      </section>

      {/* ————— STATEMENT ————— */}
      <section className="grid gap-10 px-6 py-28 md:grid-cols-12 md:px-12 md:py-40">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-lg tracking-tight md:text-xl">The force multiplier for your growth team.</p>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight md:text-6xl">
              Great marketing isn&rsquo;t about more assets. It&rsquo;s about sharper stories.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/70">
              We work inside growth teams as a strategy and execution partner, turning growth
              visions into brand stories, campaign headlines, and customer journeys that captivate
              and convert.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-14 text-sm uppercase tracking-widest">(Where to next)</p>
            <div className="mt-6 flex flex-col items-start gap-4 text-xl tracking-tight md:text-2xl">
              <Link to="/services" className="link-underline">
                Explore our services <ArrowRight className="inline" size={20} />
              </Link>
              <Link to="/work" className="link-underline">
                See our case studies <ArrowRight className="inline" size={20} />
              </Link>
              <Link to="/method" className="link-underline">
                Discover how we work <ArrowRight className="inline" size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— BEAM BAND ————— */}
      <section className="relative">
        <img src={`${import.meta.env.BASE_URL}assets/beam.png`} alt="Beam of light over a dark sea" className="h-[70vh] w-full object-cover" />
        <h2 className="font-display absolute inset-0 flex items-center justify-center px-6 text-center text-[11vw] uppercase leading-none tracking-tight text-background md:text-[8vw]">
          Stories that
          <br />
          cut through
        </h2>
      </section>

      {/* ————— TRUSTED BY ————— */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(Trusted by)</p>
        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-4">
          {clients.map((c, i) => (
            <Reveal key={c} delay={i * 80}>
              <p className="font-display text-3xl tracking-tight md:text-4xl">{c}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— SELECTED WORK ————— */}
      <section className="px-6 pb-28 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[13vw] uppercase leading-[0.9] tracking-tight md:text-[8.5vw]">
            Selected
            <br />
            work
          </h2>
          <Link to="/work" className="link-underline mb-4 text-lg tracking-tight md:text-xl">
            See all case studies <ArrowRight className="inline" size={18} />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 100}>
              <Link to={`/work#${c.id}`} className="group block">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-border bg-white">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.35]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)',
                      backgroundSize: '25% 25%',
                    }}
                  />
                  <span className="font-display relative px-6 text-center text-[13vw] lowercase tracking-tight transition-transform duration-500 group-hover:-translate-y-2 md:text-[5vw]">
                    {c.client}
                  </span>
                  <ArrowRight
                    className="absolute bottom-6 right-6 opacity-0 transition-all duration-300 group-hover:opacity-100"
                    size={28}
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-xl tracking-tight">{c.client}</p>
                    <p className="text-foreground/60">{c.tagline}</p>
                  </div>
                  <p className="shrink-0 text-foreground/60">{c.category}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— PHILOSOPHY ————— */}
      <section className="border-t border-border px-6 py-28 md:px-12 md:py-36">
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
      </section>

      {/* ————— TESTIMONIALS ————— */}
      <section className="border-t border-border px-6 py-28 md:px-12 md:py-36">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl">
            Praise from
            <br />
            clients
          </h2>
          <p className="hidden text-sm text-foreground/60 md:block">
            What leaders say about working with Maiac
          </p>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/50">
              {t + 1} / {testimonials.length}
            </p>
            <div className="flex gap-3">
              <button
                aria-label="Previous testimonial"
                onClick={() => setT((t - 1 + testimonials.length) % testimonials.length)}
                className="border border-border p-3 transition-colors hover:bg-foreground hover:text-background"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => setT((t + 1) % testimonials.length)}
                className="border border-border p-3 transition-colors hover:bg-foreground hover:text-background"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-8 border border-border bg-white p-10 md:p-16">
            <p className="text-sm uppercase tracking-widest text-foreground/50">
              {testimonials[t].company}
            </p>
            <blockquote className="font-display mt-8 max-w-4xl text-2xl leading-[1.3] tracking-tight md:text-4xl">
              &ldquo;{testimonials[t].text}&rdquo;
            </blockquote>
            <p className="mt-10 text-foreground/70">
              {testimonials[t].author}, {testimonials[t].role}
            </p>
          </div>
        </div>
      </section>

      {/* ————— MARQUEE ————— */}
      <section className="overflow-hidden border-y border-border py-6">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display flex items-center text-[12vw] uppercase leading-none tracking-tight md:text-[8vw]">
              Method
              <span className="mx-[4vw] text-[6vw] md:text-[4vw]">&#10035;</span>
            </span>
          ))}
        </div>
      </section>

      {/* ————— METHOD PREVIEW ————— */}
      <section className="px-6 py-28 md:px-12 md:py-36">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-4xl leading-[1.08] tracking-tight md:text-6xl">
                Turning growth visions into measurable progress.
              </h2>
              <Link to="/method" className="link-underline mt-10 inline-block text-xl tracking-tight">
                How we work <ArrowRight className="inline" size={18} />
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            {methodSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="flex gap-8 border-t border-border py-8">
                  <span className="text-sm text-foreground/50">({s.n})</span>
                  <div>
                    <p className="text-xl tracking-tight md:text-2xl">{s.title}</p>
                    <p className="mt-2 max-w-md text-foreground/60">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— CTA ————— */}
      <section className="border-t border-border px-6 py-28 text-center md:px-12 md:py-40">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-foreground/60">(Come say hi)</p>
          <Link
            to="/contact"
            className="font-display mt-8 block text-[13vw] lowercase leading-none tracking-tight transition-opacity hover:opacity-60 md:text-[9vw]"
          >
            let&rsquo;s talk
          </Link>
          <a href={`mailto:${contact.email}`} className="link-underline mt-10 inline-block text-xl tracking-tight">
            {contact.email}
          </a>
        </Reveal>
      </section>
    </main>
  );
}
