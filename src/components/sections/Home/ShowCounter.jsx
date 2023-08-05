import { Card } from 'react-bootstrap'
import { DateTimeDisplay } from './DateTimeDisplay'
import { useWindowSize } from '../../../hooks/useWindowSize'

export function ShowCounter({ days, hours, minutes, seconds }) {
  const size = useWindowSize()
  const className = size.width > 860 ? 'show-counter' : ''
  return (
    <Card className={className} style={{ padding: '0.25rem', width: 'fit-content' }}>
      <Card.Title as={'h5'} className="text-center">
        Countdown to the Election
      </Card.Title>
      <Card.Body>
        <Card.Text className="d-flex" as={'div'}>
          <DateTimeDisplay value={days} type={'Days'} />
          <div className="ps-2 pe-2">:</div>
          <DateTimeDisplay value={hours} type={'Hours'} />
          <div className="ps-2 pe-2">:</div>
          <DateTimeDisplay value={minutes} type={'Minutes'} />
          <div className="ps-2 pe-2">:</div>
          <DateTimeDisplay value={seconds} type={'Seconds'} />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
