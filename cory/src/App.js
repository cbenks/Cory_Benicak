import Nav from './components/Nav'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import './style/App.css'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <AboutMe />
      <Projects />
      <Resume />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
