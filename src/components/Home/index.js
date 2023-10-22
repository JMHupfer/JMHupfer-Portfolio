import { Link } from 'react-router-dom'
// import
import './index.scss'
import Logo from './Logo'
// import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  // const [letterClass, setLetterClass] = useState('text-animate')
  // const nameArray = ['J', 'a', 'c', 'o', 'b', 'H', 'u', 'p', 'f', 'e', 'r']

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, I'm Jacob Hupfer</h1>
        {/* <AnimatedLetters letterClass={letterClass} */}
        {/* strArray={nameArray} */}
        {/* idx={15}/> */}
        <h2>
          Frontend Developer with heavy interest in learning more backend
          concepts
        </h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
