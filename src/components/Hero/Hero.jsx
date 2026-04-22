import { motion } from 'framer-motion'
import { FiArrowRight, FiClock, FiMapPin, FiStar } from 'react-icons/fi'
import { statsData } from '../../data/menuData'

const MotionDiv = motion.div

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <MotionDiv
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Fine dining, reimagined for modern city nights</p>
          <h1>
            Crafted plates, warm ambience, and a restaurant story guests remember.
          </h1>
          <p className="hero-copy__text">
            Ember Plate blends elevated comfort food with expressive presentation,
            handcrafted beverages, and hospitality designed for memorable evenings.
          </p>

          <div className="hero-copy__actions">
            <a className="button" href="#menu">
              Explore Menu
              <FiArrowRight />
            </a>
            <a className="button button--ghost" href="#booking">
              Reserve Your Table
            </a>
          </div>

          <div className="hero-copy__meta">
            <span>
              <FiStar />
              4.9 guest rating
            </span>
            <span>
              <FiClock />
              Open daily till 11:30 PM
            </span>
            <span>
              <FiMapPin />
              Jubilee Hills, Hyderabad
            </span>
          </div>
        </MotionDiv>

        <MotionDiv
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="hero-visual__card hero-visual__card--primary">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant restaurant dining setup"
            />
          </div>
          <div className="hero-visual__floating hero-visual__floating--top">
            <span>Signature dish</span>
            <strong>Truffle Forest Risotto</strong>
            <small>Guest favorite this week</small>
          </div>
          <div className="hero-visual__floating hero-visual__floating--bottom">
            <span>Chef service</span>
            <strong>Fresh plates in under 30 mins</strong>
          </div>
        </MotionDiv>
      </div>

      <div className="container hero-stats">
        {statsData.map((stat) => (
          <MotionDiv
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}

export default Hero
