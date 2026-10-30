import { Code2, Layout, Server, Smartphone, Database, Cloud, Plug, Sparkles, Wrench } from 'lucide-react';
import { skills } from '../data';

const icons = [Code2, Layout, Server, Smartphone, Database, Cloud, Plug, Sparkles, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label reveal">Skills</p>
        <h2 className="reveal text-4xl font-bold text-white md:text-5xl">
          My <span className="text-gradient">toolkit</span>
        </h2>
        <p className="reveal mt-4 max-w-2xl text-zinc-400">
          The languages, frameworks, platforms and pipelines I use to take an idea from a sketch to production.
        </p>

        <div className="mt-12 gap-4 md:columns-2 lg:columns-3">
          {skills.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={s.group}
                className="card reveal mb-4 break-inside-avoid p-6"
                style={{ ['--d' as string]: `${(i % 3) * 70}ms` }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.06] text-violet-200 ring-1 ring-white/10">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="font-semibold text-white">{s.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200 transition hover:border-violet-400/40 hover:bg-violet-500/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
