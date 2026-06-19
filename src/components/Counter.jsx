import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import toast from 'react-hot-toast'
import Button from './Button'

function Counter ({ item }) {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext(CartContext)
  
  const handleAdd = () => {
    if (count > 9) return
    setCount(count + 1)
  }

  const handleDecrease = () => {
    if (count === 0) return
    setCount(prev => prev - 1)
  }

  const handleAddToCart = () => {
    addToCart({...item, count})
    toast.success('Se agrego el producto al carrito 👍')
  }

  return (
    <div className='flex flex-col mt-3'>
      <p className='text-center text-2xl mb-3 border rounded'>{count}</p>
      <Button 
        label='sumar' 
        styles='bg-black px-4 py-2 rounded mb-2 cursor-pointer' 
        onClick={handleAdd} 
      />
      <Button 
        label='restar' 
        styles='bg-black px-4 py-2 rounded mb-2 cursor-pointer' 
        onClick={handleDecrease} 
      />
      <Button 
        label='add to cart' 
        styles='bg-white text-black px-4 py-2 rounded cursor-pointer'
        onClick={handleAddToCart} 
        disabled={count < 1}
      />
    </div>
  )
}

export default Counter
