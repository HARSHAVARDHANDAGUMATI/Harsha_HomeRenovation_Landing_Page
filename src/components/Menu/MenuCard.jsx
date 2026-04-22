import { motion } from 'framer-motion'
import { FiClock, FiPlus, FiStar } from 'react-icons/fi'
import toast from 'react-hot-toast'
import useCart from '../../hooks/useCart'
import formatCurrency from '../../utils/formatCurrency'

const MotionArticle = motion.article

function MenuCard({ item, index }) {
  const { addItem, openCart } = useCart()

  const handleAddToCart = () => {
    addItem(item)
    toast.success(`${item.name} added to cart`)
    openCart()
  }

  return (
    <MotionArticle
      layout
      className="menu-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <div className="menu-card__media">
        <img src={item.image} alt={item.name} />
        <span>{item.tag}</span>
      </div>

      <div className="menu-card__content">
        <div className="menu-card__topline">
          <p>{item.category}</p>
          <strong>{formatCurrency(item.price)}</strong>
        </div>

        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="menu-card__meta">
          <span>
            <FiStar />
            {item.rating}
          </span>
          <span>
            <FiClock />
            {item.prepTime}
          </span>
        </div>

        <button type="button" className="button" onClick={handleAddToCart}>
          <FiPlus />
          Add to cart
        </button>
      </div>
    </MotionArticle>
  )
}

export default MenuCard
