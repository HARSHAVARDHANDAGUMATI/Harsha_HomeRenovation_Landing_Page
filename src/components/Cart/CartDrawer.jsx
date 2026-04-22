import { AnimatePresence, motion } from 'framer-motion'
import { FiShoppingBag, FiX } from 'react-icons/fi'
import useCart from '../../hooks/useCart'
import formatCurrency from '../../utils/formatCurrency'
import CartItem from './CartItem'

const MotionDiv = motion.div
const MotionAside = motion.aside

function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    subtotal,
    deliveryFee,
    taxes,
    totalPrice,
    clearCart,
  } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen ? (
        <>
          <MotionDiv
            className="cart-backdrop"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <MotionAside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <div className="cart-drawer__header">
              <div>
                <p className="eyebrow">Your order</p>
                <h2>Cart summary</h2>
              </div>
              <button type="button" onClick={closeCart} aria-label="Close cart">
                <FiX />
              </button>
            </div>

            <div className="cart-drawer__body">
              {items.length ? (
                items.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <div className="empty-state empty-state--cart">
                  <FiShoppingBag />
                  <h3>Your cart is empty</h3>
                  <p>Add a few dishes to see pricing details here.</p>
                </div>
              )}
            </div>

            <div className="cart-drawer__footer">
              <div className="cart-row">
                <span>Subtotal</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
              <div className="cart-row">
                <span>Delivery</span>
                <strong>{formatCurrency(deliveryFee)}</strong>
              </div>
              <div className="cart-row">
                <span>Taxes</span>
                <strong>{formatCurrency(taxes)}</strong>
              </div>
              <div className="cart-row cart-row--total">
                <span>Total</span>
                <strong>{formatCurrency(totalPrice)}</strong>
              </div>

              <button
                type="button"
                className="button button--ghost"
                onClick={clearCart}
                disabled={items.length === 0}
              >
                Clear Cart
              </button>
              <button type="button" className="button" disabled={items.length === 0}>
                Checkout
              </button>
            </div>
          </MotionAside>
        </>
      ) : null}
    </AnimatePresence>
  )
}

export default CartDrawer
