import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ParticleField from './ParticleField'

/** Futuristic page hero used on all inner pages. */
export default function PageHeader({
  kicker,
  title,
  crumb,
}: {
  kicker: string
  title: React.ReactNode
  crumb: string
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40">
      <ParticleField density={40} />
      <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/25 blur-[110px]" />
      <div className="pointer-events-none absolute right-[18%] top-40 h-40 w-40 rounded-full bg-cyan-400/20 blur-[90px]" />
      <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-[0.4em] text-cyan-400"
        >
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="neon-text mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 flex items-center justify-center gap-2 text-[12px] text-slate-500"
        >
          <Link to="/" className="hover:text-cyan-300">Home</Link>
          <ChevronRight size={12} />
          <span className="text-slate-400">{crumb}</span>
        </motion.div>
      </div>
    </section>
  )
}
