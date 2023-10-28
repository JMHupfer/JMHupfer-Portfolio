import { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    console.log(refForm.current)

    emailjs
      .sendForm(
        'service_ja28rf1',
        'template_7mza5jg',
        refForm.current,
        'vmFcaQd6GkuPYS96Z'
      )
      .then(
        () => {
          console.log('SUCCESS!')
          alert('Your message is sent!')
          window.location.reload(false)
        },
        () => {
          console.log('TRY AGAIN!')
          alert('Message failed to send, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me:</h1>
          <p>
            I am interested in starting my career in the tech industry and am
            open to any opportunities. Please feel free to contact me using the
            form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Contact
