import Pdf from '../Resume.pdf'
import pic from '../images/resume.png'



const Resume = () => {

  const onResumeClick = () => {
    window.open(Pdf)
  }

  return(
    <div className="resume">
      <div className="res-cont" >
      <p>Click below to download</p>
        <div onClick={onResumeClick}><img className='resumepng' src={pic} alt="Corys Resume"/></div>
      </div>
    </div>
  )
}
export default Resume