import { Dropdown, Image } from 'react-bootstrap'
import { MediaSection } from './MediaSection'

export function Menu({ iconSrc, navItems }) {
  return (
    <Dropdown role="menu">
      <Dropdown.Toggle variant="primary-outline" className="text-uppercase font-weight-bold" style={{ border: 'none' }}>
        <Image src={iconSrc} height={25} />
        <span className="ms-1">menu</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {navItems.map(item => (
          <Dropdown.Item key={item.link} as={'a'} href={`#${item.link}`} style={{ color: 'blue', textDecoration: 'none' }}>
            <h4>{item.text}</h4>
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <MediaSection />
      </Dropdown.Menu>
    </Dropdown>
  )
}
