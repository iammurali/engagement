import { useState, useEffect } from 'react'
import { ToranPattern } from './components/Ornaments'
import Hero from './components/Hero'
import InvitationNote from './components/InvitationNote'
import TheCouple from './components/TheCouple'
import TheDateSection from './components/TheDateSection'
import TheVenue from './components/TheVenue'
import RSVP from './components/RSVP'
import Closing from './components/Closing'
import Footer from './components/Footer'
import MusicPrompt from './components/MusicPrompt'
import MusicToggle from './components/MusicToggle'
import { useBackgroundMusic } from './hooks/useBackgroundMusic'

export default function App() {
  const [showPrompt, setShowPrompt] = useState(false)
  const { isPlaying, togglePlay, hasInteracted, handlePlay, handleDismiss } =
    useBackgroundMusic()

  useEffect(() => {
    if (hasInteracted) return
    const timer = setTimeout(() => setShowPrompt(true), 1500)
    return () => clearTimeout(timer)
  }, [hasInteracted])

  const onPlay = () => {
    setShowPrompt(false)
    handlePlay()
  }

  const onDismiss = () => {
    setShowPrompt(false)
    handleDismiss()
  }

  return (
    <>
      {/* Page frame borders */}
      <div className="page-frame" />
      <div className="page-frame-bottom" />
      
      {/* Top Toran/Garland decoration */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none drop-shadow-md">
        <ToranPattern style={{ color: 'var(--color-accent)', height: 'clamp(2rem, 5vw, 4rem)' }} />
      </div>

      <main>
        <Hero />
        <InvitationNote />
        <TheCouple />
        <TheDateSection />
        <TheVenue />
        <RSVP />
        <Closing />
        <Footer />
      </main>

      {/* Music controls */}
      <MusicPrompt
        visible={showPrompt && !hasInteracted}
        onPlay={onPlay}
        onDismiss={onDismiss}
      />
      <MusicToggle
        visible={hasInteracted}
        isPlaying={isPlaying}
        onToggle={togglePlay}
      />
    </>
  )
}
