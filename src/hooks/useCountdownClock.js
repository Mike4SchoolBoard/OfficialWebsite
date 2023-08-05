import { useState, useEffect } from 'react'

export function useCountdownClock(date) {
  const countDownDate = new Date(date).getTime()
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [countDownDate])

  return getTimeValues(countDown)
}

function getTimeValues(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24))
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((time % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}
