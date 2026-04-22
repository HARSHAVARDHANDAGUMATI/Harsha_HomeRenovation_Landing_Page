import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const findItemIndex = (items, itemId) =>
  items.findIndex((cartItem) => cartItem.id === itemId)

const updateQuantity = (items, itemId, nextQuantity) => {
  const index = findItemIndex(items, itemId)

  if (index === -1) {
    return items
  }

  if (nextQuantity <= 0) {
    return items.filter((cartItem) => cartItem.id !== itemId)
  }

  return items.map((cartItem, currentIndex) =>
    currentIndex === index ? { ...cartItem, quantity: nextQuantity } : cartItem,
  )
}

const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      isCartOpen: false,
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((cartItem) => cartItem.id === item.id)

          if (existingItem) {
            return {
              items: updateQuantity(
                state.items,
                item.id,
                existingItem.quantity + 1,
              ),
            }
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
          }
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),
      incrementItem: (itemId) =>
        set((state) => {
          const item = state.items.find((cartItem) => cartItem.id === itemId)
          return item
            ? { items: updateQuantity(state.items, itemId, item.quantity + 1) }
            : state
        }),
      decrementItem: (itemId) =>
        set((state) => {
          const item = state.items.find((cartItem) => cartItem.id === itemId)
          return item
            ? { items: updateQuantity(state.items, itemId, item.quantity - 1) }
            : state
        }),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    }),
    {
      name: 'ember-plate-cart',
      partialize: (state) => ({ items: state.items }),
    },
  ),
)

export default useCartStore
