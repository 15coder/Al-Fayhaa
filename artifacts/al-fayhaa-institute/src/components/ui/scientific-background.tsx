import { motion } from "framer-motion";
import { useMemo } from "react";

const SYMBOLS = ["π", "∑", "∞", "∫", "Δ", "λ", "σ", "θ", "α", "β", "√", "≈", "⚗", "⚡", "e²", "Ω", "μ", "φ", "∇", "∂"];

interface Particle {
  id: number;
  symbol: string;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function useParticles(count: number): Particle[] {
  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: SYMBOLS[i % SYMBOLS.length],
      x: (i * 97 + 13) % 100,
      size: 0.75 + ((i * 37) % 100) / 100 * 1.25,
      duration: 18 + ((i * 53) % 100) / 100 * 22,
      delay: -((i * 41) % 100) / 100 * 20,
      opacity: 0.03 + ((i * 29) % 100) / 100 * 0.05,
    }));
  }, [count]);
}

export function ScientificBackground() {
  const particles = useParticles(20);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute font-bold text-primary select-none"
          style={{
            left: `${p.x}%`,
            fontSize: `${p.size}rem`,
            opacity: p.opacity,
            bottom: "-5%",
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            opacity: [p.opacity, p.opacity * 1.6, p.opacity],
            rotate: [0, (p.id % 2 === 0 ? 1 : -1) * 15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.symbol}
        </motion.span>
      ))}
    </div>
  );
}
