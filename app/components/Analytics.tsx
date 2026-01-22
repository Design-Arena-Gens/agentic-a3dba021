'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, ShoppingBag, DollarSign, Package } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

export default function Analytics() {
  const { cart, getTotalPrice, getTotalProfit } = useCartStore()
  const totalProducts = cart.length
  const totalRevenue = getTotalPrice()
  const totalProfit = getTotalProfit()
  const profitMargin = totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0

  const stats = [
    {
      icon: Package,
      label: 'Products in Store',
      value: totalProducts,
      suffix: '',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DollarSign,
      label: 'Total Revenue',
      value: totalRevenue.toFixed(2),
      suffix: '',
      prefix: '$',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      label: 'Expected Profit',
      value: totalProfit.toFixed(2),
      suffix: '',
      prefix: '$',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      label: 'Profit Margin',
      value: profitMargin.toFixed(1),
      suffix: '%',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div id="analytics" className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real-Time Analytics
          </h2>
          <p className="text-xl text-gray-300">
            Track your store performance and profit margins instantly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform"
            >
              <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg w-fit mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'Trending Analysis',
              description: 'AI-powered product trend detection to find winning products before your competition'
            },
            {
              icon: Users,
              title: 'Customer Insights',
              description: 'Understand your audience with detailed analytics and conversion tracking'
            },
            {
              icon: ShoppingBag,
              title: 'Automated Fulfillment',
              description: 'Orders automatically sent to suppliers. Focus on marketing, not logistics'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-2xl hover:border-white/30 transition"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-xl w-fit mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
