import { Button, Image, Nav, NavLink } from 'react-bootstrap'

export function MediaSection() {
  const twitterLink = 'https://twitter.com/Mike4Parents'
  const facebookLink = ' https://www.facebook.com/profile.php?id=100094499273107'
  return (
    <div className="d-flex align-items-center" style={{ gap: '.5rem' }}>
      <div id="twitter-link">
        <Button size="sm" as={'a'} variant="link" href={twitterLink}>
          <Image src="src/images/Twitter.png" height="32px" />
        </Button>
      </div>
      <div id="facebook-link">
        <Button size="sm" as={'a'} variant="link" href={facebookLink}>
          <Image src="src/images/flogo.png" height="32px" />
        </Button>
      </div>
    </div>
  )
}
