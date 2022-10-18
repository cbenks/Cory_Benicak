import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <div className="footer">
      <div className="foot-a"><h4 className='connect'>Connect with me!</h4></div>
      <div className="foot-b"><a className="footr" href="https://github.com/cbenks" target="_blank" rel="noopener noreferrer">GitHub</a></div>
      <div className="foot-c"><a className="footr" href="https://www.linkedin.com/in/corybenicak/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      <div className="foot-d"><Link className="footr" to="/contact">Contact</Link></div>
      <div className="foot-e">
        <img className="nav-logo" alt="Cory B logo" src="https://freelogocreator.com/user_design/logos/2022/08/23/64393-medium.png" />
      </div>
    </div>
  )
}
export default Footer