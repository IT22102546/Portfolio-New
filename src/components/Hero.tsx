import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile, stats } from '../data';
import { useTypewriter } from '../hooks';

const stack = ['NestJS', 'Next.js', 'React Native', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Kubernetes', 'Vercel', 'Apps Script', 'MCP', 'Expo', 'MongoDB', 'Turborepo'];

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="reveal mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 text-sm text-emerald-200">
            <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            Software Engineer at Emojot · open to freelance work
          </div>

          <h1 className="reveal text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl" style={{ ['--d' as string]: '80ms' }}>
            Hi, I'm Sanjana.
            <br />
            <span className="text-gradient">I ship software</span>
            <br />
            that runs businesses.
          </h1>

          <p className="reveal mt-6 h-8 font-mono text-lg text-sky-300" style={{ ['--d' as string]: '160ms' }}>
            &gt; {role}
            <span className="caret ml-0.5 inline-block h-5 w-2 translate-y-0.5 bg-sky-300" />
          </p>

          <p className="reveal mt-4 max-w-xl text-lg leading-relaxed text-zinc-400" style={{ ['--d' as string]: '240ms' }}>
            {profile.tagline}
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-3" style={{ ['--d' as string]: '320ms' }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { icon: Github, href: profile.github, label: 'GitHub' },
                { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl text-zinc-400 transition hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm" style={{ ['--d' as string]: '200ms' }}>
          <div className="float relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet-600/40 via-sky-500/25 to-teal-400/20 blur-3xl" />
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-violet-400/70 via-sky-400/40 to-transparent" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0b0b14]">
              <img src={profile.photo} alt={profile.name} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 pt-16">
                <p className="font-display text-xl font-semibold text-white">{profile.name}</p>
                <p className="flex items-center gap-1.5 text-sm text-zinc-300">
                  <MapPin className="h-3.5 w-3.5" /> {profile.location}
                </p>
              </div>
            </div>
          </div>
          <div className="card absolute -right-6 bottom-28 hidden rounded-xl bg-[#0b0b14]/80 px-4 py-3 backdrop-blur-xl sm:block">
            <p className="font-display text-2xl font-bold text-white">50+</p>
            <p className="text-xs text-zinc-400">projects shipped</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 w-full max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div key={s.label} className="reveal bg-[#09090f] p-6" style={{ ['--d' as string]: `${i * 80}ms` }}>
            <p className="font-display text-4xl font-bold text-white">{s.value}</p>
            <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
          </div>
        ))}
      </div>
      </div>

      <div className="relative mt-14 overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee flex w-max gap-10 font-display text-xl font-medium text-zinc-600">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="whitespace-nowrap">
              {t} <span className="ml-10 text-violet-500/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
