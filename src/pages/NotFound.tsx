import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-gradient font-display text-[110px] font-bold leading-none md:text-[160px]"
      >
        404
      </motion.p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-white">Signal lost in hyperspace.</h1>
      <p className="mt-3 text-slate-400">The page you're looking for doesn't exist or has been relocated.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-3.5 text-sm font-semibold text-black transition hover:shadow-[0_0_32px_rgba(34,211,238,0.45)]"
      >
        Return to base
      </Link>
    </section>
  )
}
