'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ParticleCanvas } from '@/components/ParticleCanvas'
import { MetallicTitle } from '@/components/MetallicTitle'
import { Button } from '@/components/ui/button'

const TAGLINES = [
  'I build AI websites that make competitors sweat.',
  'Your SME deserves a site that actually converts.',
  'From Penang. To the internet. At full speed.',
]

export function Hero() {
  const taglineRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let i = 0
    let charIndex = 0
    let deleting = false
    let timeoutId: ReturnType<typeof setTimeout>

    const type = () => {
      const current = TAGLINES[i]
      if (!taglineRef.current) return

      if (!deleting) {
        taglineRef.current.textContent = current.slice(0, charIndex + 1)
        charIndex++
        if (charIndex === current.length) {
          deleting = true
          timeoutId = setTimeout(type, 2400)
          return
        }
      } else {
        taglineRef.current.textContent = current.slice(0, charIndex - 1)
        charIndex--
        if (charIndex === 0) {
          deleting = false
          i = (i + 1) % TAGLINES.length
        }
      }
      timeoutId = setTimeout(type, deleting ? 40 : 70)
    }

    timeoutId = setTimeout(type, 800)
    return () => clearTimeout(timeoutId)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/60173925380?text=Hi%20Ken%2C%20I%20found%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!', '_blank')
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <ParticleCanvas />

      {/* Scan line effect */}
      <div className="scan-line" aria-hidden="true" />

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 font-mono text-xs text-[#00f5ff]/20 hidden lg:block">
        <div>[LAT 5.4164° N]</div>
        <div>[LON 100.3327° E]</div>
        <div>[EST. 2008]</div>
      </div>
      <div className="absolute top-24 right-6 font-mono text-xs text-[#00f5ff]/20 text-right hidden lg:block">
        <div>[STATUS: BUILDING]</div>
        <div>[SLOTS: LIMITED]</div>
        <div>[PING: LOW]</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 font-mono text-xs text-[#00f5ff]/70 mb-8 px-4 py-2 border border-[#00f5ff]/20 rounded-full bg-[#00f5ff]/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-pulse" />
          GEORGE TOWN, PENANG, MALAYSIA
          <span className="text-white/30">·</span>
          <span className="text-[#ff4d6d]">17 YRS OLD</span>
        </motion.div>

        {/* 3D Metallic name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <MetallicTitle />
        </motion.div>

        {/* Typewriter tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-4 h-[2.5rem] flex items-center justify-center"
        >
          <p className="font-grotesk text-[clamp(1rem,2.5vw,1.5rem)] text-white/80 font-medium">
            <span ref={taglineRef} />
            <span className="inline-block w-0.5 h-5 bg-[#00f5ff] ml-1 animate-pulse align-middle" />
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="font-mono text-2xl font-bold text-transparent bg-clip-text mb-12"
          style={{
            backgroundImage: 'linear-gradient(90deg, #00f5ff, #ff4d6d, #00f5ff)',
            backgroundSize: '200% auto',
            animation: 'gradient-shift 3s linear infinite',
          }}
        >
          17.&nbsp;&nbsp;Solo.&nbsp;&nbsp;Shipping.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" onClick={scrollToProjects} className="font-mono w-full sm:w-auto group">
            See My Work
            <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Button>
          <Button size="lg" variant="whatsapp" onClick={openWhatsApp} className="font-mono w-full sm:w-auto">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Let's Talk
          </Button>
        </motion.div>

        {/* Award badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-10 flex items-center justify-center gap-2 font-mono text-xs text-white/30"
        >
          <span className="text-yellow-400">🏆</span>
          <span>1st Runner-Up · Coolest Projects Malaysia 2024</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-white/25">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00f5ff]/40 to-transparent animate-float" />
      </motion.div>

      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  )
}
