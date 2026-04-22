import { motion } from 'framer-motion'
import { aboutHighlights } from '../../data/menuData'

const MotionDiv = motion.div
const MotionArticle = motion.article

function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <MotionDiv
          className="section-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">About us</p>
          <h2>Where thoughtful interiors meet bold, ingredient-first cooking.</h2>
          <p>
            Our concept is built around fire, texture, and seasonal flavor. From
            plated mains to dessert finishes, every detail is designed to feel
            contemporary, premium, and comfortably welcoming.
          </p>
        </MotionDiv>

        <div className="about-cards">
          {aboutHighlights.map((item, index) => (
            <MotionArticle
              key={item.title}
              className="info-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="info-card__number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
