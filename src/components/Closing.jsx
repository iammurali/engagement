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

export default function Closing() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-dvh snap-start px-8 text-center overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 55%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative flex flex-col items-center w-full" style={{ maxWidth: 520 }}>

        {/* Opening line */}
        <Reveal delay={0}>
          <p
            className="font-inter uppercase tracking-[0.42em]"
            style={{ fontSize: '0.67rem', color: 'var(--color-accent)', opacity: 0.7 }}
          >
            Until then
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            style={{
              width: 1,
              height: 44,
              background: 'linear-gradient(to bottom, transparent, var(--color-accent))',
              margin: '16px auto 20px',
              transformOrigin: 'top',
            }}
          />
        </Reveal>

        {/* Main closing line */}
        <Reveal delay={0.28}>
          <p
            className="font-vibes"
            style={{
              fontSize: 'clamp(2.7rem, 9vw, 4.1rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.1,
            }}
          >
            We cannot wait
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <p
            className="font-vibes"
            style={{
              fontSize: 'clamp(2.7rem, 9vw, 4.1rem)',
              color: 'var(--color-primary)',
              lineHeight: 1.1,
              marginTop: -4,
            }}
          >
            to see you there.
          </p>
        </Reveal>

        {/* Divider */}
        <Reveal delay={0.5} style={{ margin: '28px 0' }}>
          <div
            style={{
              width: 48,
              height: 1,
              background: 'var(--color-accent)',
              opacity: 0.3,
              margin: '0 auto',
            }}
          />
        </Reveal>

        {/* With love line */}
        <Reveal delay={0.58}>
          <p
            className="font-cormorant italic"
            style={{
              fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)',
              color: 'var(--color-text-muted)',
              opacity: 0.75,
              marginBottom: 22,
            }}
          >
            With love &amp; blessings from both our families
          </p>
        </Reveal>

        {/* Family names */}
        <Reveal delay={0.68}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <p
                className="font-cormorant"
                style={{
                  fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
                  color: 'var(--color-text-dark)',
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Sekar &amp; Chitra
              </p>
              <p
                className="font-inter uppercase tracking-[0.24em] mt-1"
                style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', opacity: 0.55 }}
              >
                Sruthi's Family
              </p>
            </div>

            <span
              className="font-vibes"
              style={{
                fontSize: 'clamp(1.7rem, 5vw, 2.3rem)',
                color: 'var(--color-accent)',
                opacity: 0.5,
                lineHeight: 1,
              }}
            >
              &amp;
            </span>

            <div className="flex flex-col items-center">
              <p
                className="font-cormorant"
                style={{
                  fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
                  color: 'var(--color-text-dark)',
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                Elumalai &amp; Mala
              </p>
              <p
                className="font-inter uppercase tracking-[0.24em] mt-1"
                style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', opacity: 0.55 }}
              >
                Murali's Family
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bottom thread */}
        <Reveal delay={0.78}>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            style={{
              width: 1,
              height: 36,
              background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
              margin: '24px auto',
              transformOrigin: 'top',
            }}
          />
        </Reveal>

        {/* Date */}
        <Reveal delay={0.88}>
          <p
            className="font-inter uppercase tracking-[0.36em]"
            style={{ fontSize: '0.7rem', color: 'var(--color-accent)', opacity: 0.8 }}
          >
            27 · 05 · 2026
          </p>
        </Reveal>

        {/* Tanuj */}
        <Reveal delay={1.0}>
          <div className="flex flex-col items-center mt-8">
            <div className="flex items-center gap-2" style={{ opacity: 0.4 }}>
              <div style={{ width: 24, height: 1, background: 'var(--color-accent)' }} />
              <span style={{ fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}>also</span>
              <div style={{ width: 24, height: 1, background: 'var(--color-accent)' }} />
            </div>
            <p
              className="font-vibes mt-2"
              style={{
                fontSize: 'clamp(1.7rem, 5.5vw, 2.1rem)',
                color: 'var(--color-primary)',
                lineHeight: 1.2,
              }}
            >
              Tanuj Mayon
            </p>
            <p
              className="font-cormorant italic mt-1"
              style={{
                fontSize: 'clamp(0.88rem, 2.4vw, 0.98rem)',
                color: 'var(--color-text-muted)',
                opacity: 0.6,
                letterSpacing: '0.03em',
              }}
            >
              Sruthi's little nephew — and he can't wait to play with you all 🐭
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
