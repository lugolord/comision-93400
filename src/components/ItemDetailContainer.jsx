import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProductDetail } from '../firebase/db'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
  const [item, setItem] = useState()
  const { id } = useParams()

  useEffect(() => {
    getProductDetail(id, setItem)
  }, [id])
  
  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer
