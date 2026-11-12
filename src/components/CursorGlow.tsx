import { useEffect, useState } from 'react'

/** Soft neon glow that follows the cursor. */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-0 hidden h-[480px] w-[480px] rounded-full opacity-60 lg:block"
      style={{
        left: pos.x - 240,
        top: pos.y - 240,
        background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, rgba(34,211,238,0.05) 40%, transparent 70%)',
      }}
      aria-hidden
    />
  )
}
