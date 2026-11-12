import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, ChevronDown, MapPin, Sparkles } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import { JOBS } from '../data/content'

export default function Careers() {
  const [open, setOpen] = useState<number | null>(JOBS[0]?.id ?? null)

  return (
    <>
      <PageHeader
        kicker="Careers"
        crumb="Careers"
        title={<>Explore jobs. <span className="text-gradient">Build the future</span>.</>}
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal>
          <div className="glass mb-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl px-7 py-6">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-cyan-300" />
              <p className="text-[15px] text-slate-300">
                <span className="font-semibold text-white">{JOBS.length} open roles</span> across Texas — engineering, data, SAP and more.
              </p>
            </div>
            <span className="font-mono text-[11px] tracking-[0.3em] text-slate-500">UPDATED // 2026</span>
          </div>
        </Reveal>

        <div className="space-y-4">
          {JOBS.map((job, i) => (
            <Reveal key={job.id} delay={Math.min(i * 0.05, 0.25)}>
              <div className={`glass overflow-hidden rounded-2xl transition ${open === job.id ? 'border-cyan-400/40' : ''}`}>
                <button
                  onClick={() => setOpen(open === job.id ? null : job.id)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10">
                      <Briefcase size={18} className="text-cyan-300" />
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-semibold text-white">{job.title}</h3>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[12.5px] text-slate-400">
                        <MapPin size={12} className="text-slate-500" /> {job.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-400 sm:block">
                      {job.type.toUpperCase()}
                    </span>
                    <ChevronDown size={17} className={`shrink-0 text-slate-400 transition-transform ${open === job.id ? 'rotate-180 text-cyan-300' : ''}`} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/10 px-7 py-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">Core stack</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.skills.map((s) => (
                            <span key={s} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-slate-300">{s}</span>
                          ))}
                        </div>
                        <a
                          href={`mailto:info@vint3k.com?subject=Application: ${encodeURIComponent(job.title)}`}
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-2.5 text-[13px] font-semibold text-black transition hover:shadow-[0_0_28px_rgba(34,211,238,0.4)]"
                        >
                          Apply now
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
