import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ServiceIcon from '../components/ServiceIcon'
import CTABanner from '../components/CTABanner'
import { SERVICES } from '../data/content'

export default function ServiceDetail() {
  const { slug } = useParams()
  const idx = SERVICES.findIndex((s) => s.slug === slug)
  if (idx === -1) return <Navigate to="/services" replace />
  const service = SERVICES[idx]
  const next = SERVICES[(idx + 1) % SERVICES.length]

  return (
    <>
      <PageHeader
        kicker={service.tagline}
        crumb={service.title}
        title={<span className="text-gradient">{service.title}</span>}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="glass h-full rounded-3xl p-9 md:p-12">
              <ServiceIcon icon={service.icon} color={service.color} size="lg" />
              <h2 className="mt-7 font-display text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.85] text-slate-400">{service.body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass h-full rounded-3xl p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400">Key capabilities</p>
              <ul className="mt-6 space-y-4">
                {service.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-slate-300">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-cyan-400" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-mono text-[10px] tracking-[0.3em] text-slate-500">NEXT MODULE</p>
                <Link to={`/services/${next.slug}`} className="group mt-2 flex items-center justify-between gap-3 font-display text-[15px] font-semibold text-white">
                  {next.title}
                  <ArrowRight size={15} className="text-cyan-300 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300">
            <ArrowLeft size={15} /> All services
          </Link>
        </Reveal>
      </section>

      <CTABanner />
    </>
  )
}
