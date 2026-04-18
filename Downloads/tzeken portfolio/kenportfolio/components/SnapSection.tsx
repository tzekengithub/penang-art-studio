'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
}

export function SnapSection({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <div
      ref={ref}
      style={{ scrollSnapAlign: 'start' }}
      className={`min-h-screen ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 50, filter: 'blur(6px)' }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }
            : {}
        }
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
