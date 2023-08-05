import { Card, Image } from 'react-bootstrap'

export function ImageCard({ src, width }) {
  return (
    <div style={{ width: 'fit-content' }}>
      <Card style={{ height: 'fit-content', width: `${width / 2}px`, maxWidth: '260px', minWidth: '180px' }}>
        <Card.Body>
          <Image src={src} fluid rounded />
        </Card.Body>
      </Card>
    </div>
  )
}
