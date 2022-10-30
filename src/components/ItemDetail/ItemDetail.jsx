import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../Notification/NotificationService"
import { Link } from "react-router-dom"

function ItemDetail({id, stock, front, name, category, price, title, description}) {

  const { addItem, isInCart } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)


  const handleOnAdd = (quantity) => {
    const productToAdd = {
        id, name, price, quantity
    }

    addItem(productToAdd)
    setNotification('success', `Se agregó correctamente ${quantity} ${name}`)
}

  return (
    <section className="product-home">
      <div className="product-flex">
        <img className="product-img" src={front} alt={name} />

        <div className="product-info">
          <p className="product-category">{category}</p>
          <h2 className="product-title">{name}</h2>
          <p className="product-price">${price}</p>
          {
            !isInCart(id)
            ? <ItemCount onAdd={handleOnAdd} stock={stock} />
            : <div className="product-buttons">
              <Link to="/cart" className="checkout">Ir al carrito</Link>
              <Link to="/" className="back">Seguir comprando</Link>
              </div>
          }
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
