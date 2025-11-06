import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const total = useSelector((s) => s.cart.totalQuantity)
  const { pathname } = useLocation()

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo"><Link to="/">🌿 PlantStore</Link></h1>
        <nav>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/products" className={pathname === '/products' ? 'active' : ''}>Products</Link>
          <Link to="/cart" className="cart-link">
            Cart 🛒 <span className="cart-count">{total}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
