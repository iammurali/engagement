import { motion, AnimatePresence } from 'framer-motion'
import { Music2, VolumeX } from 'lucide-react'

export default function MusicToggle({ visible, isPlaying, onToggle }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={onToggle}
          aria-label="Toggle background music"
          className="fixed z-50"
          style={{
            bottom: 20,
            right: 20,
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'var(--color-primary)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(107,31,46,0.25)',
          }}
        >
          {/* Pulsing ring when playing */}
          {isPlaying && (
            <motion.span
              style={{
                position: 'absolute',
                inset: -3,
                borderRadius: '50%',
                border: '1.5px solid var(--color-primary)',
                opacity: 0.35,
              }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
          {isPlaying ? (
            <Music2 size={18} strokeWidth={1.5} color="var(--color-accent)" />
          ) : (
            <VolumeX size={18} strokeWidth={1.5} color="var(--color-accent)" />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  )
}
