import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';

const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/method', label: 'Method' },
  { to: '/about', label: 'About' },
];

const menuItems = [...navItems, { to: '/contact', label: 'Work with us' }];

const menuEase = 'menu-ease';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const background = document.querySelectorAll<HTMLElement>('main, footer');
    background.forEach((element) => { element.inert = true; });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
      if (event.key !== 'Tab') return;
      const controls = [triggerRef.current, ...Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter(Boolean) as HTMLElement[];
      const index = controls.indexOf(document.activeElement as HTMLElement);
      event.preventDefault();
      controls[(index + (event.shiftKey ? -1 : 1) + controls.length) % controls.length]?.focus();
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', onResize);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
      background.forEach((element) => { element.inert = false; });
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('popstate', close);
    return () => window.removeEventListener('popstate', close);
  }, []);



  return (
    <>
      {/* White content + difference blend: reads dark on the light page, white over the black menu */}
      <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <div className="header-inner flex items-center justify-between px-6 py-5 md:px-12 md:py-7">
          <Link onClick={() => setOpen(false)} to="/" aria-label="Maiac home" className="block w-[120px] md:w-[150px]">
            <img
              src={`${import.meta.env.BASE_URL}assets/maiac-logo.png`}
              alt="maiac"
              className="w-full invert"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[15px] tracking-tight transition-opacity [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-60 ${
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
              <Link onClick={() => setOpen(false)} to="/contact" className="link-underline text-[15px] tracking-tight">
                Work with us
              </Link>
            </div>
            <button
              ref={triggerRef}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="link-underline text-[15px] font-semibold tracking-tight md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu: full-black curtain under the blend header */}
      <div
        id="mobile-menu"
        ref={menuRef}
        inert={!open}
        className={`mobile-menu fixed inset-0 z-40 bg-[#161617] text-white motion-safe:transition-[clip-path] duration-700 ${menuEase} md:hidden ${
          open ? '[clip-path:inset(0_0_0%_0)]' : 'pointer-events-none [clip-path:inset(0_0_100%_0)]'
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation" className="relative mt-[100px] flex flex-col">
          <span
            className={`absolute top-0 left-0 h-px w-full origin-left bg-white/20 motion-safe:transition-transform duration-700 ${menuEase} ${
              open ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transitionDelay: open ? '200ms' : '0ms' }}
          />
          {menuItems.map((item, i) => (
            <Link
              onClick={() => setOpen(false)}
              key={item.to}
              to={item.to}
              className="relative flex h-[72px] items-center px-7 text-2xl font-medium tracking-tight"
            >
              <span className="block overflow-hidden">
                <span
                  className={`block motion-safe:transition-transform duration-700 ${menuEase} ${
                    open ? 'translate-y-0' : 'translate-y-[110%]'
                  }`}
                  style={{ transitionDelay: open ? `${200 + i * 60}ms` : '0ms' }}
                >
                  {item.label}
                </span>
              </span>
              <span
                className={`absolute bottom-0 left-0 h-px w-full origin-left bg-white/20 motion-safe:transition-transform duration-700 ${menuEase} ${
                  open ? 'scale-x-100' : 'scale-x-0'
                }`}
                style={{ transitionDelay: open ? `${240 + i * 60}ms` : '0ms' }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
