import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Newspaper, Sparkles,
} from 'lucide-react'
import { useRef } from 'react'
import ParticleField from '../components/ParticleField'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceIcon from '../components/ServiceIcon'
import CTABanner from '../components/CTABanner'
import StatsBand from '../components/Stats'
import { CASE_STUDIES, NEWS, SERVICES } from '../data/content'

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-20">
      <ParticleField density={90} />
      <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      <div className="pointer-events-none absolute left-[8%] top-[22%] h-72 w-72 rounded-full bg-violet-600/20 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute right-[6%] bottom-[15%] h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px] animate-float" />

      {/* Floating HUD chips */}
      <div className="pointer-events-none absolute left-[6%] top-[30%] hidden xl:block">
        <div className="glass animate-float rounded-2xl px-4 py-3 font-mono text-[11px] text-cyan-300">◉ SAP S/4HANA MIGRATIONS</div>
      </div>
      <div className="pointer-events-none absolute right-[8%] top-[36%] hidden xl:block">
        <div className="glass animate-float-slow rounded-2xl px-4 py-3 font-mono text-[11px] text-fuchsia-300">◈ END-TO-END IMPLEMENTATION</div>
      </div>
      <div className="pointer-events-none absolute bottom-[18%] right-[22%] hidden xl:block">
        <div className="glass animate-float rounded-2xl px-4 py-3 font-mono text-[11px] text-violet-300">◇ MANAGED SERVICES 24/7</div>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_1fr] lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5"
          >
            <Sparkles size={13} className="text-cyan-300" />
            <span className="text-[12px] font-medium tracking-wide text-cyan-300">Let's Get Down to Business</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="neon-text mt-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl"
          >
            SAP <span className="text-gradient">Solutions</span> Consulting for your{' '}
            <span className="relative inline-block">
              <span className="shimmer-text">Business</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            Enterprise-grade consulting on a global delivery platform —{' '}
            <span className="text-slate-200">end-to-end implementation</span>, managed services, staff augmentation
            and technology staffing that take your business to the top.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 text-sm font-semibold text-black transition hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
            >
              Explore Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Sparkles size={16} />
              Get an Estimate
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex items-center gap-6 font-mono text-[11px] tracking-widest text-slate-500"
          >
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> GLOBAL DELIVERY</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> FORTUNE 500 TRUSTED</span>
          </motion.div>
        </div>

        {/* Hero visual: holographic core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md md:block"
        >
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin-slow" />
          <div className="absolute inset-6 rounded-full border border-dashed border-violet-400/25 animate-spin-slow [animation-direction:reverse]" />
          <div className="absolute inset-16 rounded-full border border-white/10" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="glass-strong relative grid h-44 w-44 place-items-center rounded-full text-center shadow-[0_0_80px_rgba(34,211,238,0.25)]">
              <span className="absolute inset-0 rounded-full border border-cyan-400/40 animate-pulse-ring" />
              <div>
                <p className="mt-1 font-display text-3xl font-bold text-white">VINTEK</p>
                <p className="mt-1 font-mono text-[10px] text-slate-400">v2.0 // future-ready</p>
              </div>
            </div>
          </div>
          {/* Orbiting nodes */}
          {[
            { label: 'SAP', cls: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2', c: 'text-cyan-300 border-cyan-400/40' },
            { label: 'ORACLE', cls: 'right-0 top-1/2 translate-x-1/3 -translate-y-1/2', c: 'text-rose-300 border-rose-400/40' },
            { label: 'AZURE', cls: 'left-0 top-1/2 -translate-x-1/3 -translate-y-1/2', c: 'text-sky-300 border-sky-400/40' },
            { label: 'CLOUD', cls: 'left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2', c: 'text-violet-300 border-violet-400/40' },
            { label: 'RPA', cls: 'right-[18%] bottom-[10%]', c: 'text-fuchsia-300 border-fuchsia-400/40' },
          ].map((n) => (
            <span
              key={n.label}
              className={`glass absolute ${n.cls} ${n.c} animate-float rounded-xl px-3 py-1.5 font-mono text-[10px] tracking-widest`}
            >
              {n.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="relative mx-auto mt-28 max-w-7xl px-5 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/15 blur-[80px]" />
            <div className="font-mono text-[10px] tracking-[0.35em] text-slate-500">// COMPANY PROFILE</div>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-white">
              Vintek is a provider of <span className="text-gradient">world-class</span> integrated business, technology
              and process solutions on a global delivery platform.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 font-mono text-[10px] text-slate-400">
              {['ENTERPRISE', 'BI & ANALYTICS', 'ENGINEERING', 'LIFECYCLE MGMT', 'OPERATIONS', 'INFRASTRUCTURE'].map((t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-center tracking-wider">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading align="left" kicker="About Us" title={<>We believe today's technology is <span className="text-gradient">constructing tomorrow's life</span>.</>} />
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-slate-400">
              We are powered by a pool of innovative and talented professionals excelling in enterprise solutions, client
              relationship management, business intelligence, business process quality, operations management, engineering
              solutions, product lifecycle management and infrastructure services among other key capabilities.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-6 space-y-3">
              {[
                'Executive Software Guild is a global business consulting company providing services in Business functions and Information Technology.',
                'Leveraging functional and domain expertise, a global delivery model and our technology practices, we enable companies to unlock business potential.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-400" />
                  <span className="text-[15px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.26}>
            <Link to="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Discover the full story
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ServicesGrid() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-5 lg:px-8">
      <SectionHeading kicker="Services We Offer" title={<>Results-driven strategy, engineering & <span className="text-gradient">consulting</span>.</>} />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.slice(0, 4).map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.08}>
            <Link
              to={`/services/${s.slug}`}
              className="group glass relative block h-full overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-cyan-400/20" />
              <ServiceIcon icon={s.icon} color={s.color} />
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{s.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-cyan-400 opacity-0 transition group-hover:opacity-100">
                ACCESS MODULE <ArrowRight size={12} />
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-300">
          View all six service lines
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  )
}

function CaseStudies() {
  const scroller = useRef<HTMLDivElement>(null)
  const scroll = (dir: number) => scroller.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })

  return (
    <section className="relative mt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading align="left" kicker="Case Study" title={<>Visit some of our <span className="text-gradient">remarkable solutions</span>.</>} />
          <div className="hidden gap-3 md:flex">
            <button onClick={() => scroll(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300" aria-label="Scroll left">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll(1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300" aria-label="Scroll right">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scroller}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] lg:px-[max(1.25rem,calc((100vw-80rem)/2+2rem))]"
      >
        {CASE_STUDIES.map((c, i) => (
          <Reveal key={c.title} delay={Math.min(i * 0.06, 0.3)} className="shrink-0 snap-start">
            <Link
              to={c.to}
              className="group glass relative block h-80 w-[320px] overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:border-white/25"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.hue} opacity-20 transition group-hover:opacity-35`} />
              <div className="grid-overlay absolute inset-0 opacity-40" />
              <div className="relative flex h-full flex-col p-7">
                <span className="font-mono text-[64px] font-bold leading-none text-white/10 transition group-hover:text-white/20">{c.glyph}</span>
                <div className="mt-auto">
                  <h3 className="font-display text-xl font-semibold leading-snug text-white">{c.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {c.points.slice(0, 3).map((p) => (
                      <li key={p} className="flex gap-2 text-[12.5px] text-slate-300">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-cyan-300">
                    VIEW CASE <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function WhyChoose() {
  const items = [
    { n: '01', c: 'text-rose-300', t: 'Reduce TCO of support services', d: 'Variable, optimized IT cost models that protect your investment while improving service quality.' },
    { n: '02', c: 'text-emerald-300', t: 'Guaranteed service levels', d: 'Every activity governed and monitored by a robust SLA framework — incidents to root-cause analysis.' },
    { n: '03', c: 'text-violet-300', t: 'Expertise at every level', d: 'From implementation to post-production support, key personnel transition to your priority initiatives.' },
  ]
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-5 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="relative">
            <div className="glass-strong relative grid aspect-square max-w-md place-items-center overflow-hidden rounded-3xl p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.18),transparent_55%)]" />
              <div className="animate-spin-slow absolute inset-8 rounded-full border border-dashed border-white/15" />
              <div className="text-center">
                <p className="font-mono text-[10px] tracking-[0.4em] text-cyan-400">SERVICE MATRIX</p>
                <p className="mt-3 font-display text-6xl font-bold text-white">01<span className="text-gradient">/03</span></p>
                <p className="mt-3 text-sm text-slate-400">Post-implementation support, guaranteed service levels and expertise — at various levels of service.</p>
              </div>
              {['★', '▲', '●'].map((g, i) => (
                <span key={g} className={`absolute animate-float text-xl ${['text-cyan-300 left-8 top-8', 'text-fuchsia-300 right-10 top-16', 'text-violet-300 bottom-10 left-16'][i]}`} style={{ animationDelay: `${i * 1.2}s` }}>{g}</span>
              ))}
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading align="left" kicker="Why Choose Us" title={<>What is so <span className="text-gradient">unique</span> about our services?</>} />
          <div className="mt-10 space-y-6">
            {items.map((it, i) => (
              <Reveal key={it.n} delay={i * 0.1}>
                <div className="group flex gap-5">
                  <span className={`font-display text-2xl font-bold ${it.c}`}>{it.n}</span>
                  <div className="border-l border-white/10 pl-5 transition group-hover:border-cyan-400/40">
                    <h3 className="font-display text-lg font-semibold text-white">{it.t}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-400">{it.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <Link to="/why-choose-us" className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              See the full SLA framework
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function News() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-5 lg:px-8">
      <SectionHeading kicker="Latest News" title={<>Visit our company <span className="text-gradient">insights</span> to know more.</>} />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {NEWS.map((n, i) => (
          <Reveal key={n.title} delay={i * 0.08}>
            <article className="group glass h-full overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40">
              <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d0d24] to-[#1a1038]">
                <div className="grid-overlay absolute inset-0" />
                <Newspaper size={34} className="text-slate-600 transition group-hover:text-cyan-400/70" />
                <span className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-black/40 px-3 py-1 font-mono text-[10px] tracking-widest text-cyan-300">{n.tag}</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-[17px] font-semibold leading-snug text-white transition group-hover:text-cyan-200">{n.title}</h3>
                <p className="mt-3 font-mono text-[11px] tracking-wider text-slate-500">{n.date}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <About />
      <ServicesGrid />
      <CaseStudies />
      <WhyChoose />
      <News />
      <CTABanner />
    </>
  )
}
