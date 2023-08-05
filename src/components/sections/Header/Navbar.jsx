import { Nav, Navbar as NavbarBS } from 'react-bootstrap'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { HomeTitle } from './HomeTitle'
import { MediaSection } from './MediaSection'
import { Menu } from './Menu'
import { DonateButton } from '../../buttons/DonateButton'

export function Navbar({ navItems }) {
  const size = useWindowSize()

  if (size.width < 1365)
    return (
      <div className="bg-whitesmoke d-flex flex-column align-items-center">
        <HomeTitle />
        <NavbarBS className="bg-whitesmoke p-2 d-flex" style={{ gap: '.5rem' }}>
          <Menu iconSrc="src/images/menuicon.png" navItems={navItems} />
          <DonateButton />
        </NavbarBS>
      </div>
    )
  return (
    <NavbarBS className="bg-whitesmoke d-flex" style={{ gap: '.5rem' }}>
      <HomeTitle />
      <Nav className="d-flex justify-content-evenly w-100">
        {navItems.map(item => (
          <Nav href={`#${item.link}`} key={item.link} as={'a'}>
            <h4 className="text-center text-uppercase font-weight-bold">{item.text}</h4>
          </Nav>
        ))}
      </Nav>
      <DonateButton />
      <MediaSection />
    </NavbarBS>
  )
}
