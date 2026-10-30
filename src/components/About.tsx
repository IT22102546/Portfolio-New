import { GraduationCap, Award, Code2, Smartphone, Workflow, Server } from 'lucide-react';
import { about, education, recognition } from '../data';

const focus = [
  { icon: Code2, title: 'Full-stack web', text: 'NestJS, Node.js and Next.js platforms with clean APIs and fast UIs.' },
  { icon: Smartphone, title: 'Mobile apps', text: 'React Native and Expo apps shipped to Play Store and kiosks.' },
  { icon: Workflow, title: 'Integrations', text: 'Workflows, rules engines, Google Workspace, Wix and AI tools.' },
  { icon: Server, title: 'DevOps', text: 'Docker, Kubernetes, CI/CD pipelines, Vercel and Hostinger.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label reveal">About</p>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="reveal text-4xl font-bold text-white md:text-5xl">
              Engineer by trade,
              <br />
              <span className="text-gradient">problem-solver by habit.</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-400">
              {about.map((p, i) => (
                <p key={i} className="reveal" style={{ ['--d' as string]: `${i * 80}ms` }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2">
            {focus.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="card reveal p-5" style={{ ['--d' as string]: `${i * 70}ms` }}>
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-sky-500/20 text-violet-200 ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="card reveal p-6">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sky-300">
              <GraduationCap className="h-4 w-4" /> Education
            </div>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.title} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-white">{e.title}</p>
                    <p className="text-sm text-zinc-400">{e.place}</p>
                  </div>
                  <span className="chip shrink-0">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card reveal p-6" style={{ ['--d' as string]: '80ms' }}>
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-300">
              <Award className="h-4 w-4" /> Recognition & volunteering
            </div>
            <ul className="space-y-4">
              {recognition.map((r) => (
                <li key={r.title} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-white">{r.title}</p>
                    {r.link ? (
                      <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 underline decoration-white/20 underline-offset-4 hover:text-white">
                        {r.place}
                      </a>
                    ) : (
                      <p className="text-sm text-zinc-400">{r.place}</p>
                    )}
                  </div>
                  <span className="chip shrink-0">{r.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
