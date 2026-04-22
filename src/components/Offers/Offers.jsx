import { motion } from 'framer-motion'
import { offersData } from '../../data/menuData'

const MotionArticle = motion.article

function Offers() {
  return (
    <section className="section" id="offers">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Special offers</p>
          <h2>Thoughtful promotions that make premium dining easier to enjoy.</h2>
        </div>

        <div className="offer-grid">
          {offersData.map((offer, index) => (
            <MotionArticle
              key={offer.title}
              className="offer-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span>{offer.badge}</span>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
