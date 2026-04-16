import { useRef, useState, useEffect, useCallback } from 'react'

const SESSION_KEY = 'music-prompt-seen'
const TARGET_VOLUME = 0.4
const FADE_DURATION = 2000
const TOGGLE_FADE_DURATION = 300

export function useBackgroundMusic() {
  const audioRef = useRef(null)
  const fadeRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(() =>
    sessionStorage.getItem(SESSION_KEY) === 'true'
  )

  useEffect(() => {
    const audio = new Audio()
    audio.loop = true
    audio.volume = 0
    audio.preload = 'auto'
    audio.playsInline = true

    const source1 = document.createElement('source')
    source1.src = '/music/invitation-theme.mp3'
    source1.type = 'audio/mpeg'

    const source2 = document.createElement('source')
    source2.src = '/music/invitation-theme.ogg'
    source2.type = 'audio/ogg'

    audio.appendChild(source1)
    audio.appendChild(source2)
    audioRef.current = audio

    return () => {
      if (fadeRef.current) clearInterval(fadeRef.current)
      audio.pause()
    }
  }, [])

  const fadeTo = useCallback((targetVol, duration, onComplete) => {
    if (fadeRef.current) clearInterval(fadeRef.current)
    const audio = audioRef.current
    if (!audio) return

    const startVol = audio.volume
    const diff = targetVol - startVol
    const steps = Math.abs(Math.round(duration / 16))
    if (steps === 0) {
      audio.volume = targetVol
      onComplete?.()
      return
    }
    const stepSize = diff / steps
    let current = 0

    fadeRef.current = setInterval(() => {
      current++
      const newVol = Math.min(1, Math.max(0, startVol + stepSize * current))
      audio.volume = newVol
      if (current >= steps) {
        clearInterval(fadeRef.current)
        audio.volume = targetVol
        onComplete?.()
      }
    }, 16)
  }, [])

  const startPlayback = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0
    try {
      await audio.play()
      setIsPlaying(true)
      fadeTo(TARGET_VOLUME, FADE_DURATION)
    } catch {
      // Browser or user blocked playback — silently fail
    }
  }, [fadeTo])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      fadeTo(0, TOGGLE_FADE_DURATION, () => audio.pause())
      setIsPlaying(false)
    } else {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true)
          fadeTo(TARGET_VOLUME, TOGGLE_FADE_DURATION)
        }).catch(() => {})
      } else {
        setIsPlaying(true)
        fadeTo(TARGET_VOLUME, TOGGLE_FADE_DURATION)
      }
    }
  }, [isPlaying, fadeTo])

  const markInteracted = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, 'true')
    setHasInteracted(true)
  }, [])

  const handlePlay = useCallback(() => {
    markInteracted()
    startPlayback()
  }, [markInteracted, startPlayback])

  const handleDismiss = useCallback(() => {
    markInteracted()
  }, [markInteracted])

  return {
    isPlaying,
    togglePlay,
    hasInteracted,
    handlePlay,
    handleDismiss,
  }
}
