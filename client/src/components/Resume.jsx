import Pdf from '../Resume.pdf'
import pic from '../images/resume.png'



const Resume = () => {

  const onResumeClick = () => {
    window.open(Pdf)
  }

  return(
    <div className="resume">
      <h1>resume</h1>
      <div className="res-cont" >
        <div onClick={onResumeClick}><img className='resumepng' src={pic} alt="Corys Resume"/></div>
        <p>Click to download.</p>
      </div>
    </div>
  )
}
export default Resume