import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label reveal">Experience</p>
        <h2 className="reveal text-4xl font-bold text-white md:text-5xl">
          Where I've <span className="text-gradient">built things</span>
        </h2>

        <ol className="relative mt-14 space-y-6 before:absolute before:bottom-4 before:left-[7px] before:top-4 before:w-px before:bg-gradient-to-b before:from-violet-500/60 before:via-sky-500/30 before:to-transparent md:before:left-[calc(16rem+7px)]">
          {experience.map((job, i) => (
            <li key={job.company} className="reveal relative grid gap-4 pl-10 md:grid-cols-[16rem_1fr] md:pl-0" style={{ ['--d' as string]: `${i * 60}ms` }}>
              <div className="md:pr-10 md:pt-6 md:text-right">
                <p className="font-mono text-sm text-zinc-400">{job.period}</p>
                <p className="mt-1 text-sm text-zinc-500">{job.type}</p>
              </div>

              <span
                className={`absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-2 md:left-[16rem] ${
                  job.current ? 'live-dot border-emerald-300 bg-emerald-400' : 'border-violet-400 bg-[#07070c]'
                }`}
              />

              <div className="card p-6 md:ml-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-xl font-bold text-white">{job.company}</h3>
                  {job.current && <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs font-medium text-emerald-300">Current</span>}
                </div>
                <p className="mt-0.5 font-medium text-sky-300">{job.role}</p>
                {job.path && <p className="mt-1 text-sm italic text-zinc-500">{job.path}</p>}
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-zinc-400">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
