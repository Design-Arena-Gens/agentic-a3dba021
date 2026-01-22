import { create } from 'zustand'

export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
  description: string
  profit: number
}

interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  getTotalProfit: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const cart = get().cart
    const existingItem = cart.find(item => item.id === product.id)

    if (existingItem) {
      set({
        cart: cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      })
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] })
    }
  },

  removeFromCart: (id) => {
    set({ cart: get().cart.filter(item => item.id !== id) })
  },

  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(id)
    } else {
      set({
        cart: get().cart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      })
    }
  },

  clearCart: () => set({ cart: [] }),

  getTotalItems: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0)
  },

  getTotalPrice: () => {
    return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  },

  getTotalProfit: () => {
    return get().cart.reduce((total, item) => total + (item.profit * item.quantity), 0)
  }
}))
