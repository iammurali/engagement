import { motion } from 'framer-motion'
import { DiamondDivider, MandalaBg, Sunflower } from './Ornaments'

const ease = [0.22, 1, 0.36, 1]

function Particle({ style }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: style.size,
        height: style.size,
        left: style.x,
        top: style.y,
        backgroundColor: style.color,
        opacity: 0,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, style.opacity, 0],
      }}
      transition={{
        duration: style.duration,
        delay: style.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

const particles = Array.from({ length: 24 }, (_, i) => ({
  size: Math.random() * 5 + 3,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  color: i % 2 === 0 ? '#D4AF37' : '#800020',
  opacity: Math.random() * 0.4 + 0.15,
  duration: Math.random() * 6 + 6,
  delay: Math.random() * 5,
}))

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[100dvh] snap-start overflow-hidden px-8 md:px-16"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Mandala background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
      >
        <MandalaBg
          className="w-[min(95vw,520px)] h-[min(95vw,520px)]"
          style={{ color: 'var(--color-accent)', opacity: 0.12 }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <Particle key={i} style={p} />
        ))}
      </div>

      {/* Swaying Sunflowers Left & Right */}
      <motion.div
        className="absolute bottom-0 left-[2vw] sm:left-6 z-20 pointer-events-none"
        style={{ 
          width: 'clamp(90px, 20vw, 150px)', 
          transformOrigin: 'bottom center', 
          color: 'var(--color-primary)' 
        }}
        animate={{ rotate: [-2, 3, -1, 3, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sunflower className="w-full h-auto drop-shadow-md" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-[2vw] sm:right-8 z-20 pointer-events-none"
        style={{ 
          width: 'clamp(110px, 24vw, 180px)', 
          transformOrigin: 'bottom center', 
          color: 'var(--color-primary)' 
        }}
        animate={{ rotate: [3, -2, 2, -3, 3] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ transform: 'scaleX(-1)' }}>
          <Sunflower className="w-full h-auto drop-shadow-md opacity-90" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Ornamental top line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <DiamondDivider style={{ color: 'var(--color-accent)' }} />
        </motion.div>

        {/* Save the Date */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.5, delay: 0.8, ease }}
          className="font-inter mt-6 mb-4 text-xs uppercase tracking-[0.3em]"
          style={{ color: 'var(--color-accent)' }}
        >
          Save the Date
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 1.2, ease }}
          className="font-cormorant leading-none"
          style={{
            fontSize: 'clamp(2.8rem, 11vw, 6rem)',
            color: 'var(--color-text-dark)',
            fontWeight: 300,
          }}
        >
          Theanmozhi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.7, ease }}
          className="font-vibes my-1"
          style={{
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            color: 'var(--color-primary)',
            lineHeight: 1.1,
          }}
        >
          &amp;
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 2.0, ease }}
          className="font-cormorant leading-none"
          style={{
            fontSize: 'clamp(2.8rem, 11vw, 6rem)',
            color: 'var(--color-text-dark)',
            fontWeight: 300,
          }}
        >
          Murali
        </motion.h1>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.5, ease }}
          className="mt-7 flex flex-col items-center gap-1"
        >
          <DiamondDivider style={{ color: 'var(--color-accent)' }} />
          <p
            className="font-cormorant mt-3 italic"
            style={{
              fontSize: 'clamp(1.05rem, 3.5vw, 1.4rem)',
              color: 'var(--color-text-muted)',
              fontWeight: 400,
            }}
          >
            27th May 2026 &nbsp;&middot;&nbsp; Nichayathartham
          </p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <p className="font-inter text-xs tracking-widest uppercase" style={{ fontSize: '0.65rem' }}>Scroll</p>
        <motion.svg
          viewBox="0 0 14 22"
          fill="none"
          className="w-3.5 h-5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
          <motion.rect
            x="5.5" y="4" width="3" height="5" rx="1.5"
            fill="currentColor"
            animate={{ y: [0, 4, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      </motion.div>
    </section>
  )
}
