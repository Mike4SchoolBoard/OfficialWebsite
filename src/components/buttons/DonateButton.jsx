import { Button } from 'react-bootstrap'

export function DonateButton() {
  return (
    <div id="donate-link" style={{ width: '100px' }}>
      <Button variant="primary" className="donate-link text-uppercase ps-0 pe-0" style={{ borderColor: '#d7310b', padding: '.25rem' }} size="sm">
        Donate Here
      </Button>
    </div>
  )
}
