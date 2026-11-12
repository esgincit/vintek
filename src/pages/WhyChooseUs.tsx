import { CheckCircle2, GitBranch, ShieldCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import { WHY_CHOOSE } from '../data/content'

export default function WhyChooseUs() {
  return (
    <>
      <PageHeader
        kicker="Why Choose Us"
        crumb="Why Choose Us"
        title={<>What is so <span className="text-gradient">unique</span> about our services?</>}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-9">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                  <ShieldCheck size={20} className="text-cyan-300" />
                </span>
                <h2 className="font-display text-xl font-semibold text-white">Service differentiators</h2>
              </div>
              <ul className="mt-7 space-y-3.5">
                {WHY_CHOOSE.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] text-slate-300">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-400" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass h-full rounded-3xl p-9">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/10">
                  <GitBranch size={20} className="text-fuchsia-300" />
                </span>
                <h2 className="font-display text-xl font-semibold text-white">Governed by SLA framework</h2>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-400">{WHY_CHOOSE.slaIntro}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {WHY_CHOOSE.slaItems.map((it, i) => (
                  <span key={it} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] text-slate-300 transition hover:border-fuchsia-400/40">
                    <span className="mr-2 font-mono text-[10px] text-fuchsia-400">0{i + 1}</span>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <SectionHeading kicker="The Mix" title={<>A potent combination of <span className="text-gradient">digital strategy</span> and creative.</>} />
        </Reveal>
      </section>

      <CTABanner />
    </>
  )
}
