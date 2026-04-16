import { useState, useEffect } from 'react'

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

function getTimeLeft(targetDate) {
  const now = Date.now()
  const diff = targetDate - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds, isPast: false }
}
