import { motion, AnimatePresence } from 'framer-motion'
import { Music2 } from 'lucide-react'

export default function MusicPrompt({ visible, onPlay, onDismiss }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 px-5 py-4 rounded-sm"
          style={{
            background: 'rgba(250,246,239,0.95)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 8px 32px rgba(43,24,16,0.12)',
            backdropFilter: 'blur(16px)',
            maxWidth: 'calc(100vw - 32px)',
            width: 320,
          }}
          role="dialog"
          aria-label="Background music prompt"
        >
          <div className="flex items-center gap-2.5">
            <Music2
              size={16}
              strokeWidth={1.5}
              style={{ color: 'var(--color-primary)', flexShrink: 0 }}
            />
            <p
              className="font-inter"
              style={{ fontSize: '0.78rem', color: 'var(--color-text-dark)', lineHeight: 1.5 }}
            >
              Play music for the full experience
            </p>
          </div>

          <div className="flex items-center gap-3 w-full">
            <button
              onClick={onPlay}
              className="flex-1 font-inter py-2 rounded-sm transition-opacity hover:opacity-80 active:opacity-70"
              style={{
                background: 'var(--color-primary)',
                color: '#FAF6EF',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Play
            </button>
            <button
              onClick={onDismiss}
              className="flex-1 font-inter py-2 rounded-sm transition-opacity hover:opacity-70 active:opacity-50"
              style={{
                background: 'transparent',
                color: 'var(--color-text-muted)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid var(--color-border)',
                cursor: 'pointer',
              }}
            >
              No thanks
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
