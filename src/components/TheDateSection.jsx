import { motion } from 'framer-motion'
import { LotusOrnament, DiamondDivider } from './Ornaments'

const ease = [0.22, 1, 0.36, 1]

export default function TheDateSection() {
  return (
    <section
      className="flex flex-col flex-none justify-center items-center px-8 md:px-16 min-h-[100dvh] snap-start text-center relative"
      style={{ maxWidth: 800, margin: '0 auto' }}
    >
      <motion.p
        className="font-inter uppercase tracking-[0.25em] mb-4"
        style={{ fontSize: '0.65rem', color: 'var(--color-accent)' }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
      >
        The Auspicious Day
      </motion.p>

      {/* Main Calendar Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease }}
        className="relative w-full max-w-[360px] mx-auto p-2 rounded-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.4)',
          border: '1px solid var(--color-border)',
          boxShadow: '0 22px 60px rgba(163, 29, 39, 0.08)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Inner Card Frame */}
        <div
          className="relative flex flex-col items-center p-10 overflow-hidden rounded-lg"
          style={{ border: '1px dashed var(--color-accent)', background: 'rgba(255,255,255,0.7)' }}
        >
          {/* Faded Background Number */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cormorant pointer-events-none select-none z-0"
            style={{
              fontSize: '18rem',
              color: 'var(--color-primary)',
              opacity: 0.04,
              lineHeight: 0
            }}
          >
            27
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <LotusOrnament style={{ color: 'var(--color-accent)', width: '40px', marginBottom: '1.25rem' }} />

            <p
              className="font-inter uppercase tracking-widest mb-4"
              style={{ fontSize: '0.60rem', color: 'var(--color-text-muted)', letterSpacing: '0.3em' }}
            >
              Wednesday
            </p>

            <div className="flex items-center justify-center gap-4 w-full">
              <span className="font-cormorant" style={{ fontSize: '1.5rem', color: 'var(--color-text-dark)' }}>May</span>
              <span className="font-cormorant" style={{ fontSize: '4.5rem', color: 'var(--color-primary)', lineHeight: 0.8 }}>27</span>
              <span className="font-cormorant" style={{ fontSize: '1.5rem', color: 'var(--color-text-dark)' }}>2026</span>
            </div>

            <div className="w-full mt-8 mb-6 flex justify-center opacity-70">
              <DiamondDivider style={{ color: 'var(--color-accent)' }} />
            </div>

            <h2
              className="font-cormorant"
              style={{
                fontSize: 'clamp(1.4rem, 5vw, 1.8rem)',
                color: 'var(--color-text-dark)',
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              10:30 AM &ndash; 12:00 PM
            </h2>

            <p
              className="font-inter uppercase tracking-[0.25em] mt-8"
              style={{ fontSize: '0.55rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '15px', marginTop: '10px' }}
            >
              Auspicious Muhurtham
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
