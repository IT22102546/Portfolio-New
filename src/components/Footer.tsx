import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} {profile.name}. Designed and built by me.</p>
        <div className="flex items-center gap-1">
          {[
            { icon: Github, href: profile.github, label: 'GitHub' },
            { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white">
              <Icon className="h-5 w-5" />
            </a>
          ))}
          <a href="#home" aria-label="Back to top" className="ml-2 grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:bg-white/5">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
