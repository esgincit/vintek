import { Link } from 'react-router-dom'
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT, SERVICES, TECHNOLOGIES } from '../data/content'

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Why Choose Us', to: '/why-choose-us' },
  { label: 'We Support', to: '/we-support' },
  { label: 'Clients', to: '/clients' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#07071a]">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5">
                <svg viewBox="0 0 64 64" className="h-6 w-6">
                  <defs>
                    <linearGradient id="flg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#22d3ee" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <path d="M14 18 L32 48 L50 18" stroke="url(#flg)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="50" cy="18" r="5" fill="#22d3ee" />
                </svg>
              </span>
              <span className="font-display text-xl tracking-[0.22em] text-white">
                VIN<span className="text-gradient font-bold">TEK</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              A provider of world-class integrated business, technology and process solutions on a global delivery platform.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-400">Company</h4>
            <ul className="mt-5 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 transition hover:text-white hover:pl-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-fuchsia-400">Services</h4>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-slate-400 transition hover:text-white hover:pl-1">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet-400">Headquarters</h4>
            <ul className="mt-5 space-y-3.5 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                {CONTACT.address}
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white">{CONTACT.phone}</a>
              </li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-medium text-emerald-300">Systems operational</span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
          <p className="text-[12px] tracking-wide text-slate-500">
            COPYRIGHT © VINTEK LLC 2026. ALL RIGHTS RESERVED.{' '}
            <Link to="/disclaimer" className="text-slate-400 underline decoration-dotted hover:text-cyan-300">DISCLAIMER</Link>
          </p>
          <div className="flex gap-6 text-[12px] text-slate-500">
            <Link to="/company-terms" className="hover:text-cyan-300">Company Terms</Link>
            <Link to="/privacy-policy" className="hover:text-cyan-300">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="pointer-events-none select-none overflow-hidden pb-2">
        <p className="text-center font-display text-[16vw] font-bold leading-none tracking-[0.12em] text-white/[0.035]">
          VINTEK
        </p>
      </div>
    </footer>
  )
}
