import { useEffect, useRef, type ReactNode } from 'react';

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
    if (!motion.matches || !('IntersectionObserver' in window)) return;
    el.classList.add('is-pending');
    const show = () => {
      el.classList.remove('is-pending');
      el.classList.add('is-visible');
    };
    const obs = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        show();
        obs.disconnect();
      }
    }, { threshold: 0 });
    const onMotionChange = () => {
      if (!motion.matches) {
        show();
        obs.disconnect();
      }
    };
    motion.addEventListener('change', onMotionChange);
    obs.observe(el);
    return () => {
      obs.disconnect();
      motion.removeEventListener('change', onMotionChange);
      el.classList.remove('is-pending');
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
