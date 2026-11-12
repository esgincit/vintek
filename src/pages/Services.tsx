import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ServiceIcon from '../components/ServiceIcon'
import CTABanner from '../components/CTABanner'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHeader
        kicker="Services"
        crumb="Services"
        title={<>Results-driven strategy, engineering & <span className="text-gradient">consulting</span>.</>}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker="Service Lines" title={<>Six modules. One <span className="text-gradient">mission</span>: your growth.</>} />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.07, 0.35)}>
              <Link
                to={`/services/${s.slug}`}
                className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-cyan-400/20" />
                <ServiceIcon icon={s.icon} color={s.color} size="lg" />
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">{s.tagline}</p>
                <p className="mt-4 line-clamp-3 text-[13.5px] leading-relaxed text-slate-400">{s.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-[11px] tracking-widest text-cyan-300">
                  OPEN MODULE <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
