import { useWindowSize } from '../hooks/useWindowSize'
import { Section } from '../components/sections/Section'

export function Home({ navItems }) {
  const size = useWindowSize()
  const elementWidth = size.width < 1400 ? 'w-100' : 'w-75'

  return (
    <div className={elementWidth}>
      {navItems.map(item => (
        <Section elementId={item.link} sectionTitle={item.text} key={item.link} />
      ))}
    </div>
  )
}
