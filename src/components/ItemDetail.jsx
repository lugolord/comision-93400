import Counter from './Counter'

function ItemDetail ({ item }) {
  return (
    <div className='px-5'>
      <img src={item?.image} alt={item?.name} className='w-full' />
      <div className='flex justify-between mb-5'>
        <p>{item?.name}</p>
        <p>{item?.price}</p>
      </div>
      <p>{item?.description}</p>
      <Counter item={item} />
    </div>
  )
}

export default ItemDetail
