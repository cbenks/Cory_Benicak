import Nav from './components/Nav'
import Footer from './components/Footer'
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
        <Route path="/" element={<AboutMe />} />
      </Routes>
      <div className="space"></div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
