import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=CNV+Mahal+MTH+Road+Vepampattu+602024+Tiruvallur'

export default function TheVenue() {
  return (
    <section
      className="flex flex-col flex-none justify-center items-center px-8 md:px-16 min-h-[100dvh] snap-start text-center"
      style={{ maxWidth: 760, margin: '0 auto' }}
    >
      <motion.p
        className="font-inter uppercase tracking-[0.25em] mb-4"
        style={{ fontSize: '0.65rem', color: 'var(--color-accent)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
      >
        The Venue
      </motion.p>

      <motion.h2
        className="font-cormorant"
        style={{
          fontSize: 'clamp(2.2rem, 8vw, 3.5rem)',
          color: 'var(--color-text-dark)',
          fontWeight: 300,
          lineHeight: 1.1,
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
      >
        CNV Mahal
      </motion.h2>

      <motion.p
        className="font-cormorant italic mt-1"
        style={{
          fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
          color: 'var(--color-text-muted)',
          fontWeight: 300,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
      >
        (Air-Conditioned Hall)
      </motion.p>

      <motion.div
        className="flex flex-col items-center mt-8 gap-1"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      >
        <p
          className="font-inter"
          style={{ fontSize: '0.9rem', color: 'var(--color-text-dark)', lineHeight: 1.9, fontWeight: 300 }}
        >
          M.T.H. Road, Vepampattu &ndash; 602024
          <br />
          Tiruvallur District, Tamil Nadu
        </p>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.45, ease }}
      >
        {/* Animated pin */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <MapPin
            size={28}
            strokeWidth={1.5}
            style={{ color: 'var(--color-primary)' }}
          />
        </motion.div>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter inline-flex items-center gap-2 px-8 py-3 rounded-sm transition-opacity hover:opacity-80 active:opacity-70"
          style={{
            background: 'var(--color-primary)',
            color: '#FAF6EF',
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            padding: '10px 20px'
          }}
        >
          Get Directions
        </a>
      </motion.div>
    </section>
  )
}
