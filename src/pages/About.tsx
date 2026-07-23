import { Link } from 'react-router';
import Reveal from '@/components/Reveal';
import { contact, philosophy } from '@/data/content';

export default function About() {
  return (
    <main className="px-6 pt-32 md:px-12 md:pt-44">
      <header className="pb-20 md:pb-28">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(About Maiac)</p>
        <h1 className="font-display mt-6 text-[13vw] uppercase leading-[0.9] tracking-tight md:text-[9vw]">
          The
          <br />
          lighthouse
        </h1>
      </header>

      <section className="grid gap-10 border-t border-border py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-lg tracking-tight md:text-xl">What does Maiac mean?</p>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight md:text-6xl">
              Maiac means lighthouse: a signal of direction and clarity.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/70">
              We want our work to guide companies through the complexity of constant change, helping
              them move faster and get ahead in shifting markets. We are a marketing consultancy and
              execution agency working with global technology companies to help them communicate
              better and grow faster.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Reveal>
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-display text-3xl leading-[1.25] tracking-tight md:text-5xl">
              &ldquo;We give companies a partner for both strategy and execution, and the expertise
              to turn their mission, vision and brand narrative into a powerful sales hook.&rdquo;
            </p>
            <footer className="mt-10 text-foreground/70">
              Andreea Pop, Co-Founder &amp; Head of Brand and Strategy
            </footer>
          </blockquote>
        </Reveal>
      </section>

      <section className="border-t border-border py-20 md:py-28">
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

      <section className="border-t border-border py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-lg tracking-tight md:text-xl">The team</p>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="font-display text-3xl leading-[1.15] tracking-tight md:text-4xl">
                A senior team of craftspeople who understand the importance of great strategy
                execution.
              </p>
              <div className="mt-12 border-t border-border">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border py-6">
                  <p className="text-2xl tracking-tight">Andreea Pop</p>
                  <p className="text-foreground/60">Co-Founder &amp; Head of Brand and Strategy</p>
                </div>
              </div>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/70">
                The same senior team handles strategy and execution, from positioning and narrative
                to campaigns and websites.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 text-center md:py-36">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-foreground/60">(Come say hi)</p>
          <Link
            to="/contact"
            className="font-display mt-8 block text-[13vw] lowercase leading-none tracking-tight transition-opacity hover:opacity-60 md:text-[9vw]"
          >
            let&rsquo;s talk
          </Link>
          <p className="mt-10 text-foreground/60">{contact.address}</p>
          <a href={`mailto:${contact.email}`} className="link-underline mt-2 inline-block text-xl tracking-tight">
            {contact.email}
          </a>
        </Reveal>
      </section>
    </main>
  );
}
