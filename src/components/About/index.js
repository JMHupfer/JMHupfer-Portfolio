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
          I love exploring new places, meeting different people, and
          understanding their ways of life. I believe that we're all connected
          by our shared humanity, and technology can help bring us even closer.
          When I lived in China before the pandemic, it hit me: tech could be
          the bridge we needed. Now, I'm excited to dive into this tech-driven
          journey and see where it takes me.
        </p>
        <p>
          I'm good at adapting to change and quick thinking, which comes in
          handy in fast-paced environments. Patience is something I value too.
          It helps me stay calm and focused, even when things get tough.
          Together with my ability to adapt, it means I can handle challenges
          and come out stronger. Plus, I see every new experience as a chance to
          learn and grow. This eagerness to soak up knowledge has been key in
          shaping my journey so far.
        </p>
        <p>
          In this time of fast tech progress, I'm eager to be part of the push
          forward. With my adaptability, I'm ready to navigate the ever-changing
          world of tech and globalization. My patient and open-minded approach
          means I don't just face challenges - I embrace them as chances to
          grow. I approach everything with a real excitement for learning,
          knowing each experience adds something special to my journey and lets
          me give back to the world in a meaningful way.
        </p>
        <h2 className="resume-header">
          You will find my resume{' '}
          <a
            href="https://docs.google.com/document/d/1PfFA-L5ruiCUR3hDeCsEeghHjMNngNKW/edit#heading=h.gjdgxs"
            target="_blank"
            rel="noreferrer"
            className="resume"
          >
            here!
          </a>
        </h2>
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
