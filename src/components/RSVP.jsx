import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeSjDPcWS-9Y0Lm3Ju_y_JzdBanfRCHLkJ_yQ4T-h_JASMD4A/viewform?embedded=true'

export default function RSVP() {
  return (
    <section
      className="relative flex flex-col snap-start"
      style={{ background: 'var(--color-bg)', minHeight: '100dvh' }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease }}
        className="flex flex-col items-center text-center pt-14 pb-5 px-6"
      >
        <p
          className="font-inter uppercase tracking-[0.44em]"
          style={{ fontSize: '0.57rem', color: 'var(--color-accent)', opacity: 0.7 }}
        >
          RSVP
        </p>

        <div
          style={{
            width: 1,
            height: 32,
            background: 'linear-gradient(to bottom, transparent, var(--color-accent))',
            margin: '10px auto 14px',
          }}
        />

        <p
          className="font-vibes"
          style={{
            fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
            color: 'var(--color-primary)',
            lineHeight: 1.1,
          }}
        >
          Will you join us?
        </p>

        <p
          className="font-cormorant italic mt-1"
          style={{
            fontSize: 'clamp(0.88rem, 2.8vw, 1rem)',
            color: 'var(--color-text-muted)',
            opacity: 0.65,
          }}
        >
          Kindly let us know by 20th May 2026
        </p>
      </motion.div>

      {/* Full-width form */}
      <motion.iframe
        src={FORM_URL}
        title="RSVP Form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{
          display: 'block',
          width: '100%',
          flex: 1,
          minHeight: 'clamp(700px, 130svh, 1200px)',
          border: 'none',
        }}
      >
        Loading…
      </motion.iframe>
    </section>
  )
}
