import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { CONTACT } from '../data/content'

// FormSubmit.co AJAX endpoint — first-ever submission triggers a one-time
// activation email to info@vint3k.com; after activation all messages arrive directly.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/info@vint3k.com'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New inquiry — ${data.get('name')} (vint3k.com)`,
          _template: 'table',
          _captcha: 'false',
          name: data.get('name'),
          email: data.get('email'),
          website: data.get('website') || '—',
          message: data.get('message'),
        }),
      })
      if (!res.ok) throw new Error(`FormSubmit responded with ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader
        kicker="Get an Estimate"
        crumb="Contact"
        title={<>Do you have a project? Don't hesitate. <span className="text-gradient">Mail us</span>.</>}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          {/* Form */}
          <Reveal>
            <div className="glass-strong relative overflow-hidden rounded-3xl p-9 md:p-11">
              <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/15 blur-[80px]" />
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400">Drop your message</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-white">Send us a transmission.</h2>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-10 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-8 text-center"
                >
                  <CheckCircle2 size={36} className="mx-auto text-emerald-300" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">Message received.</h3>
                  <p className="mt-2 text-sm text-slate-300">Our team will get back to you within one business day.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-[13px] font-medium text-cyan-300 hover:underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Your name" className="field" type="text" name="name" />
                  <input required placeholder="Email" className="field" type="email" name="email" />
                  <input placeholder="Website / Company" className="field sm:col-span-2" type="text" name="website" />
                  <textarea required placeholder="Your message" rows={5} className="field resize-none sm:col-span-2" name="message" />

                  {status === 'error' && (
                    <div className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3">
                      <AlertTriangle size={16} className="mt-0.5 shrink-0 text-rose-300" />
                      <p className="text-[13px] leading-relaxed text-rose-200">
                        Transmission failed. Please try again, or email us directly at{' '}
                        <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">{CONTACT.email}</a>.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-3.5 text-sm font-semibold text-black transition hover:shadow-[0_0_36px_rgba(34,211,238,0.5)] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Transmitting…
                      </>
                    ) : (
                      <>
                        <Send size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        Submit
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info panels */}
          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">Coordinates</p>
                <ul className="mt-5 space-y-5 text-[14.5px]">
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10">
                      <MapPin size={17} className="text-cyan-300" />
                    </span>
                    <span className="text-slate-300">{CONTACT.address}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-violet-400/25 bg-violet-400/10">
                      <Mail size={17} className="text-violet-300" />
                    </span>
                    <a href={`mailto:${CONTACT.email}`} className="text-slate-300 hover:text-white">{CONTACT.email}</a>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-fuchsia-400/25 bg-fuchsia-400/10">
                      <Phone size={17} className="text-fuchsia-300" />
                    </span>
                    <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`} className="text-slate-300 hover:text-white">{CONTACT.phone}</a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="glass rounded-3xl p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">Follow us</p>
                <div className="mt-5 flex gap-3">
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-300">
                    <Linkedin size={18} />
                  </a>
                </div>
                <div className="mt-7 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_60%)] p-5">
                  <p className="text-[13px] leading-relaxed text-slate-400">
                    Response time: <span className="text-white">{'<'} 24h</span> · Time zone: <span className="text-white">CST (UTC-6)</span>
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stylized map */}
            <Reveal delay={0.26}>
              <div className="glass relative h-52 overflow-hidden rounded-3xl">
                <div className="grid-overlay absolute inset-0 animate-grid-pan opacity-70" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="relative grid h-16 w-16 place-items-center">
                    <span className="absolute inset-0 rounded-full border border-cyan-400/50 animate-pulse-ring" />
                    <span className="absolute inset-2 rounded-full border border-fuchsia-400/40 animate-pulse-ring [animation-delay:1.3s]" />
                    <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,1)]" />
                  </span>
                </div>
                <p className="absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] tracking-[0.3em] text-slate-500">
                  PROSPER // TEXAS // TX 75078
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
