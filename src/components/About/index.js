import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>The Coder: Jacob Hupfer</h1>
        <p>
          I'm an avid traveler with an insatiable curiosity for diverse
          cultures, languages, and perspectives. I firmly believe that our world
          should draw closer together, finding unity in our shared humanity. My
          journey towards contributing to globalization was somewhat cloudy, I
          was not sure where to start. While residing in China prior to the
          pandemic, I had an epiphany: technology held the key. The prospect of
          technology acting as a bridge between nations resonated deeply with
          me. It's with great anticipation that I embark on this tech-driven
          odyssey, eager to discover the myriad of paths that will unfold before
          me.
        </p>
        <p>
          Adaptability is a hallmark of my character. I thrive in environments
          that demand quick thinking and an ability to pivot when necessary.
          Patience is another trait I hold dear. It allows me to navigate
          complexities with a calm and measured approach, even in the face of
          challenges. Coupled with my adaptable nature, this quality ensures
          that I can weather any storm and emerge stronger on the other side.
          Moreover, I approach each endeavor as an opportunity to learn and
          grow. This inherent willingness to absorb new knowledge has been
          instrumental in shaping my journey thus far.
        </p>
        <p>
          In this dynamic era of rapid technological advancement, I'm eager to
          be a part of the driving force behind progress. With adaptability as
          my compass, I am poised to navigate the ever-evolving landscape of
          tech-driven globalization. My patient and open-minded approach ensures
          that I not only embrace challenges but relish them as opportunities
          for growth. I approach every endeavor with a genuine enthusiasm for
          learning, knowing that each experience enriches my journey and equips
          me to contribute meaningfully to the global community.
        </p>
      </div>
      <div className="stage-icon-cont">
        <div className="iconcolumn">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
