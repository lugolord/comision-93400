import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getCollection, getProductsByCategory } from '../firebase/db'
import ItemList from './ItemList'
import ItemsSkeleton from './ItemsSkeleton'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { categoryName } = useParams()

  useEffect(() => {
    categoryName ? 
      getProductsByCategory(categoryName, setItems) : 
      getCollection('products', setItems)
  }, [categoryName])
  
  return (
    <>
      {items.length === 0 ? <ItemsSkeleton /> : <ItemList items={items} />}
    </>
  )
}

export default ItemListContainer
