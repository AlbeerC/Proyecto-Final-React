import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({front, name, category, price, title, description}) {

  return (
    <section className="product-home">
      <div className="product-flex">
        <img className="product-img" src={front} alt={name} />

        <div className="product-info">
          <p className="product-category">{category}</p>
          <h2 className="product-title">{name}</h2>
          <p className="product-price">${price}</p>
          <ItemCount />
        </div>
      </div>

      <div className="product-desc">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default ItemDetail
