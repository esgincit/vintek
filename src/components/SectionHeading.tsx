import Reveal from './Reveal'

/** Shared section heading: small mono kicker + big display title. */
export default function SectionHeading({
  kicker,
  title,
  align = 'center',
}: {
  kicker: string
  title: React.ReactNode
  align?: 'center' | 'left'
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-cyan-400">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
      <div className={`mt-4 h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent ${align === 'center' ? 'mx-auto' : ''}`} />
    </Reveal>
  )
}
