import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { contact } from '@/data/content';

export default function Contact() {
  const [emailOpened, setEmailOpened] = useState(false);
  return (
    <main className="page-shell px-6 pt-32 md:px-12 md:pt-44">
      <header className="pb-20 md:section-end">
        <p className="text-sm uppercase tracking-widest text-foreground/60">(Contact)</p>
        <h1 className="font-display mt-6 type-display lowercase leading-[0.9] tracking-tight ">
          come say hi :)
        </h1>
      </header>

      <section className="grid gap-16 border-t border-border section-space md:grid-cols-12 ">
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
              className="space-y-10" aria-describedby="email-handoff"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`New inquiry from ${data.get('name')}`);
                const body = encodeURIComponent(
                  `Name: ${data.get('name')}\nCompany: ${data.get('company')}\n\n${data.get('message')}`,
                );
                setEmailOpened(true);
                window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label htmlFor="name" className="text-sm uppercase tracking-widest text-foreground/60">
                  Your name
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  aria-describedby="name-error"
                  name="name"
                  required
                  className="contact-field mt-3 w-full border-b border-foreground/30 bg-transparent pb-3 text-2xl tracking-tight focus:border-foreground "
                  placeholder="Jane Doe"
                />
                <p id="name-error" className="field-error">Please enter your name.</p>
              </div>
              <div>
                <label htmlFor="company" className="text-sm uppercase tracking-widest text-foreground/60">
                  Company
                </label>
                <input
                  id="company"
                  autoComplete="organization"
                  name="company"
                  className="contact-field mt-3 w-full border-b border-foreground/30 bg-transparent pb-3 text-2xl tracking-tight focus:border-foreground "
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm uppercase tracking-widest text-foreground/60">
                  What are you building?
                </label>
                <textarea
                  id="message"
                  aria-describedby="message-error"
                  name="message"
                  rows={4}
                  required
                  className="contact-field mt-3 w-full resize-y border-b border-foreground/30 bg-transparent pb-3 text-2xl tracking-tight focus:border-foreground "
                  placeholder="Tell us where you want to go."
                />
                <p id="message-error" className="field-error">Please tell us what you are building.</p>
              </div>
              <p id="email-handoff" className="text-sm leading-relaxed text-foreground/70">
                This opens a draft in your email app. Review it there and send it to {contact.email}.
              </p>
              <p role="status" className="text-sm text-foreground/70">
                {emailOpened ? 'Your email draft is ready to open. If no app opened, use the email link on this page.' : ''}
              </p>
              <button
                type="submit"
                className="group flex items-center gap-3 border border-foreground px-8 py-4 text-lg tracking-tight transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:bg-foreground [@media(hover:hover)_and_(pointer:fine)]:hover:text-background"
              >
                Open email draft
                <ArrowRight size={20} className="motion-safe:transition-transform [@media(hover:hover)_and_(pointer:fine)]:motion-safe:group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
