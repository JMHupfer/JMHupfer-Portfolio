import { Link, NavLink } from 'react-router-dom'
import './index.scss'
// import LogoSubtitle from '../../assets/images/logo_letter.png'
import LogoJ from '../../assets/images/logo-j.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      {/* <img src={LogoSubtitle} alt="jacob" /> */}
      <img src={LogoJ} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jmhupfer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/JMHupfer">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
