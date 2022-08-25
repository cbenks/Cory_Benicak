import './style/App.css'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
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
