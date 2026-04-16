import { motion } from 'framer-motion'
import { DiamondDivider, Sunflower } from './Ornaments'

const ease = [0.22, 1, 0.36, 1]

function SacredArch() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5, ease }}
      style={{ marginTop: '10px' }}
      className="relative flex flex-col items-center text-center px-4 py-20 w-full max-w-[400px] mx-auto mt-10"
    >
      {/* The Couple Stacked Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 mt-6">
        <div className="flex flex-col items-center mt-10">
          <p className="font-inter uppercase tracking-widest text-[0.65rem] mb-3 mt-10" style={{ color: 'var(--color-accent)' }}>
            The Bride
          </p>
          <h2 className="font-cormorant leading-none" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: 'var(--color-text-dark)', fontWeight: 400 }}>
            Theanmozhi
          </h2>
          <p className="font-vibes mt-1" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: 'var(--color-primary)' }}>
            (Sruthi)
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-inter uppercase tracking-widest text-[0.65rem] mb-3" style={{ color: 'var(--color-accent)' }}>
            The Groom
          </p>
          <h2 className="font-cormorant leading-none" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: 'var(--color-text-dark)', fontWeight: 400 }}>
            Murali
          </h2>
        </div>


      </div>
    </motion.div>
  )
}

export default function TheCouple() {
  return (
    <section className="relative flex flex-col flex-none justify-center items-center px-8 md:px-16 min-h-[100dvh] snap-start" style={{ overflow: 'hidden' }}>
      <div className="w-full max-w-[960px] mx-auto flex flex-col items-center">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <p
            className="font-inter uppercase tracking-[0.25em]"
            style={{ fontSize: '0.65rem', color: 'var(--color-accent)' }}
          >
            The Couple
          </p>
          <h2
            className="font-cormorant mt-2"
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
              color: 'var(--color-text-dark)',
              fontWeight: 300,
            }}
          >
            Two families, one celebration
          </h2>
          <div className="flex justify-center mt-4">
            <DiamondDivider style={{ color: 'var(--color-accent)' }} />
          </div>
        </motion.div>

        {/* Meaningful Vertically Stacked Archway */}
        <SacredArch />
      </div>

      {/* Swaying Sunflowers Holding Hands Absolute Bottom of Section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-end h-[160px] z-20 pointer-events-none">
        <motion.div
          style={{
            width: 'clamp(90px, 15vw, 130px)',
            transformOrigin: 'bottom center',
            color: 'var(--color-primary)',
            marginRight: '-18px'
          }}
          animate={{ rotate: [-2, 3, 0, 4, -2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="z-10"
        >
          <Sunflower className="w-full h-auto drop-shadow-sm" />
        </motion.div>

        <motion.div
          style={{
            width: 'clamp(90px, 15vw, 130px)',
            transformOrigin: 'bottom center',
            color: 'var(--color-primary)',
            marginLeft: '-18px'
          }}
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
