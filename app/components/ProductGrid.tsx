'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import ProductCard from './ProductCard'
import { products, categories } from '../data/products'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div id="products" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trending Products
          </h2>
          <p className="text-xl text-gray-300">
            Handpicked winning products with proven conversion rates
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex items-center mb-12 overflow-x-auto pb-4">
          <Filter className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
          <div className="flex space-x-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition whitespace-nowrap ${
                  selectedCategory === category
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  )
}
