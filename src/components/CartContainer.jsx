import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router'

function CartContainer () {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className='px-5 mt-5'>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Tu carrito:</li>
        
        {cart.map(prod => (
          <li className="list-row">
            <div><img className="size-10 rounded-box" src={prod.image} /></div>
            <div>
              <div>{prod.name}</div>
              <div className="text-xs uppercase font-semibold opacity-60">x {prod.count}</div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
          </li>
        ))}
      </ul>
      
      <button 
        className='bg-black px-4 py-2 rounded mt-5'
        onClick={() => navigate('/checkout')}
      >
        ir al checkout
      </button>
    </div>
  )
}

export default CartContainer
