import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/sections/Header/Navbar'
import { MadeBy } from './components/sections/Footer/MadeBy'
import { Container } from 'react-bootstrap'

function App() {
  const navItems = [
    { text: 'Home', link: 'home' },
    { text: 'About Me', link: 'bio' },
    { text: 'Education Positions', link: 'philo' },
    { text: 'Voting Info', link: 'vote' },
    { test: 'Credits', link: 'credit' },
  ]

  return (
    <div className="d-flex flex-column h-100 main bg-whitesmoke">
      <header id="header" className="sticky-top w-100 shadow-sm">
        <Navbar navItems={navItems} />
      </header>
      <main className="pt-2 h-100 overflow-auto" style={{ flex: 1 }}>
        <Container className="d-flex flex-column align-items-center" fluid>
          <Routes>
            <Route path="OfficialWebsite/" element={<Home navItems={navItems} />} />
          </Routes>
        </Container>
      </main>
      <footer className="sticky-bottom w-100 bg-whitesmoke">
        <MadeBy />
      </footer>
    </div>
  )
}

export default App
