import "./ItemCount.scss"
import { useState } from "react"

function ItemCount() {
  const [count, setCount] = useState(1)

  const increase = () => {
    if (count < 8) {
      setCount(count + 1)
    }
  }

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="counter">
      <div className="counter-buttons">
        <button onClick={decrease}> - </button>
        <p> {count} </p>
        <button onClick={increase}> + </button>
      </div>
      <p className="counter-stock">8 Unidades disponibles</p>
      <button className="btn-add">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
