import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { contactDetails } from '../../data/menuData'

const MotionDiv = motion.div

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <MotionDiv
          className="contact-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Contact</p>
          <h2>Plan your next dinner, gathering, or celebration with us.</h2>
          <div className="contact-list">
            {contactDetails.map((item) => (
              <div key={item.label} className="contact-list__item">
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv
          className="contact-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div>
            <FiMapPin />
            <span>Jubilee Hills, Hyderabad</span>
          </div>
          <div>
            <FiPhone />
            <span>+91 98765 43210</span>
          </div>
          <div>
            <FiMail />
            <span>hello@emberplate.com</span>
          </div>
          <a className="button" href="#hero">
            Back to top
          </a>
        </MotionDiv>
      </div>
    </section>
  )
}

export default Contact
