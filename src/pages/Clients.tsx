import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import { CLIENTS } from '../data/content'

export default function Clients() {
  return (
    <>
      <PageHeader
        kicker="Our Clients"
        crumb="Clients"
        title={<>Trusted by <span className="text-gradient">global enterprises</span>.</>}
      />

      {/* Marquee of client names */}
      <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-6">
        <div className="flex w-max animate-marquee gap-14">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={i} className="whitespace-nowrap font-display text-lg font-semibold tracking-wide text-slate-500 transition hover:text-cyan-300">
              {c.name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void to-transparent" />
      </div>

      <section className="mx-auto mt-20 max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker="Partnerships" title={<>Organizations we <span className="text-gradient">power</span>.</>} />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={Math.min(i * 0.04, 0.3)}>
              <article className="group glass h-full overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 font-display text-[13px] font-bold text-white">
                    {c.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white transition group-hover:text-cyan-200">{c.name}</h3>
                </div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-slate-400">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
