import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { profile } from '../data';

// EmailJS public IDs (safe to ship in the browser).
const EMAILJS = { service: 'service_x71pvhm', template: 'template_l9mjm0h', key: '0dC8U10tkq7mtNRcK' };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          reply_to: form.email,
          to_email: profile.email,
        },
        EMAILJS.key
      );
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 6000);
  };

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-400/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-violet-500/10';

  const channels = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone / WhatsApp', value: profile.phone, href: profile.whatsapp },
    { icon: MapPin, label: 'Location', value: profile.location, href: 'https://maps.google.com/?q=Colombo,Sri+Lanka' },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="card overflow-hidden p-0">
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            <div className="relative p-8 md:p-12">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-600/20 via-transparent to-sky-500/10" />
              <p className="section-label reveal">Contact</p>
              <h2 className="reveal text-4xl font-bold text-white md:text-5xl">
                Let's build
                <br />
                <span className="text-gradient">something great.</span>
              </h2>
              <p className="reveal mt-5 max-w-sm text-zinc-400">
                Have a project, a role or an idea? Send me a message and I'll get back to you within a day.
              </p>
              <ul className="mt-10 space-y-3">
                {channels.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="reveal">
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl p-2 -ml-2 transition hover:bg-white/5"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06] text-violet-200 ring-1 ring-white/10 transition group-hover:bg-violet-500/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wider text-zinc-500">{label}</span>
                        <span className="text-white">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={submit} className="space-y-4 border-t border-white/10 p-8 md:p-12 lg:border-l lg:border-t-0">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required className={field} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input required type="email" className={field} placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <input required className={field} placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              <textarea required rows={6} className={`${field} resize-none`} placeholder="Tell me about your project" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40 disabled:opacity-60"
              >
                {status === 'sending' ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'sent' && (
                <p className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  <CheckCircle2 className="h-4 w-4" /> Thanks! Your message is on its way.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  <AlertCircle className="h-4 w-4" /> Something went wrong. Please email me directly at {profile.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
