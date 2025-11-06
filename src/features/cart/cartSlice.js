import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
}

function recalc(state) {
  let totalQ = 0
  let totalP = 0
  Object.values(state.items).forEach((it) => {
    totalQ += it.quantity
    totalP += it.quantity * it.price
  })
  state.totalQuantity = totalQ
  state.totalPrice = totalP
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload
      if (state.items[p.id]) return
      state.items[p.id] = { ...p, quantity: 1 }
      recalc(state)
    },
    increment(state, action) {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].quantity += 1
      }
      recalc(state)
    },
    decrement(state, action) {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].quantity = Math.max(1, state.items[id].quantity - 1)
      }
      recalc(state)
    },
    removeItem(state, action) {
      const id = action.payload
      delete state.items[id]
      recalc(state)
    },
    clearCart(state) {
      state.items = {}
      recalc(state)
    }
  }
})

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
