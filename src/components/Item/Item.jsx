import "./Item.scss"
import { Link } from "react-router-dom" 

function Item({ id, name, price, category, img }) {

  return (
    <div className="item">

      <img src={img} alt="" />

      <div className="item-info">
        <div className="item-info-titles">
          <h3>{name}</h3>
          <span>{category}</span>
        </div>
        <p>${price}</p>
        <Link to={`/detail/${id}`} className="detail-button">Ver detalles</Link>
      </div>

    </div>

  )
}

export default Item
