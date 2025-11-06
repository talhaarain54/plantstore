import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const items = useSelector(s => Object.values(s.cart.items))
  const totalQty = useSelector(s => s.cart.totalQuantity)
  const totalPrice = useSelector(s => s.cart.totalPrice)

  return (
    <main className="cart-page">
      <h2>Your Cart</h2>
      <p>Total items: {totalQty}</p>
      <p>Total price: ${totalPrice}</p>

      <div className="cart-list">
        {items.length === 0 ? <p>No items in cart. <Link to="/products">Continue shopping</Link></p> : items.map(it => <CartItem key={it.id} item={it} />)}
      </div>

      <div className="cart-actions">
        <button onClick={() => alert('Coming Soon: Checkout')}>Checkout</button>
        <Link to="/products">Continue Shopping</Link>
      </div>
    </main>
  )
}
