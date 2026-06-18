import { useNavigate } from 'react-router'

function Item ({ item }) {
  const navigate = useNavigate()

  return (
    <div className="card bg-base-100 border-black border">
      <figure>
        <img
          src={item.image}
          alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => navigate(`/item/${item.id}`)}>
            ver mas
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
