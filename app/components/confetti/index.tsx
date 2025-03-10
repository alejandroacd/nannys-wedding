"use client"

import type React from "react"
import { useEffect, useRef } from "react"
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

export default function ConfettiEffect({
  children,
  colors,
  particleCount,
  spread,
  startVelocity,
  decay,
  origin,
}: ConfettiEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

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

          // Disconnect and re-observe after some time for repeated triggers
          observer.disconnect()
          setTimeout(() => {
            if (containerRef.current) observer.observe(containerRef.current)
          }, 3000) // Adjust the delay as needed
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [colors, particleCount, spread, startVelocity, decay, origin])

  return <div ref={containerRef}>{children}</div>
}
