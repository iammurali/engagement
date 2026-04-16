import { motion } from 'framer-motion'
import { LotusOrnament } from './Ornaments'

const ease = [0.22, 1, 0.36, 1]

export default function InvitationNote() {
  return (
    <section
      className="flex flex-col flex-none justify-center items-center px-8 md:px-16 min-h-[100dvh] snap-start text-center"
      style={{ maxWidth: 760, margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease }}
        className="w-[90%] sm:w-full max-w-[480px] relative flex flex-col items-center px-6 py-12 sm:py-16 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          border: '1px solid var(--color-border)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 10px 40px rgba(163, 29, 39, 0.05)',
        }}
      >
        <LotusOrnament style={{ color: 'var(--color-accent)' }} />

        {/* <p
          className="font-inter mt-8 mb-4 text-[0.65rem] uppercase tracking-[0.25em]"
          style={{ color: 'var(--color-accent)' }}
        >
          Engagement Ceremony
        </p> */}

        <p
          className="font-vibes mb-10"
          style={{
            fontSize: 'clamp(2.2rem, 9vw, 3.5rem)',
            color: 'var(--color-primary)',
            lineHeight: 1.2,
          }}
        >
          Nichayathartham
        </p>

        <p
          className="font-cormorant mt-4"
          style={{
            fontSize: 'clamp(1.3rem, 6vw, 1.8rem)',
            color: 'var(--color-text-dark)',
            fontWeight: 400,
            lineHeight: 1.2,
            maxWidth: '90%',
            marginBottom: '12px',
            marginTop: '12px'
          }}
        >
          With the blessings of our families, we joyfully invite you to celebrate our engagement.
        </p>

        <div className="w-20 my-8 mx-auto" style={{ height: '1px', background: 'var(--color-accent)', opacity: 0.5 }} />

        <p
          className="font-inter"
          style={{
            fontSize: 'clamp(0.75rem, 4vw, 0.9rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '95%',
            fontWeight: 300,
            marginTop: '12px',
            marginBottom: '12px'
          }}
        >
          Your presence and warm wishes will be the greatest gift to our families
          as we take this joyful step together.
        </p>
      </motion.div>
    </section>
  )
}
