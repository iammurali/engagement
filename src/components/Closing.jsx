import { motion } from 'framer-motion'
import { FloralDivider, LotusOrnament } from './Ornaments'

const ease = [0.22, 1, 0.36, 1]

export default function Closing() {
  return (
    <section
      className="flex flex-col flex-none justify-center items-center px-12 md:px-24 min-h-[100dvh] snap-start text-center"
      style={{ maxWidth: 840, margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease }}
      >
        <LotusOrnament style={{ color: 'var(--color-accent)' }} />
      </motion.div>

      <motion.h2
        className="font-cormorant mt-6"
        style={{
          fontSize: 'clamp(1.7rem, 6vw, 2.8rem)',
          color: 'var(--color-text-dark)',
          fontWeight: 300,
          lineHeight: 1.5,
          maxWidth: 600,
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
      >
        Your presence and blessings will make our day complete.
      </motion.h2>

      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3, ease }}
      >
        <FloralDivider style={{ color: 'var(--color-accent)' }} />
      </motion.div>

      {/* <motion.div
        className="mt-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4, ease }}
      >
        <p
          className="font-cormorant italic"
          style={{
            fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
            color: 'var(--color-text-muted)',
            fontWeight: 300,
          }}
        >
          With love & blessings,
        </p>
        <p
          className="font-cormorant"
          style={{
            fontSize: 'clamp(1.05rem, 3.5vw, 1.3rem)',
            color: 'var(--color-text-dark)',
            fontWeight: 400,
            lineHeight: 1.8,
          }}
        >
          The Kuttiyappan Family
          <span
            className="font-vibes mx-3"
            style={{ fontSize: '1.6rem', color: 'var(--color-primary)', verticalAlign: 'middle' }}
          >
            &amp;
          </span>
          The Arumugam Family
        </p>
      </motion.div> */}

      <motion.div
        className="mt-12 w-16"
        style={{ height: '1px', background: 'var(--color-accent)', opacity: 0.3 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
      />

      <motion.p
        className="font-cormorant italic mt-6"
        style={{
          fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
          color: 'var(--color-primary)',
          fontWeight: 300,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6, ease }}
      >
        Wednesday, 27th May 2026
      </motion.p>
    </section>
  )
}
