import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import { TECHNOLOGIES } from '../data/content'

const glyphs: Record<string, string> = {
  sap: 'SAP', oracle: 'ORA', microsoft: 'MS', cloud: 'CLD', 'big-data': 'BIG', 'bi-technologies': 'BI', 'ui-technologies': 'UI', rpa: 'RPA',
}

export default function Technologies() {
  return (
    <>
      <PageHeader
        kicker="Technologies"
        crumb="Technologies"
        title={<>Our focus is on solving business challenges with <span className="text-gradient">cutting-edge solutions</span>.</>}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker="Technology Practices" title={<>Eight practice areas. One <span className="text-gradient">delivery core</span>.</>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TECHNOLOGIES.map((t, i) => (
            <Reveal key={t.slug} delay={Math.min(i * 0.06, 0.3)}>
              <Link
                to={`/technologies/${t.slug}`}
                className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-400/40 hover:shadow-[0_20px_60px_rgba(232,121,249,0.12)]"
              >
                <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />
                <span className="relative font-mono text-5xl font-bold text-white/10 transition group-hover:text-white/25">{glyphs[t.slug] ?? 'SYS'}</span>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-white">{t.name}</h3>
                <p className="relative mt-2 line-clamp-3 text-[13px] leading-relaxed text-slate-400">{t.body}</p>
                <span className="relative mt-auto inline-flex items-center gap-2 pt-5 font-mono text-[11px] tracking-widest text-fuchsia-300 opacity-0 transition group-hover:opacity-100">
                  ENTER NODE <ArrowRight size={12} />
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
