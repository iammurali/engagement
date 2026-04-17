import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=CNV+Mahal+MTH+Road+Vepampattu+602024+Tiruvallur'

function Reveal({ children, delay = 0, style = {}, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function TheVenue() {
  return (
    <section
      className="relative flex flex-col items-center justify-center snap-start text-center px-8"
      style={{ background: 'var(--color-bg)', minHeight: '100dvh', paddingLeft: 24, paddingRight: 24 }}
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(232,141,20,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative flex flex-col items-center w-full" style={{ maxWidth: 480, width: '100%' }}>

        {/* Label */}
        <Reveal delay={0}>
          <p
            className="font-inter uppercase tracking-[0.44em]"
            style={{ fontSize: '0.6rem', color: 'var(--color-accent)', opacity: 0.75 }}
          >
            The Venue
          </p>
        </Reveal>

        {/* Divider line down */}
        <Reveal delay={0.1}>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            style={{
              width: 1,
              height: 36,
              background: 'linear-gradient(to bottom, transparent, var(--color-accent))',
              margin: '12px auto 18px',
              transformOrigin: 'top',
            }}
          />
        </Reveal>

        {/* Venue name */}
        <Reveal delay={0.2}>
          <h2
            className="font-cormorant"
            style={{
              fontSize: 'clamp(2.8rem, 10vw, 4.4rem)',
              color: 'var(--color-primary)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '0.04em',
            }}
          >
            CNV Mahal
          </h2>
        </Reveal>

        {/* AC tag */}
        <Reveal delay={0.3}>
          <span
            className="font-inter uppercase tracking-[0.22em] inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full"
            style={{
              fontSize: '0.52rem',
              color: 'var(--color-accent)',
              border: '1px solid var(--color-border)',
              background: 'rgba(232,141,20,0.06)',
            }}
          >
            ❄ Air-Conditioned Hall
          </span>
        </Reveal>

        {/* Ornament divider */}
        <Reveal delay={0.38} style={{ margin: '28px 0' }}>
          <div className="flex items-center gap-3">
            <div style={{ width: 48, height: 1, background: 'var(--color-accent)', opacity: 0.25 }} />
            <span style={{ fontSize: '0.9rem', color: 'var(--color-accent)', opacity: 0.5 }}>✦</span>
            <div style={{ width: 48, height: 1, background: 'var(--color-accent)', opacity: 0.25 }} />
          </div>
        </Reveal>

        {/* Address card */}
        <Reveal delay={0.46} style={{ width: '100%' }}>
          <div
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: 14,
              padding: '1.5rem 1.75rem',
              background: 'rgba(255,255,255,0.45)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 24px rgba(163,29,39,0.05)',
            }}
          >
            <p
              className="font-inter uppercase tracking-[0.22em]"
              style={{ fontSize: '0.5rem', color: 'var(--color-accent)', opacity: 0.6, marginBottom: '0.75rem' }}
            >
              Address
            </p>
            <p
              className="font-cormorant"
              style={{
                fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)',
                color: 'var(--color-text-dark)',
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              M.T.H. Road, Vepampattu
              <br />
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.92em' }}>
                Tiruvallur District, Tamil Nadu — 602024
              </span>
            </p>
          </div>
        </Reveal>

        {/* Map pin + directions */}
        <Reveal delay={0.56} style={{ marginTop: '2rem', width: '100%' }}>
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MapPin size={26} strokeWidth={1.5} style={{ color: 'var(--color-primary)' }} />
            </motion.div>

            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="font-inter inline-flex items-center justify-center gap-2"
              style={{
                width: '100%',
                padding: '0.9rem 1.5rem',
                borderRadius: 10,
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #c4242f 100%)',
                color: '#fff',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(163,29,39,0.3)',
              }}
            >
              <span>Get Directions</span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ opacity: 0.85 }}>
                <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            <p
              className="font-cormorant italic"
              style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', opacity: 0.5 }}
            >
              Opens in Google Maps
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
