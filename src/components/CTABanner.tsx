import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react'
import { CONTACT } from '../data/content'
import Reveal from './Reveal'

/** "Ready to speak with an expert?" call-to-action band, reused on every page. */
export default function CTABanner() {
  return (
    <section className="relative mx-auto mt-28 max-w-7xl px-5 lg:px-8">
      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-14 text-center md:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-[90px]" />
          <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <p className="relative font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-400">
            Transmission channel open
          </p>
          <h2 className="relative mt-3 font-display text-3xl font-bold text-white md:text-4xl">
            Ready to speak with an <span className="text-gradient">expert</span>?
          </h2>
          <p className="relative mt-4 text-slate-400">
            Give us a ring at{' '}
            <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`} className="font-semibold text-cyan-300 hover:underline">
              {CONTACT.phone}
            </a>
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-3.5 text-sm font-semibold text-black transition hover:shadow-[0_0_36px_rgba(34,211,238,0.5)]"
          >
            <PhoneCall size={16} />
            Contact Us
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
