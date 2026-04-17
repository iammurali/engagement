import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const events = [
  {
    date: 'Jan 25',
    year: '2025',
    label: 'First Met',
    note: 'Where the story began',
    status: 'past',
  },
  {
    date: 'May 27',
    year: '2026',
    label: 'Nichayathartham',
    note: 'The promise',
    status: 'featured',
  },
  {
    date: 'Nov 28',
    year: '2026',
    label: 'Reception',
    note: 'Celebrating with loved ones',
    status: 'upcoming',
  },
  {
    date: 'Nov 29',
    year: '2026',
    label: 'Kalyanam',
    note: 'Forever begins',
    status: 'upcoming',
  },
]

function Dot({ status, delay }) {
  const isFeatured = status === 'featured'
  const isPast = status === 'past'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay, ease }}
      className="relative flex items-center justify-center shrink-0"
      style={{ width: isFeatured ? 18 : 10, height: isFeatured ? 18 : 10 }}
    >
      {isFeatured && (
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full"
          style={{ background: 'var(--color-primary)' }}
        />
      )}
      <div
        className="rounded-full"
        style={{
          width: isFeatured ? 12 : isPast ? 8 : 7,
          height: isFeatured ? 12 : isPast ? 8 : 7,
          background: isFeatured
            ? 'var(--color-primary)'
            : isPast
            ? 'var(--color-accent)'
            : 'transparent',
          border: !isFeatured && !isPast ? '1.5px solid var(--color-accent)' : 'none',
          opacity: isPast ? 0.6 : 1,
          flexShrink: 0,
        }}
      />
    </motion.div>
  )
}

function EventRow({ event, index }) {
  const isEven = index % 2 === 0
  const isFeatured = event.status === 'featured'
  const isPast = event.status === 'past'
  const delay = 0.15 + index * 0.12

  const DateBlock = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay, ease }}
      className={`flex flex-col ${isEven ? 'items-end text-right' : 'items-start text-left'}`}
    >
      <span
        className="font-cormorant"
        style={{
          fontSize: 'clamp(1.3rem, 4.5vw, 1.9rem)',
          color: isFeatured ? 'var(--color-primary)' : 'var(--color-text-dark)',
          fontWeight: 300,
          lineHeight: 1,
          opacity: isPast ? 0.5 : 1,
        }}
      >
        {event.date}
      </span>
      <span
        className="font-inter uppercase tracking-[0.28em]"
        style={{
          fontSize: '0.52rem',
          color: 'var(--color-text-muted)',
          opacity: isPast ? 0.4 : 0.55,
          marginTop: 3,
        }}
      >
        {event.year}
      </span>
    </motion.div>
  )

  const TextBlock = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 16 : -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: delay + 0.05, ease }}
      className={`flex flex-col ${isEven ? 'items-start text-left' : 'items-end text-right'}`}
    >
      <span
        className="font-cormorant"
        style={{
          fontSize: isFeatured
            ? 'clamp(1.15rem, 4vw, 1.45rem)'
            : 'clamp(1rem, 3.5vw, 1.2rem)',
          color: isFeatured ? 'var(--color-primary)' : 'var(--color-text-dark)',
          fontWeight: isFeatured ? 500 : 400,
          lineHeight: 1.1,
          opacity: isPast ? 0.5 : 1,
        }}
      >
        {event.label}
      </span>
      <span
        className="font-cormorant"
        style={{
          fontSize: 'clamp(0.85rem, 2.8vw, 1rem)',
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          opacity: isPast ? 0.35 : 0.6,
          marginTop: 2,
        }}
      >
        {event.note}
      </span>
    </motion.div>
  )

  return (
    <div className="grid items-center" style={{ gridTemplateColumns: '1fr 32px 1fr', gap: '0 16px' }}>
      <div className="flex justify-end">{isEven ? DateBlock : TextBlock}</div>
      <div className="flex justify-center"><Dot status={event.status} delay={delay} /></div>
      <div className="flex justify-start">{isEven ? TextBlock : DateBlock}</div>
    </div>
  )
}

export default function Countdown() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-dvh snap-start px-8 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative w-full" style={{ maxWidth: 480 }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease }}
          className="font-inter uppercase tracking-[0.42em] text-center mb-12"
          style={{ fontSize: '0.57rem', color: 'var(--color-accent)', opacity: 0.7 }}
        >
          Our Journey
        </motion.p>

        {/* Timeline */}
        <div className="relative flex flex-col" style={{ gap: 0 }}>

          {/* Continuous vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.4, 0, 0.6, 1] }}
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: 1,
              background:
                'linear-gradient(to bottom, transparent, var(--color-accent) 8%, var(--color-accent) 92%, transparent)',
              opacity: 0.25,
              transformOrigin: 'top',
            }}
          />

          {events.map((event, i) => (
            <div key={i} style={{ padding: '22px 0' }}>
              <EventRow event={event} index={i} />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
