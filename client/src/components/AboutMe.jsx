import Projects from './Projects'
import Resume from './Resume'
import pic from '../images/self.jpeg'
import Zoom from 'react-reveal/Zoom'

const AboutMe = () => {
  return (
    <div>
      <div className="selfoverlay">
        <img className='self' src={pic} alt='Cory Benicak' />
        <div className="overlay">
          <div className="overlayText">i am the overlay</div>
        </div>
      </div>
      <div className="brand">
        <p>Software Engineer who would love to bring my diverse experience to your company. I am enthusiastic about applying my knowledge and my skills to real-world issues while considering the bottom line.What inspires me is the rapid advances in technology that have been made over the last several years, and I am excited to utilize these to help solve today’s technological challenges.</p>
      </div>
      <div className="projAndResume">
        <div className="p">
          <Projects/>
        </div>
        <div className="r">
          <Zoom>
            <Resume/>
          </Zoom>
        </div>
      </div>
    </div>
  )
}
export default AboutMe