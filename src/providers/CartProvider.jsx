import { CartContext } from '../context/CartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const getProductsQuantity = () => cart.reduce((acc, current) => acc + current.count, 0)
  
  const addToCart = product => { // TODO: evitar agregar duplicados
    setCart([...cart, product])
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, getProductsQuantity, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
