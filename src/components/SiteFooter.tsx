import { Link } from 'react-router';
import { ArrowRight, ArrowUp, Linkedin, Instagram } from 'lucide-react';
import { contact } from '@/data/content';

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="px-6 pt-24 md:px-12 md:pt-32">
        <div className="grid gap-16 border-t border-background/15 pt-16 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="mb-6 text-[15px]">Company</p>
            <ul className="space-y-3 text-[15px] text-background/60">
              {[
                { to: '/', label: 'Home' },
                { to: '/work', label: 'Work' },
                { to: '/services', label: 'Services' },
                { to: '/method', label: 'Method' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-background">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-6 text-[15px]">Visit</p>
            <p className="text-[15px] leading-relaxed text-background/60">
              {contact.address}
              <br />
              Romania
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-block text-[15px] text-background/60 transition-colors hover:text-background"
            >
              {contact.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="mb-6 text-[15px]">Follow</p>
            <ul className="space-y-3 text-[15px] text-background/60">
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <p className="max-w-md text-xl leading-snug tracking-tight md:text-2xl">
              Get sharp thinking on brand, growth, and marketing straight to your inbox.
            </p>
            <form
              className="mt-10 flex items-center gap-4 border-b border-background/40 pb-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email here"
                className="w-full bg-transparent text-2xl tracking-tight text-background placeholder:text-background/40 focus:outline-none md:text-3xl"
              />
              <button aria-label="Subscribe" className="transition-transform hover:translate-x-1">
                <ArrowRight size={28} />
              </button>
            </form>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-background/40">
              We treat your info responsibly. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-center">
          <p className="text-sm text-background/70">
            &copy; 2026 Maiac, Cluj-Napoca
          </p>
          <div className="flex items-center gap-5 text-background/70">
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-background">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-background">
              <Instagram size={20} />
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
