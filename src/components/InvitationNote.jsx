import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

function Reveal({ children, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.0, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function Thread({ delay = 0, height = 48, fromColor = 'transparent', toColor = 'var(--color-accent)' }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease }}
      style={{
        width: 1,
        height,
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
        margin: '0 auto',
        transformOrigin: 'top',
      }}
    />
  )
}

export default function InvitationNote() {
  return (
    <section
      className="relative flex items-center justify-center min-h-dvh snap-start px-8"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 48%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative w-full max-w-lg flex flex-col items-center text-center">

        {/* Label */}
        <Reveal delay={0}>
          <p
            className="font-inter uppercase tracking-[0.42em]"
            style={{ fontSize: '0.58rem', color: 'var(--color-accent)', opacity: 0.7 }}
          >
            The Ceremony
          </p>
        </Reveal>

        <Reveal delay={0.12} style={{ margin: '18px 0' }}>
          <Thread delay={0.18} height={44} fromColor="transparent" toColor="var(--color-accent)" />
        </Reveal>

        {/* Occasion name in script */}
        <Reveal delay={0.28}>
          <p
            className="font-vibes"
            style={{
              fontSize: 'clamp(3rem, 11vw, 5rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.05,
            }}
          >
            Engagement
          </p>
        </Reveal>

        {/* Tamil script — visual texture, cultural grounding */}
        <Reveal delay={0.4}>
          <p
            className="font-cormorant"
            style={{
              fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              fontStyle: 'italic',
              letterSpacing: '0.04em',
              marginTop: 6,
              opacity: 0.7,
            }}
          >
            நிச்சயதார்த்தம்
          </p>
        </Reveal>

        {/* Meaning */}
        <Reveal delay={0.52} style={{ marginTop: 28 }}>
          <p
            className="font-cormorant"
            style={{
              fontSize: 'clamp(1.05rem, 3.8vw, 1.3rem)',
              color: 'var(--color-text-muted)',
              fontWeight: 400,
              lineHeight: 1.8,
              fontStyle: 'italic',
            }}
          >
            The sacred moment when two families
            <br />
            come together in joy, love and promise.
          </p>
        </Reveal>

        {/* Divider */}
        <Reveal delay={0.62} style={{ margin: '28px 0' }}>
          <div style={{ width: 50, height: 1, background: 'var(--color-accent)', opacity: 0.3, margin: '0 auto' }} />
        </Reveal>

        {/* Invitation from families */}
        <Reveal delay={0.72}>
          <p
            className="font-cormorant"
            style={{
              fontSize: 'clamp(1.1rem, 4vw, 1.35rem)',
              color: 'var(--color-text-dark)',
              fontWeight: 400,
              lineHeight: 1.75,
            }}
          >
            With the blessings of our families,
            <br />
            we joyfully invite you to witness
            <br />
            and celebrate this auspicious occasion.
          </p>
        </Reveal>

        <Reveal delay={0.82} style={{ margin: '24px 0' }}>
          <Thread delay={0.88} height={36} fromColor="var(--color-accent)" toColor="transparent" />
        </Reveal>

        {/* Date */}
        <Reveal delay={0.92}>
          <p
            className="font-inter uppercase tracking-[0.34em]"
            style={{ fontSize: '0.63rem', color: 'var(--color-accent)' }}
          >
            27th May 2026
          </p>
        </Reveal>

      </div>
    </section>
  )
}
