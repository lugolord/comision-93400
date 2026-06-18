import { useState, useEffect } from 'react'
import { getCollection } from '../firebase/db'
import Navbar from './Navbar'

function NavbarContainer () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCollection('categories', setCategories)
  }, [])
  

  return <Navbar categories={categories} />
}

export default NavbarContainer
