'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Analytics from './components/Analytics'
import Footer from './components/Footer'
import Cart from './components/Cart'

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <ProductGrid />
      <Analytics />
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  )
}
