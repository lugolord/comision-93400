import { CartContext } from '../context/CartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const getProductsQuantity = () => cart.reduce((acc, current) => acc + current.count, 0)
  
  const addToCart = product => {
    setCart([...cart, product])
  }

  return (
    <CartContext.Provider value={{ cart, getProductsQuantity, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
