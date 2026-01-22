'use client'

import { ShoppingCart, Zap, TrendingUp } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { motion } from 'framer-motion'

export default function Header() {
  const { cart, getTotalItems } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="gradient-primary p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">DropShip Empire</h1>
              <p className="text-xs text-gray-300 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending Products
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-white/80 hover:text-white transition">Products</a>
            <a href="#trending" className="text-white/80 hover:text-white transition">Trending</a>
            <a href="#analytics" className="text-white/80 hover:text-white transition">Analytics</a>
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <ShoppingCart className="w-6 h-6 text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  )
}
