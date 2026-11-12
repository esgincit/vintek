import { AlertTriangle, Compass } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import { WE_SUPPORT } from '../data/content'

export default function WeSupport() {
  return (
    <>
      <PageHeader
        kicker="We Support"
        crumb="We Support"
        title={<>Facing <span className="text-gradient">transformation</span>? We stand with you.</>}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-9">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-rose-400/30 bg-rose-400/10">
                  <AlertTriangle size={20} className="text-rose-300" />
                </span>
                <h2 className="font-display text-xl font-semibold text-white">The challenges you face</h2>
              </div>
              <ul className="mt-7 space-y-3">
                {WE_SUPPORT.challenges.map((c) => (
                  <li key={c} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass h-full rounded-3xl p-9">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
                  <Compass size={20} className="text-emerald-300" />
                </span>
                <h2 className="font-display text-xl font-semibold text-white">Our approach</h2>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-400">{WE_SUPPORT.approach}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3 font-mono text-[10px] tracking-widest text-slate-400">
                {['CONSULT', 'DESIGN', 'IMPLEMENT', 'INTEGRATE', 'SUPPORT', 'EVOLVE'].map((t) => (
                  <span key={t} className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-2 py-2.5 text-center">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
