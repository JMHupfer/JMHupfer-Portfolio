import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/Jacob-H.png'
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, I'm Jacob Hupfer</h1>
                <h2>Frontend Developer with heavy interest in learning more backend concepts</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home