import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/method', label: 'Method' },
  { to: '/about', label: 'About' },
];

const menuItems = [...navItems, { to: '/contact', label: 'Work with us' }];

const menuEase = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

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
      {/* White content + difference blend: reads dark on the light page, white over the black menu */}
      <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-7">
          <Link to="/" aria-label="Maiac home" className="block w-[120px] md:w-[150px]">
            <img
              src={`${import.meta.env.BASE_URL}assets/maiac-logo.png`}
              alt="maiac"
              className="w-full invert"
            />
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
        className={`fixed inset-0 z-40 bg-[#161617] text-white transition-[clip-path] duration-700 ${menuEase} md:hidden ${
          open ? '[clip-path:inset(0_0_0%_0)]' : 'pointer-events-none [clip-path:inset(0_0_100%_0)]'
        }`}
        aria-hidden={!open}
      >
        <nav className="relative mt-[140px] flex flex-col">
          <span
            className={`absolute top-0 left-0 h-px w-full origin-left bg-white/20 transition-transform duration-700 ${menuEase} ${
              open ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transitionDelay: open ? '200ms' : '0ms' }}
          />
          {menuItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative flex h-[72px] items-center px-7 text-2xl font-medium tracking-tight"
            >
              <span className="block overflow-hidden">
                <span
                  className={`block transition-transform duration-700 ${menuEase} ${
                    open ? 'translate-y-0' : 'translate-y-[110%]'
                  }`}
                  style={{ transitionDelay: open ? `${200 + i * 60}ms` : '0ms' }}
                >
                  {item.label}
                </span>
              </span>
              <span
                className={`absolute bottom-0 left-0 h-px w-full origin-left bg-white/20 transition-transform duration-700 ${menuEase} ${
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
