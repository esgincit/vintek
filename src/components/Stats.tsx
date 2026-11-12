import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/** Animated number counter that ticks up when scrolled into view. */
export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const dur = 1600
    const start = performance.now()
    let raf = 0
    const step = (now: number) => {
      const t = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(to * eased))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-white md:text-5xl">
      {val}
      <span className="text-gradient">{suffix}</span>
    </span>
  )
}

export default function StatsBand() {
  const stats = [
    { to: 11, suffix: '+', label: 'Years at the forefront' },
    { to: 18, suffix: '', label: 'Enterprise clients' },
    { to: 8, suffix: '', label: 'Technology practices' },
    { to: 24, suffix: '/7', label: 'Managed support' },
  ]
  return (
    <section className="relative mx-auto max-w-7xl px-5 lg:px-8">
      <div className="glass grid gap-10 rounded-3xl px-8 py-12 text-center md:grid-cols-4 md:px-12">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter to={s.to} suffix={s.suffix} />
            <p className="mt-2 text-[13px] text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
