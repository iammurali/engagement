import { motion } from 'framer-motion'
import { Sunflower } from './Ornaments'

const ease = [0.22, 1, 0.36, 1]

function PersonCard({ role, name, alias, description, family, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, delay, ease }}
      className="flex flex-col items-center text-center"
    >
      <p
        className="font-inter uppercase tracking-[0.38em]"
        style={{ fontSize: '0.57rem', color: 'var(--color-accent)', opacity: 0.7 }}
      >
        {role}
      </p>

      <h2
        className="font-cormorant mt-3"
        style={{
          fontSize: 'clamp(2.4rem, 8vw, 3.2rem)',
          color: 'var(--color-text-dark)',
          fontWeight: 300,
          lineHeight: 1.0,
          letterSpacing: '0.01em',
        }}
      >
        {name}
      </h2>

      {alias && (
        <p
          className="font-vibes mt-1"
          style={{
            fontSize: 'clamp(1.3rem, 4vw, 1.65rem)',
            color: 'var(--color-primary)',
            lineHeight: 1,
          }}
        >
          {alias}
        </p>
      )}

      <p
        className="font-cormorant mt-5"
        style={{
          fontSize: 'clamp(1rem, 3.6vw, 1.18rem)',
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          lineHeight: 1.7,
          maxWidth: 260,
        }}
      >
        {description}
      </p>

      <div
        style={{
          width: 28,
          height: 1,
          background: 'var(--color-accent)',
          opacity: 0.3,
          margin: '18px auto',
        }}
      />

      {/* <p
        className="font-inter uppercase tracking-[0.26em]"
        style={{ fontSize: '0.57rem', color: 'var(--color-text-muted)', opacity: 0.65 }}
      >
        {family}
      </p> */}
    </motion.div>
  )
}

function CenterConnector() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.0, delay: 0.3, ease }}
      className="flex flex-col items-center justify-center"
      style={{ padding: '32px 24px' }}
    >
      {/* Vertical line top */}
      <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, var(--color-accent))', marginBottom: 14 }} />
      {/* Diamond */}
      <div
        style={{
          width: 9,
          height: 9,
          border: '1px solid var(--color-accent)',
          transform: 'rotate(45deg)',
          opacity: 0.6,
        }}
      />
      {/* Vertical line bottom */}
      <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--color-accent), transparent)', marginTop: 14 }} />
    </motion.div>
  )
}

export default function TheCouple() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-dvh snap-start px-8 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease }}
          className="font-inter uppercase tracking-[0.4em] mb-12"
          style={{ fontSize: '0.58rem', color: 'var(--color-accent)', opacity: 0.7 }}
        >
          The Couple
        </motion.p>

        {/* Cards — side by side on md+, stacked on mobile */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:items-start">

          <div className="flex-1 flex justify-center">
            <PersonCard
              role="The Bride"
              name="Theanmozhi S"
              alias="Sruthi"
              description="asked all the right questions… and clearly liked the answers."
              family="Daughter of Sekar & Chitra"
              delay={0.1}
            />
          </div>

          <CenterConnector />

          <div className="flex-1 flex justify-center">
            <PersonCard
              role="The Groom"
              name="Murali E"
              description="came prepared with answers… didn't expect to sign up for forever."
              family="Son of Elumalai & Mala"
              delay={0.25}
            />
          </div>

        </div>

      </div>

      {/* Sunflowers */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end pointer-events-none z-20">
        <motion.div
          style={{ width: 'clamp(80px, 14vw, 120px)', transformOrigin: 'bottom center', color: 'var(--color-primary)', marginRight: '-16px' }}
          animate={{ rotate: [-2, 3, 0, 4, -2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sunflower className="w-full h-auto drop-shadow-sm" />
        </motion.div>
        <motion.div
          style={{ width: 'clamp(80px, 14vw, 120px)', transformOrigin: 'bottom center', color: 'var(--color-primary)', marginLeft: '-16px' }}
          animate={{ rotate: [3, -2, 4, 0, 3] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{ transform: 'scaleX(-1)' }}>
            <Sunflower className="w-full h-auto drop-shadow-sm" />
          </div>
        </motion.div>
      </div>

    </section>
  )
}
