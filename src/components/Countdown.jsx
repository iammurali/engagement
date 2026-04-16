import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'

const ease = [0.22, 1, 0.36, 1]

// 27 May 2026, 10:30 AM IST (UTC+5:30 = UTC 05:00)
const TARGET = new Date('2026-05-27T05:00:00.000Z').getTime()

function CountTile({ value, label, delay }) {
  const display = String(value).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, delay, ease }}
      className="flex flex-col items-center"
    >
      <div
        className="relative flex items-center justify-center rounded-sm"
        style={{
          width: 'clamp(64px, 18vw, 88px)',
          height: 'clamp(64px, 18vw, 88px)',
          background: 'rgba(255,255,255,0.45)',
          border: '1px solid var(--color-border)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(163,29,39,0.07), inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
      >
        <span
          className="font-cormorant"
          style={{
            fontSize: 'clamp(1.8rem, 7vw, 2.6rem)',
            color: 'var(--color-primary)',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          {display}
        </span>
      </div>
      <p
        className="font-inter uppercase mt-2"
        style={{
          fontSize: '0.58rem',
          color: 'var(--color-text-muted)',
          letterSpacing: '0.18em',
        }}
      >
        {label}
      </p>
    </motion.div>
  )
}

export default function Countdown() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(TARGET)

  return (
    <section
      className="flex flex-col flex-none justify-center items-center px-8 md:px-16 min-h-[100dvh] snap-start text-center"
      style={{ maxWidth: 800, margin: '0 auto' }}
    >
      <motion.p
        className="font-inter uppercase tracking-[0.25em] mb-3"
        style={{ fontSize: '0.65rem', color: 'var(--color-accent)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
      >
        Counting Down
      </motion.p>

      <motion.h2
        className="font-cormorant mb-10"
        style={{
          fontSize: 'clamp(1.6rem, 5.5vw, 2.4rem)',
          color: 'var(--color-text-dark)',
          fontWeight: 300,
        }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        {isPast ? 'The celebration has begun' : 'Until the celebration begins'}
      </motion.h2>

      {!isPast && (
        <div className="flex items-start gap-3 sm:gap-5">
          <CountTile value={days} label="Days" delay={0.2} />
          <motion.span
            className="font-cormorant self-start mt-3"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
              color: 'var(--color-accent)',
              opacity: 0.6,
              lineHeight: 1,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            :
          </motion.span>
          <CountTile value={hours} label="Hours" delay={0.35} />
          <motion.span
            className="font-cormorant self-start mt-3"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
              color: 'var(--color-accent)',
              opacity: 0.6,
              lineHeight: 1,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            :
          </motion.span>
          <CountTile value={minutes} label="Minutes" delay={0.5} />
          <motion.span
            className="font-cormorant self-start mt-3"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
              color: 'var(--color-accent)',
              opacity: 0.6,
              lineHeight: 1,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            :
          </motion.span>
          <CountTile value={seconds} label="Seconds" delay={0.65} />
        </div>
      )}

      <motion.p
        className="font-cormorant italic mt-10"
        style={{
          fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
          color: 'var(--color-text-muted)',
          fontWeight: 300,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.7, ease }}
      >
        27 May 2026 &nbsp;&middot;&nbsp; 10:30 AM IST
      </motion.p>
    </section>
  )
}
