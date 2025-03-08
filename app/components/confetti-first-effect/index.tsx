"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import confetti from "canvas-confetti"

interface ConfettiEffectProps {
  children: React.ReactNode
  colors?: string[]
  particleCount?: number
  spread?: number
  startVelocity?: number
  decay?: number
  origin?: { x: number; y: number }
}

export default function ConfettiFirstEffect({
  children,
  colors,
  particleCount,
  spread,
  startVelocity,
  decay,
  origin,
}: ConfettiEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    if (!containerRef.current || hasTriggered) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          confetti({
            particleCount: particleCount ?? 100,
            spread: spread ?? 70,
            startVelocity: startVelocity ?? 30,
            colors: colors ?? ["#A7D397", "#FFC0CB", "#F7D488", "#C3A2FF", "#A8D5E2"], // 🌸 Spring Colors
            origin: origin ?? { x: 0.5, y: 0.5 },
            decay: decay ?? 0.9,
            disableForReducedMotion: true,
          })
          setHasTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [colors, particleCount, spread, startVelocity, decay, origin, hasTriggered])

  return <div ref={containerRef}>{children}</div>
}