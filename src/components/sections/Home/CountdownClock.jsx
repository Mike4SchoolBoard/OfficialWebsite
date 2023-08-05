import { useCountdownClock } from '../../../hooks/useCountdownClock'
import { ShowCounter } from './ShowCounter'

export function CountdownClock({ date }) {
  const clock = useCountdownClock(date)

  return <ShowCounter weeks={clock.weeks} days={clock.days} hours={clock.hours} minutes={clock.minutes} seconds={clock.seconds} />
}
