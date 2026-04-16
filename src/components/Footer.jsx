import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center py-10 px-4 text-center"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <span
          className="font-inter"
          style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
        >
          Made with
        </span>
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart
            size={12}
            fill="var(--color-primary)"
            stroke="none"
          />
        </motion.div>
        <span
          className="font-inter"
          style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
        >
          for Theanmozhi &amp; Murali
        </span>
      </motion.div>
    </footer>
  )
}
