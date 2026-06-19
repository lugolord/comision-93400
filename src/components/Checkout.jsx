import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import EmptyCart from './EmptyCart'

function Checkout () {
  const { cart, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  // TODO: manejar estados de carga y errores
  const handleCreateOrder = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const address = form.address.value

    createOrder({
      user: { name, email, phone, address },
      items: cart,
      time: serverTimestamp
    })

    clearCart()

    navigate('/')
  }

  if (cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className='mx-10 mt-10'>
      <p>Para finalizar tu compra, necesitamos estos datos 👇</p>
      <form className='flex flex-col gap-3 mt-3' onSubmit={handleCreateOrder}>
        <input required id='name' type="text" placeholder="Pepito Perez" className="input w-full" />
        <input required id='email' type="email" placeholder="pepito@gmail.com" className="input w-full" />
        <input required id='phone' type="text" placeholder="+5491123434565" className="input w-full" />
        <input required id='address' type="text" placeholder="CABA, Konoha 123" className="input w-full" />
        <button className='btn btn-primary'>finalizar la compra 🎉</button>
      </form>
    </div>
  )
}

export default Checkout
