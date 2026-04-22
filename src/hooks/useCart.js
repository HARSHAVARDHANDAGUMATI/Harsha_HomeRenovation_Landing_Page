import useCartStore from '../store/useCartStore'

function useCart() {
  const items = useCartStore((state) => state.items)
  const isCartOpen = useCartStore((state) => state.isCartOpen)
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const incrementItem = useCartStore((state) => state.incrementItem)
  const decrementItem = useCartStore((state) => state.decrementItem)
  const clearCart = useCartStore((state) => state.clearCart)
  const openCart = useCartStore((state) => state.openCart)
  const closeCart = useCartStore((state) => state.closeCart)
  const toggleCart = useCartStore((state) => state.toggleCart)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = totalItems > 0 ? 79 : 0
  const taxes = Math.round(subtotal * 0.05)
  const totalPrice = subtotal + deliveryFee + taxes

  return {
    items,
    isCartOpen,
    totalItems,
    subtotal,
    deliveryFee,
    taxes,
    totalPrice,
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
  }
}

export default useCart
