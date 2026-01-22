'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Star, TrendingUp, DollarSign } from 'lucide-react'
import { Product } from '../store/cartStore'
import { useCartStore } from '../store/cartStore'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCartStore()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all shadow-xl hover:shadow-2xl"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
          <TrendingUp className="w-3 h-3 mr-1" />
          Hot
        </div>
        <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          {product.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition">
          {product.name}
        </h3>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white ml-1 text-sm font-semibold">{product.rating}</span>
          </div>
          <span className="text-gray-400 text-xs ml-2">({product.reviews.toLocaleString()} reviews)</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-white">${product.price}</div>
            <div className="text-xs text-green-400 flex items-center">
              <DollarSign className="w-3 h-3" />
              ${product.profit.toFixed(2)} profit
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">Profit Margin</div>
            <div className="text-sm font-semibold text-cyan-400">
              {((product.profit / product.price) * 100).toFixed(0)}%
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center transition ${
            added
              ? 'bg-green-600 text-white'
              : 'gradient-primary text-white hover:shadow-lg'
          }`}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          {added ? 'Added to Store!' : 'Add to Store'}
        </motion.button>
      </div>
    </motion.div>
  )
}
