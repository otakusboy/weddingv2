import { useEffect, useState } from 'react'
import { weddingDate } from '../constants/siteContent'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

const UNITS = [
  { key: 'days' as const, label: 'Days' },
  { key: 'hours' as const, label: 'Hours' },
  { key: 'minutes' as const, label: 'Minutes' },
  { key: 'seconds' as const, label: 'Seconds' },
]

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(weddingDate.iso),
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDate.iso))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-start justify-center">
      {UNITS.map((unit, index) => (
        <div key={unit.key} className="flex items-start">
          {index > 0 && (
            <span className="font-serif px-2 pt-0.5 text-3xl leading-none text-countdown-num">
              :
            </span>
          )}
          <div className="min-w-[3.25rem] text-center">
            <p className="font-serif text-4xl leading-none text-countdown-num tabular-nums">
              {pad(timeLeft[unit.key])}
            </p>
            <p className="mt-2 font-body text-[10px] uppercase tracking-[0.2em] text-countdown-label">
              {unit.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
