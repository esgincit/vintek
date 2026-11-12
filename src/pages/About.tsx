import { Link } from 'react-router-dom'
import { CheckCircle2, Target } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import { CONTACT } from '../data/content'

export default function About() {
  return (
    <>
      <PageHeader
        kicker="About Us"
        crumb="About"
        title={<>Technology-focused, customized solutions <span className="text-gradient">as a chaser</span>.</>}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-3xl p-9">
              <div className="pointer-events-none absolute -left-14 -top-14 h-44 w-44 rounded-full bg-violet-500/20 blur-[80px]" />
              <div className="font-mono text-[10px] tracking-[0.35em] text-slate-500">// WHO WE ARE</div>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-300">
                Vintek is a provider of world-class integrated business, technology and process solutions on a global
                delivery platform. <span className="text-white">Executive Software Guild</span> is a global business
                consulting company that provides services in Business functions and Information Technology.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
                We believe that today's technology is constructing tomorrow's life. Leveraging functional and domain
                expertise, a global delivery model and our technology practices, we enable companies to unlock business
                potential.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 text-sm font-semibold text-black transition hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <SectionHeading align="left" kicker="Our Goal" title={<>Innovative talent, <span className="text-gradient">integrated capability</span>.</>} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
                We are powered by a pool of innovative and talented professionals excelling in enterprise solutions,
                client relationship management, business intelligence, business process quality, operations management,
                engineering solutions, product lifecycle management and infrastructure services among other key capabilities.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
                Our comprehensive consulting, system integration and outsourcing services provide customers with an
                affordable and flexible approach to solving business problems — accelerating success and improving performance.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Enterprise Solutions', 'Client Relationships', 'Business Intelligence', 'Process Quality', 'Operations Management', 'Engineering Solutions', 'Lifecycle Management', 'Infrastructure Services'].map((t) => (
                  <span key={t} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-[13px] text-slate-300">
                    <CheckCircle2 size={14} className="shrink-0 text-cyan-400" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Potent combination band */}
        <Reveal className="mt-20">
          <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-12 text-center md:px-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-[90px]" />
            <Target size={30} className="mx-auto text-cyan-300" />
            <p className="mx-auto mt-5 max-w-2xl font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
              We mix a potent combination of <span className="text-gradient">digital strategy</span> with a generous
              splash of creative.
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.3em] text-slate-500">
              {CONTACT.address.toUpperCase()}
            </p>
          </div>
        </Reveal>
      </section>

      <CTABanner />
    </>
  )
}
