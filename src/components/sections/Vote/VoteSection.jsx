import { Button, Card, Form, Nav } from 'react-bootstrap'
import { CountdownClock } from '../Home/CountdownClock'
import { Email } from '../Home/Email'
import { useWindowSize } from '../../../hooks/useWindowSize'

export function VoteSection() {
  const size = useWindowSize()
  function handleOnClick(e) {
    e.preventDefault()
    console.log('this is handled')
  }
  if (size.width < 860)
    return (
      <div className="d-flex flex-column" style={{ gap: '.25rem' }}>
        <div className="m-0">Not yet registered to vote? Check here</div>
        <a
          href="https://www.pwcvotes.org/redistricting"
          target="_blank"
          data-saferedirecturl="https://www.google.com/url?q=https://www.pwcvotes.org/redistricting&amp;source=gmail&amp;ust=1689509766904000&amp;usg=AOvVaw0jMHRtkXzsE5B2Y2_pGiOA"
        >
          https://www.pwcvotes.org/
          <wbr />
          redistricting
        </a>
        <CountdownClock date="November 7, 2023 06:00:00" />
        <Email />
      </div>
    )
  return (
    <div className="d-flex flex-column" style={{ gap: '.25rem' }}>
      <div className="d-flex justify-content-between">
        <div>
          <div className="m-0">Not yet registered to vote? Check here</div>
          <a
            href="https://www.pwcvotes.org/redistricting"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?q=https://www.pwcvotes.org/redistricting&amp;source=gmail&amp;ust=1689509766904000&amp;usg=AOvVaw0jMHRtkXzsE5B2Y2_pGiOA"
          >
            https://www.pwcvotes.org/
            <wbr />
            redistricting
          </a>
        </div>
        <CountdownClock date="November 7, 2023 06:00:00" />
      </div>
      <Email />
    </div>
  )
}
