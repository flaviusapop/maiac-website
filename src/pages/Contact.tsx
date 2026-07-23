import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { contact } from '@/data/content';

export default function Contact() {
  return (
    <main className="px-6 pt-32 md:px-12 md:pt-44">
      <header className="pb-20 md:pb-28">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(Contact)</p>
        <h1 className="font-display mt-6 text-[13vw] lowercase leading-[0.9] tracking-tight md:text-[9vw]">
          come say hi :)
        </h1>
      </header>

      <section className="grid gap-16 border-t border-border py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-foreground/60">(Write)</p>
            <a
              href={`mailto:${contact.email}`}
              className="link-underline mt-6 inline-block text-2xl tracking-tight md:text-3xl"
            >
              {contact.email}
            </a>

            <p className="mt-16 text-sm uppercase tracking-widest text-foreground/60">(Visit)</p>
            <p className="mt-6 text-2xl tracking-tight md:text-3xl">{contact.address}</p>
            <p className="mt-2 text-foreground/60">Romania</p>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={100}>
            <form
              className="space-y-10"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`New inquiry from ${data.get('name')}`);
                const body = encodeURIComponent(
                  `Name: ${data.get('name')}\nCompany: ${data.get('company')}\n\n${data.get('message')}`,
                );
                window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label htmlFor="name" className="text-sm uppercase tracking-widest text-foreground/60">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-3 w-full border-b border-foreground/30 bg-transparent pb-3 text-2xl tracking-tight focus:border-foreground focus:outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="company" className="text-sm uppercase tracking-widest text-foreground/60">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  className="mt-3 w-full border-b border-foreground/30 bg-transparent pb-3 text-2xl tracking-tight focus:border-foreground focus:outline-none"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm uppercase tracking-widest text-foreground/60">
                  What are you building?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-3 w-full resize-none border-b border-foreground/30 bg-transparent pb-3 text-2xl tracking-tight focus:border-foreground focus:outline-none"
                  placeholder="Tell us where you want to go."
                />
              </div>
              <button
                type="submit"
                className="group flex items-center gap-3 border border-foreground px-8 py-4 text-lg tracking-tight transition-colors hover:bg-foreground hover:text-background"
              >
                Send message
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
