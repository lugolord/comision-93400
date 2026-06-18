import { useState, useEffect } from 'react'

function FetchProducts ({ children, url }) {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, [url])

  return (
    <>
      {children(items)}
    </>
  )
}

export default FetchProducts
