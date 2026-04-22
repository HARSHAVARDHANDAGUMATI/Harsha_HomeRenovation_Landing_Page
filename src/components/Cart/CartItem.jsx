import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import useCart from '../../hooks/useCart'
import formatCurrency from '../../utils/formatCurrency'

function CartItem({ item }) {
  const { incrementItem, decrementItem, removeItem } = useCart()

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item__content">
        <div className="cart-item__topline">
          <div>
            <h3>{item.name}</h3>
            <p>{formatCurrency(item.price)}</p>
          </div>
          <button
            type="button"
            className="cart-item__remove"
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.name}`}
          >
            <FiTrash2 />
          </button>
        </div>

        <div className="cart-item__actions">
          <div className="quantity-control">
            <button type="button" onClick={() => decrementItem(item.id)}>
              <FiMinus />
            </button>
            <span>{item.quantity}</span>
            <button type="button" onClick={() => incrementItem(item.id)}>
              <FiPlus />
            </button>
          </div>
          <strong>{formatCurrency(item.price * item.quantity)}</strong>
        </div>
      </div>
    </article>
  )
}

export default CartItem
