import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <main className="landing">
      <div className="hero">
        <h2>Bring Nature Home 🌿</h2>
        <p>
          Discover a curated collection of beautiful, easy-care plants for every
          home and lifestyle. Start growing your green space today.
        </p>
        <Link to="/products" className="btn">Shop Now</Link>
      </div>
    </main>
  )
}
