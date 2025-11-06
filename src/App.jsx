import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ProductListingPage from './pages/ProductListingPage'
import CartPage from './pages/CartPage'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  )
}
