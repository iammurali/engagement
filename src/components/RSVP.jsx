import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeSjDPcWS-9Y0Lm3Ju_y_JzdBanfRCHLkJ_yQ4T-h_JASMD4A/viewform'

export default function RSVP() {
  return (
    <section
      className="relative flex flex-col items-center justify-center snap-start px-8"
      style={{ background: 'var(--color-bg)', minHeight: '100dvh' }}
    >
      {/* Decorative corner petals */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 32,
          left: 24,
          fontSize: '2rem',
          opacity: 0.18,
          transform: 'rotate(-20deg)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        🌸
      </span>
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 32,
          right: 24,
          fontSize: '2rem',
          opacity: 0.18,
          transform: 'rotate(20deg) scaleX(-1)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        🌸
      </span>
      <span
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 40,
          left: 28,
          fontSize: '1.6rem',
          opacity: 0.13,
          transform: 'rotate(15deg)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        🌺
      </span>
      <span
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 40,
          right: 28,
          fontSize: '1.6rem',
          opacity: 0.13,
          transform: 'rotate(-15deg) scaleX(-1)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        🌺
      </span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease }}
        className="flex flex-col items-center text-center w-full"
        style={{ maxWidth: 420, padding: '0 12px' }}
      >
        {/* Label */}
        <p
          className="font-inter uppercase tracking-[0.44em]"
          style={{ fontSize: '0.57rem', color: 'var(--color-accent)', opacity: 0.7 }}
        >
          RSVP
        </p>

        {/* Divider line */}
        <div
          style={{
            width: 1,
            height: 32,
            background: 'linear-gradient(to bottom, transparent, var(--color-accent))',
            margin: '10px auto 14px',
          }}
        />

        {/* Heading */}
        <p
          className="font-vibes"
          style={{
            fontSize: 'clamp(2.2rem, 7vw, 3rem)',
            color: 'var(--color-primary)',
            lineHeight: 1.1,
          }}
        >
          You're the ones we've been waiting for
        </p>

        {/* Subtext */}
        <p
          className="font-cormorant italic mt-2"
          style={{
            fontSize: 'clamp(0.88rem, 2.8vw, 1rem)',
            color: 'var(--color-text-muted)',
            opacity: 0.65,
          }}
        >
          Murali & Sruthi would love to hear from you
        </p>

        {/* Ornament row */}
        <div
          className="flex items-center gap-3 mt-6 mb-8"
          style={{ opacity: 0.45 }}
        >
          <div style={{ width: 40, height: 1, background: 'var(--color-accent)' }} />
          <span style={{ fontSize: '1rem', color: 'var(--color-accent)' }}>✦</span>
          <div style={{ width: 40, height: 1, background: 'var(--color-accent)' }} />
        </div>

        {/* Card */}
        <div
          style={{
            width: '100%',
            borderRadius: 16,
            border: '1px solid var(--color-border)',
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(8px)',
            padding: '2rem 1.75rem 2.25rem',
            boxShadow: '0 4px 32px rgba(163,29,39,0.07)',
          }}
        >
            <p
            className="font-cormorant italic"
            style={{
              fontSize: 'clamp(1.05rem, 3vw, 1.2rem)',
              color: 'var(--color-text-dark)',
              lineHeight: 1.75,
              marginBottom: '1.6rem',
              opacity: 0.8,
            }}
          >
            Out of everyone in the world, your presence and your words mean the most. Drop a wish, share a memory, or just let Murali & Sruthi know you'll be there — they'd treasure every word from you.
          </p>

          {/* CTA Button */}
          <motion.a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.55rem',
              width: '100%',
              padding: '1rem 1.5rem',
              borderRadius: 10,
              background: 'linear-gradient(135deg, var(--color-primary) 0%, #c4242f 100%)',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(163,29,39,0.32)',
              cursor: 'pointer',
            }}
          >
            <span>Drop Your Wishes</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.85 }}>
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          <p
            style={{
              marginTop: '0.9rem',
              fontSize: '0.72rem',
              color: 'var(--color-text-muted)',
              opacity: 0.5,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            Takes a minute · means a lifetime 🧡
          </p>
        </div>
      </motion.div>
    </section>
  )
}
