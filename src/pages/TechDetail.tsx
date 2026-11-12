import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import { PROCESS_STEPS, TECHNOLOGIES } from '../data/content'

export default function TechDetail() {
  const { slug } = useParams()
  const idx = TECHNOLOGIES.findIndex((t) => t.slug === slug)
  if (idx === -1) return <Navigate to="/technologies" replace />
  const tech = TECHNOLOGIES[idx]
  const next = TECHNOLOGIES[(idx + 1) % TECHNOLOGIES.length]

  return (
    <>
      <PageHeader
        kicker="Technologies"
        crumb={tech.name}
        title={<span className="text-gradient">{tech.name}</span>}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="glass h-full rounded-3xl p-9 md:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400">// Practice overview</p>
              <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.85] text-slate-300">{tech.body}</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="glass h-full rounded-3xl p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-fuchsia-400">Case highlights</p>
              <ul className="mt-6 space-y-4">
                {tech.casePoints.map((p) => (
                  <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-slate-300">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-fuchsia-400" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-mono text-[10px] tracking-[0.3em] text-slate-500">NEXT NODE</p>
                <Link to={`/technologies/${next.slug}`} className="group mt-2 flex items-center justify-between gap-3 font-display text-[15px] font-semibold text-white">
                  {next.name}
                  <ArrowRight size={15} className="text-fuchsia-300 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Delivery process timeline */}
      <section className="relative mx-auto mt-28 max-w-5xl px-5 lg:px-8">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.4em] text-cyan-400">Delivery protocol</p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold text-white md:text-4xl">
            How we take it from <span className="text-gradient">idea to orbit</span>.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/40 to-transparent md:left-1/2" />
          {PROCESS_STEPS.map((step, i) => (
            <TimelineStep key={step.num} step={step} flip={i % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-12">
          <Link to="/technologies" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-fuchsia-300">
            <ArrowLeft size={15} /> All technologies
          </Link>
        </Reveal>
      </section>

      <CTABanner />
    </>
  )
}

function TimelineStep({ step, flip }: { step: (typeof PROCESS_STEPS)[number]; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const glow = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const opacity = useTransform(glow, [0, 1], [0.35, 1])

  return (
    <div ref={ref} className={`relative mb-14 flex md:gap-10 ${flip ? 'md:flex-row-reverse' : ''}`}>
      <motion.span
        style={{ opacity }}
        className="absolute left-6 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)] md:left-1/2 md:block"
      />
      <Reveal className={`ml-16 md:ml-0 md:w-1/2 ${flip ? 'md:pl-10' : 'md:pr-10'}`}>
        <div className="glass rounded-3xl p-8 transition hover:border-cyan-400/35">
          <span className="font-display text-4xl font-bold text-gradient">{step.num}</span>
          <h3 className="mt-3 font-display text-xl font-semibold text-white">{step.title}</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-slate-400">{step.text}</p>
          <ul className="mt-5 grid gap-2">
            {step.bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-[13px] text-slate-300">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-cyan-400" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}
