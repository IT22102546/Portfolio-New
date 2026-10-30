import { ArrowUpRight, Github, Check, Building2 } from 'lucide-react';
import { featured, emojotWork, moreProjects, profile, type Project } from '../data';

function Links({ p }: { p: Project }) {
  return (
    <div className="flex items-center gap-2">
      {p.code && (
        <a href={p.code} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} code`} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-white/30 hover:text-white">
          <Github className="h-4 w-4" />
        </a>
      )}
      {p.live && (
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="group/l inline-flex h-9 items-center gap-1.5 rounded-lg bg-white px-3 text-sm font-semibold text-zinc-900 transition hover:bg-violet-100">
          Live
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}

function Visual({ p, tall }: { p: Project; tall?: boolean }) {
  if (p.image) {
    return (
      <div className={`relative overflow-hidden rounded-xl border border-white/10 ${tall ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
        <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070c]/60 to-transparent" />
      </div>
    );
  }
  return (
    <div className={`relative grid place-items-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${p.accent} ${tall ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:18px_18px]" />
      <span className="relative font-display text-4xl font-bold text-white/90 transition-transform duration-700 group-hover:scale-105 md:text-5xl">{p.title}</span>
    </div>
  );
}

const bars = ['from-sky-500 to-indigo-500', 'from-teal-500 to-emerald-500', 'from-amber-500 to-rose-500', 'from-violet-500 to-sky-500', 'from-pink-500 to-orange-500'];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label reveal">Selected work</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal text-4xl font-bold text-white md:text-5xl">
            Projects I'm <span className="text-gradient">proud of</span>
          </h2>
          <p className="reveal max-w-md text-zinc-400">Production systems for real clients: healthcare, retail, automotive and research.</p>
        </div>

        {/* Featured */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <article key={p.title} className="card group reveal flex flex-col p-4" style={{ ['--d' as string]: `${(i % 2) * 80}ms` }}>
              <Visual p={p} tall />
              <div className="flex flex-1 flex-col p-3 pt-6">
                <p className="font-mono text-xs uppercase tracking-wider text-violet-300/80">{p.kind}</p>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <Links p={p} />
                </div>
                <p className="mt-3 leading-relaxed text-zinc-400">{p.description}</p>
                {p.highlights && (
                  <ul className="mt-4 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Emojot */}
        <div className="mt-24">
          <div className="reveal flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-400/20">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Built at Emojot</h3>
              <p className="text-sm text-zinc-400">Client and internal work. Code is private.</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emojotWork.map((p, i) => (
              <article key={p.title} className="card reveal flex flex-col overflow-hidden" style={{ ['--d' as string]: `${i * 70}ms` }}>
                <div className={`h-1.5 bg-gradient-to-r ${bars[i % bars.length]}`} />
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">{p.kind}</p>
                  <h4 className="mt-2 text-lg font-semibold text-white">{p.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.tags.map((t) => (
                      <span key={t} className="chip text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* More */}
        <div className="mt-24">
          <h3 className="reveal text-2xl font-bold text-white">More projects</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((p, i) => (
              <article key={p.title} className="card group reveal flex flex-col p-3" style={{ ['--d' as string]: `${(i % 3) * 70}ms` }}>
                <Visual p={p} />
                <div className="flex flex-1 flex-col p-3 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">{p.kind}</p>
                      <h4 className="mt-1 text-lg font-semibold text-white">{p.title}</h4>
                    </div>
                    <Links p={p} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {p.tags.map((t) => (
                      <span key={t} className="chip text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal mt-12 text-center">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
              <Github className="h-5 w-5" /> 50+ more on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
