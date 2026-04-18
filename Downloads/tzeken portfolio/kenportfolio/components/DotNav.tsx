'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export function DotNav() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const elements = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = elements.indexOf(entry.target as HTMLElement)
            if (idx !== -1) setActiveIdx(idx)
          }
        })
      },
      { threshold: 0.4 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col gap-3">
      {SECTIONS.map((s, i) => (
        <div key={s.id} className="relative flex items-center justify-end gap-2">
          {hovered === i && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="font-mono text-[10px] text-white/50 whitespace-nowrap"
            >
              {s.label}
            </motion.span>
          )}
          <motion.button
            onClick={() => scrollTo(s.id)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              scale: i === activeIdx ? 1.6 : 1,
              backgroundColor: i === activeIdx ? '#00f5ff' : 'rgba(255,255,255,0.2)',
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-2 h-2 rounded-full"
            style={{
              boxShadow:
                i === activeIdx
                  ? '0 0 8px #00f5ff, 0 0 20px rgba(0,245,255,0.35)'
                  : 'none',
            }}
            aria-label={`Go to ${s.label}`}
          />
        </div>
      ))}
    </div>
  )
}
