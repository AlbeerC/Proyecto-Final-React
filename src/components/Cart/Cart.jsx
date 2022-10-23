import "./Cart.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"

function Cart() {
  const { cart, removeItem, total, clearCart, totalQuantity } = useContext(CartContext);

  if ( totalQuantity === 0 ) {
    return (
      <div className="empty-cart">
        <h1 className="empty-cart-title">Tu carrito está vacio</h1>
        <Link to="/" className="empty-cart-btn">Ir a la tienda</Link>
      </div>

    )
  } else {
    return (
      <div className="cart-container">
        <h1>Tu carrito</h1>
  
        <div className="cart-list">
          {cart.map((prod) => (
            <div key={prod.id} className="cart-item">
              <p>
                <span>Producto:</span>
                {prod.name}
              </p>
              <p>
                <span>Precio:</span>
                ${prod.price}
              </p>
              <p>
                <span>Cantidad:</span>
                {prod.quantity}
              </p>
              <p>
                <span>Subtotal:</span>
                ${prod.price * prod.quantity}
              </p>
              <button onClick={() => removeItem(prod.id)}>Eliminar</button>
            </div>
          ))}
        </div>
  
        <p className="total-price">
          Precio total: <span>${total}</span>
        </p>
        <Link to="/checkout" className="cart-checkout">Finalizar compra</Link>
        <button className="cart-clear" onClick={() => clearCart()}>
          Vaciar carrito
        </button>
      </div>
    );
  }


}

export default Cart;
