import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../Notification/NotificationService"
import { Link, useNavigate } from "react-router-dom"

function ItemDetail({id, stock, front, name, category, price, title, description}) {

  const { addItem, isInCart } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)

  const navigate = useNavigate()

  const handleOnAdd = (quantity) => {
    const productToAdd = {
        id, name, price, quantity
    }

    addItem(productToAdd)
    setNotification("error" `Se agregó correctamente ${quantity} ${name}`)
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
            : <Link to="/cart" className="checkout">Finalizar compra</Link>
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
