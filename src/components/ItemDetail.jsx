import Counter from './Counter'

function ItemDetail ({ item }) {
  return (
    <div className='px-5 flex flex-col lg:flex-row gap-5 mx-10 mt-10'>
      <img src={item?.image} alt={item?.name} className='w-full rounded' />
      <div className='flex flex-col'>
        <div className='flex justify-between mb-5'>
          <p className='text-2xl font-medium uppercase'>{item?.name}</p>
          <p>{item?.price}</p>
        </div>
        <p>{item?.description}</p>
        <Counter item={item} />
      </div>
    </div>
  )
}

export default ItemDetail
