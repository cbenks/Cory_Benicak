import { useNavigate } from 'react-router-dom'

const Projects = () => {

  let navigate = useNavigate()

  const handleClickP1 = () => {
    window.open('https://github.com/cbenks/BlackJack')
  }

  const handleClickP2 = () => {
    window.open('https://github.com/cbenks/Kelp')
  }

  const handleClickP3 = () => {
    window.open('https://github.com/cbenks/Blog')
  }

  const handleClickP4 = () => {
    window.open('https://github.com/cbenks/CAM')
  }



  return (
    <div>
      <h3 className="myprojects">projects</h3>
      <div className="projects">
        <div className="projA" onClick={handleClickP1}>
          <img className="i a" src="https://i.imgur.com/gcD1B3R.png" alt="blackjack project"/>
        </div>
        <div className="projB" onClick={handleClickP2}>
          <img className="i b" src="https://i.imgur.com/BBwNrNo.png" alt="kelp project"/>
        </div>
        <div className="projC" onClick={handleClickP3}>
          <img className="i c" src="https://i.imgur.com/TXgylEG.png" alt="blog project"/>
        </div>
        <div className="projD" onClick={handleClickP4}>
          <img className="i  d" src="https://i.imgur.com/P0yQHL9.png" alt="crypto project"/>
        </div>
      </div>
    </div>
  )
}
export default Projects