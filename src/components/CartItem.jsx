import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../features/cart/cartSlice'

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} />
      <div className="info">
        <h4>{item.name}</h4>
        <p>Unit: ${item.price}</p>
        <div className="qty-controls">
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button className="delete" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      </div>
    </div>
  )
}
