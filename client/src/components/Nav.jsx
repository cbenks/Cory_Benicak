import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <img className="nav-logo" alt="Cory B logo" src="https://freelogocreator.com/user_design/logos/2022/08/23/64393-medium.png" />
      </div>
      <nav>
        <Link to='/'>About me</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/resume'>Resume</Link>
      </nav>
    </div>
  )
}
export default Nav
