import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/method', label: 'Method' },
  { to: '/about', label: 'About' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-7">
          <Link to="/" aria-label="Maiac home" className="relative z-50 block w-[120px] md:w-[150px]">
            <img src={`${import.meta.env.BASE_URL}assets/maiac-logo.png`} alt="maiac" className="w-full" />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[15px] tracking-tight transition-opacity hover:opacity-60 ${
                    isActive ? 'link-underline' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <Link to="/contact" className="link-underline text-[15px] tracking-tight">
                Work with us
              </Link>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className={`link-underline relative z-50 flex items-center gap-2 text-[15px] tracking-tight md:hidden ${
                open ? 'text-background' : ''
              }`}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-foreground text-background transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col gap-2 px-6 pt-32">
          {[{ to: '/', label: 'Home' }, ...navItems, { to: '/contact', label: 'Work with us' }].map(
            (item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-baseline gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${150 + i * 50}ms` : '0ms' }}
              >
                <span className="w-8 shrink-0 text-xs text-background/50">
                  ({String(i + 1).padStart(2, '0')})
                </span>
                <span className="font-display text-5xl uppercase leading-[1.15] tracking-tight">
                  {item.label}
                </span>
              </Link>
            ),
          )}
        </nav>
        <div
          className={`flex items-end justify-between px-6 pb-10 text-sm transition-opacity delay-300 duration-500 ${
            open ? 'opacity-70' : 'opacity-0'
          }`}
        >
          <div>
            <p>Mihai Eminescu 14, Cluj-Napoca</p>
            <a href="mailto:hello@maiac.agency" className="link-underline">
              hello@maiac.agency
            </a>
          </div>
          <div className="flex flex-col items-end gap-1">
            <a href="#" className="link-underline">
              LinkedIn
            </a>
            <a href="#" className="link-underline">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
