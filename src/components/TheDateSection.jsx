import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function TheDateSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-dvh snap-start px-8 text-center overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 68%)',
        }}
      />

      <div className="relative flex flex-col items-center w-full" style={{ maxWidth: 480 }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease }}
          className="font-inter uppercase tracking-[0.44em]"
          style={{ fontSize: '0.57rem', color: 'var(--color-accent)', opacity: 0.7, marginBottom: 40 }}
        >
          The Auspicious Day
        </motion.p>

        {/* Month */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="font-inter uppercase"
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.55em',
            color: 'var(--color-accent)',
            marginBottom: 4,
          }}
        >
          M A Y
        </motion.p>

        {/* The date — the monument */}
        <motion.p
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, delay: 0.18, ease }}
          className="font-cormorant"
          style={{
            fontSize: 'clamp(9rem, 30vw, 16rem)',
            color: 'var(--color-primary)',
            fontWeight: 300,
            lineHeight: 0.82,
            letterSpacing: '-0.03em',
          }}
        >
          27
        </motion.p>

        {/* Year */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.28, ease }}
          className="font-inter uppercase"
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.45em',
            color: 'var(--color-text-muted)',
            opacity: 0.6,
            marginTop: 8,
          }}
        >
          2 0 2 6
        </motion.p>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.42, ease }}
          style={{
            width: '100%',
            maxWidth: 200,
            height: 1,
            background:
              'linear-gradient(to right, transparent, var(--color-accent) 25%, var(--color-accent) 75%, transparent)',
            margin: '28px auto',
            transformOrigin: 'center',
            opacity: 0.4,
          }}
        />

        {/* Day · Time · Ceremony — single elegant line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          className="flex items-center gap-3"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span
            className="font-inter uppercase tracking-[0.28em]"
            style={{ fontSize: '0.6rem', opacity: 0.65 }}
          >
            Wednesday
          </span>
          <span style={{ opacity: 0.3, fontSize: '0.5rem' }}>◆</span>
          <span
            className="font-cormorant"
            style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.85 }}
          >
            10:30 AM
          </span>
          <span style={{ opacity: 0.3, fontSize: '0.5rem' }}>◆</span>
          <span
            className="font-inter uppercase tracking-[0.28em]"
            style={{ fontSize: '0.6rem', color: 'var(--color-accent)', opacity: 0.8 }}
          >
            Muhurtham
          </span>
        </motion.div>

      </div>
    </section>
  )
}
