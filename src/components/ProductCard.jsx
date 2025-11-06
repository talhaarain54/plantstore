import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const added = useSelector(s => !!s.cart.items[product.id])

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.name} />
      <div className="meta">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button disabled={added} onClick={() => dispatch(addToCart(product))}>
          {added ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
