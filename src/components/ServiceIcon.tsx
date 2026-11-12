import { Briefcase, Gem, GraduationCap, Map, ShieldCheck, Users } from 'lucide-react'

const map: Record<string, React.ElementType> = {
  map: Map,
  users: Users,
  shield: ShieldCheck,
  gem: Gem,
  graduation: GraduationCap,
  briefcase: Briefcase,
}

const colors: Record<string, { glow: string; text: string; border: string }> = {
  cyan: { glow: 'bg-cyan-400/15', text: 'text-cyan-300', border: 'border-cyan-400/30' },
  violet: { glow: 'bg-violet-400/15', text: 'text-violet-300', border: 'border-violet-400/30' },
  fuchsia: { glow: 'bg-fuchsia-400/15', text: 'text-fuchsia-300', border: 'border-fuchsia-400/30' },
}

export default function ServiceIcon({ icon, color = 'cyan', size = 'md' }: { icon: string; color?: string; size?: 'md' | 'lg' }) {
  const Icon = map[icon] ?? Gem
  const c = colors[color] ?? colors.cyan
  const dim = size === 'lg' ? 'h-16 w-16' : 'h-12 w-12'
  return (
    <span className={`relative grid ${dim} place-items-center rounded-2xl border ${c.border} ${c.glow}`}>
      <Icon size={size === 'lg' ? 28 : 20} className={c.text} strokeWidth={1.6} />
    </span>
  )
}
