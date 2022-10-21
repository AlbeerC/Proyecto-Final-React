import "./ItemCount.scss"
import { useState } from "react"

function ItemCount({stock = 0, initial = 1, onAdd}) {
  const [quantity, setQuantity] = useState(initial)

  const increase = () => {
    if(quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrease = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="counter">
      <div className="counter-buttons">
        <button onClick={decrease}> - </button>
        <p> {quantity} </p>
        <button onClick={increase}> + </button>
      </div>
      <p className="counter-stock">{stock} Unidades disponibles</p>
      <button className="btn-add" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
