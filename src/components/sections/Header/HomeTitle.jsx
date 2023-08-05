import { Card } from 'react-bootstrap'
import { useWindowSize } from '../../../hooks/useWindowSize'

export function HomeTitle({ width }) {
  const size = useWindowSize()
  const elementWidth = size.width >= 1365 ? 'w-50' : size.width >= 780 ? 'w-75' : 'w-100'
  return (
    <Card className={`text-center ${elementWidth} border-0 bg-blue`}>
      <Card.Title as="h2">VOTE MIKE PETKO</Card.Title>
      <Card.Subtitle as="h3">School Board Neabsco District</Card.Subtitle>
    </Card>
  )
}
