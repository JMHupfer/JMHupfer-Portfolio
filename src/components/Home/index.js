import { Link } from 'react-router-dom'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, I'm Jacob Hupfer</h1>
        <h2>Frontend Developer | Code Lover | Future Tech Expert</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type="ball-grid-beat" />
    </>
  )
}

export default Home
