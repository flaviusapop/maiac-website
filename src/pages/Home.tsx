import { scrollBehavior } from '@/lib/motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import {
  articles,
  caseStudies,
  clients,
  methodSteps,
  philosophy,
  testimonials,
  contact,
} from '@/data/content';

export default function Home() {
  const [t, setT] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[i] as HTMLElement | undefined;
    if (slide) track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: scrollBehavior() });
    setT(i);
  };

  const onTrackScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const pos = track.scrollLeft;
    let nearest = 0;
    let best = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft - track.offsetLeft - pos);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    if (nearest !== t) setT(nearest);
  };

  return (
    <main>
      {/* ————— HERO ————— */}
      <section className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-28 md:px-12 md:pt-36">
        <div>
          <h1 className="font-display uppercase leading-[0.95] tracking-tight">
            <span className="mask-line type-hero">
              <span>A signal of</span>
            </span>
            <span className="mask-line text-right type-hero">
              <span style={{ animationDelay: '120ms' }}>direction</span>
            </span>
            <span className="mask-line type-hero">
              <span style={{ animationDelay: '240ms' }}>
                <span className="mr-[2vw] inline-block align-baseline">&amp;</span>clarity
              </span>
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
              className="aspect-[16/10] w-full object-cover motion-safe:transition-transform duration-1000 ease-out [@media(hover:hover)_and_(pointer:fine)]:motion-safe:hover:scale-[1.03]"
            />
          </div>
        </Reveal>
        <div className="marquee-window mt-10 overflow-clip" aria-label="Strategy, Brand, Marketing, Development">
          <div className="marquee-track animate-marquee-slow flex w-max items-center whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} aria-hidden={i > 0} className={`text-sm uppercase tracking-wide md:text-base ${i > 0 ? 'marquee-duplicate' : ''}`}>
                Strategy <span className="mx-3">&bull;</span> Brand <span className="mx-3">&bull;</span>{' '}
                Marketing <span className="mx-3">&bull;</span> Development{' '}
                <span className="mx-3">&bull;</span>{' '}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ————— STATEMENT ————— */}
      <section className="grid gap-10 px-6 section-space md:grid-cols-12 md:px-12 ">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-lg tracking-tight md:text-xl">The force multiplier for your growth team.</p>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <h2 className="font-display type-heading leading-[1.08] tracking-tight ">
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
        <h2 className="font-display absolute inset-0 grid grid-cols-[minmax(0,1fr)] place-items-center px-6 text-center type-display uppercase leading-none tracking-tight text-background ">
          <span className="w-full [overflow-wrap:anywhere]">Stories that<br />cut through</span>
        </h2>
      </section>

      {/* ————— TRUSTED BY ————— */}
      <section className="px-6 section-space md:px-12 ">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(Trusted by)</p>
        <div className="marquee-window mt-10 overflow-clip">
          <div className="marquee-track animate-marquee-slow flex w-max items-center gap-16 whitespace-nowrap md:gap-24">
            {[...clients, ...clients].map((c, i) => (
              <p key={`${c}-${i}`} aria-hidden={i >= clients.length} className={`font-display text-3xl tracking-tight md:text-4xl ${i >= clients.length ? 'marquee-duplicate' : ''}`}>
                {c}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SELECTED WORK ————— */}
      <section className="px-6 section-end md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display type-display uppercase leading-[0.9] tracking-tight ">
            Selected
            <br />
            work
          </h2>
          <Link to="/work" className="link-underline mb-4 text-lg tracking-tight md:text-xl">
            See all case studies <ArrowRight className="inline" size={18} />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(100%,24rem),1fr))]">
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
                  <span className="font-display relative px-6 text-center type-card lowercase tracking-tight motion-safe:transition-transform duration-500 [@media(hover:hover)_and_(pointer:fine)]:motion-safe:group-hover:-translate-y-2 ">
                    {c.client}
                  </span>
                  <ArrowRight
                    className="card-arrow absolute bottom-6 right-6 motion-safe:transition-[transform,opacity] duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100"
                    size={28}
                  />
                </div>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
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

      {/* ————— INSIGHTS ————— */}
      <section className="border-t border-border px-6 section-space md:px-12 ">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="max-w-xs text-lg leading-snug tracking-tight md:text-xl">
                Sharp thinking on brand, growth, and marketing for the next era of tech.
              </p>
              <div className="mt-10 flex flex-col items-start gap-3 text-sm uppercase tracking-widest">
                <span className="link-underline">Articles</span>
                <span className="text-foreground/40">Press</span>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <Link
                  to="/method"
                  className="group flex flex-wrap items-center gap-6 border-t border-border py-6 last:border-b"
                >
                  <div className="h-16 w-16 shrink-0 bg-secondary transition-colors [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-accent" />
                  <p className="basis-[8rem] grow text-lg leading-snug tracking-tight md:text-xl">{a.title}</p>
                  <span className="shrink-0 text-xs uppercase tracking-widest text-foreground/50">
                    {a.tag}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— PHILOSOPHY ————— */}
      <section className="border-t border-border px-6 section-space md:px-12 ">
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
      <section className="border-t border-border px-6 section-space md:px-12 ">
        <div className="flex items-end justify-between">
          <h2 className="font-display type-heading uppercase leading-[0.95] tracking-tight ">
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
              {t + 1} &mdash; {testimonials.length}
            </p>
            <div className="flex gap-3">
              <button
                aria-label="Previous testimonial"
                onClick={() => scrollToSlide((t - 1 + testimonials.length) % testimonials.length)}
                className="border border-border p-3 transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:bg-foreground [@media(hover:hover)_and_(pointer:fine)]:hover:text-background"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => scrollToSlide((t + 1) % testimonials.length)}
                className="border border-border p-3 transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:bg-foreground [@media(hover:hover)_and_(pointer:fine)]:hover:text-background"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            onScroll={onTrackScroll}
            tabIndex={0}
            role="region"
            aria-label="Client testimonials, swipe or use arrow keys to browse"
            className="testimonial-track no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto"
          >
            {testimonials.map((item) => (
              <div
                key={item.company}
                className="w-[85%] shrink-0 snap-start border border-border bg-white p-8 md:w-[70%] md:p-16"
              >
                <p className="text-sm uppercase tracking-widest text-foreground/50">{item.company}</p>
                <blockquote className="font-display mt-8 max-w-4xl text-2xl leading-[1.3] tracking-tight md:text-4xl">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
                <p className="mt-10 text-foreground/70">
                  {item.author}, {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— MARQUEE ————— */}
      <section className="marquee-window overflow-clip border-y border-border py-6">
        <div className="marquee-track animate-marquee flex w-max items-center whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} aria-hidden={i > 0} className={`font-display flex items-center ${i > 0 ? 'marquee-duplicate' : ''} type-display uppercase leading-none tracking-tight `}>
              Method
              <span className="mx-[4vw] text-[6vw] md:text-[4vw]">&#10035;</span>
            </span>
          ))}
        </div>
      </section>

      {/* ————— METHOD PREVIEW ————— */}
      <section className="px-6 section-space md:px-12 ">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display type-heading leading-[1.08] tracking-tight ">
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

      {/* ————— ABOUT PREVIEW ————— */}
      <section className="border-t border-border px-6 section-space md:px-12 ">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(About Maiac)</p>
        <div className="mt-12 grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden bg-foreground">
                <img
                  src={`${import.meta.env.BASE_URL}assets/beam.png`}
                  alt="Light beam over the sea near Cluj-Napoca"
                  className="aspect-[4/5] w-full object-cover opacity-80 motion-safe:transition-transform duration-1000 ease-out [@media(hover:hover)_and_(pointer:fine)]:motion-safe:hover:scale-[1.03]"
                />
                <p className="absolute bottom-5 left-5 text-sm uppercase tracking-widest text-background">
                  Maiac
                  <br />
                  (Cluj-Napoca)
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={100}>
              <p className="font-display text-3xl leading-[1.15] tracking-tight md:text-4xl">
                An independent consultancy trusted by technology companies across Europe for over a
                decade.
              </p>
              <Link to="/about" className="link-underline mt-10 inline-block text-xl tracking-tight">
                Learn more about Maiac <ArrowRight className="inline" size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— CTA ————— */}
      <section className="border-t border-border px-6 section-space text-center md:px-12 ">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-foreground/60">(Come say hi)</p>
          <Link
            to="/contact"
            className="font-display mt-8 block type-display lowercase leading-none tracking-tight transition-opacity [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-60 "
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
