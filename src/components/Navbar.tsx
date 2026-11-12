import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { NAV, CONTACT } from '../data/content'

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5">
        <svg viewBox="0 0 64 64" className="h-6 w-6">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <path d="M14 18 L32 48 L50 18" stroke="url(#lg)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="50" cy="18" r="5" fill="#22d3ee" />
        </svg>
        <span className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md opacity-0 transition group-hover:opacity-100" />
      </span>
      <span className="font-display text-xl font-bold tracking-[0.22em] text-white">
        VIN<span className="text-gradient font-bold">TEK</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSub, setMobileSub] = useState<string | null>(null)
  const location = useLocation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.45)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8" ref={ref}>
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
            >
              <Link
                to={item.to}
                className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium tracking-wide transition ${
                  location.pathname === item.to || item.children?.some((c) => c.to === location.pathname)
                    ? 'text-cyan-300'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={13} className={`transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`} />}
              </Link>
              {item.children && (
                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="glass-strong absolute left-0 top-full mt-1 w-64 rounded-2xl p-2 shadow-2xl shadow-black/60"
                    >
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className={`block rounded-xl px-4 py-2.5 text-[13px] transition ${
                            location.pathname === c.to
                              ? 'bg-cyan-400/10 text-cyan-300'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <a
            href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`}
            className="ml-3 flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-[13px] font-semibold text-cyan-300 transition hover:bg-cyan-400/20 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
          >
            <Phone size={13} className="animate-pulse" />
            {CONTACT.phone}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass-strong overflow-hidden lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {NAV.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link to={item.to} className="block py-2.5 text-sm font-medium text-slate-200">
                      {item.label}
                    </Link>
                    {item.children && (
                      <button onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)} className="p-2 text-slate-400">
                        <ChevronDown size={16} className={mobileSub === item.label ? 'rotate-180' : ''} />
                      </button>
                    )}
                  </div>
                  {item.children && mobileSub === item.label && (
                    <div className="ml-3 space-y-0.5 border-l border-white/10 pl-3">
                      {item.children.map((c) => (
                        <Link key={c.to} to={c.to} className="block py-2 text-[13px] text-slate-400 hover:text-cyan-300">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`} className="mt-3 flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300">
                <Phone size={14} /> {CONTACT.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
