import { useNavigate } from 'react-router'

function EmptyCart () {
  const navigate = useNavigate()
  
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <h2 className='text-5xl'>No tienes productos en el carrito 😔</h2>
      <button className='btn btn-primary mt-3' onClick={() => navigate('/')}>
        volver a ver productos
      </button>
    </div>
  )
}

export default EmptyCart
