import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { reviewsData } from '../../data/menuData'

const MotionArticle = motion.article

function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Guest reviews</p>
          <h2>Real feedback from diners who came for the food and stayed for the vibe.</h2>
        </div>

        <div className="review-grid">
          {reviewsData.map((review, index) => (
            <MotionArticle
              key={review.name}
              className="review-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="review-card__rating">
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <FiStar key={`${review.name}-${starIndex}`} />
                ))}
              </div>
              <p>"{review.quote}"</p>
              <h3>{review.name}</h3>
              <span>{review.role}</span>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
