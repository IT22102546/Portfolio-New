import { useEffect, useState } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { useActiveSection } from '../hooks';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
const ids = ['home', ...links.map((l) => l.id)];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 ${
          scrolled ? 'border-white/10 bg-[#0b0b14]/70 shadow-2xl shadow-black/40 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-sky-500 text-sm">SN</span>
          <span className="hidden sm:inline">Sanjana Nimesh</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                active === l.id ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {active === l.id && <span className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07]" />}
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-900 transition hover:bg-violet-100 sm:inline-flex"
          >
            <Send className="h-4 w-4" /> Hire me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-lg text-zinc-300 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-[#0b0b14]/95 p-2 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-zinc-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
