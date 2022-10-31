import "./Cart.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

function Cart () {
  const { cart, total, clearCart, totalQuantity } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="empty-cart">
        <h1 className="empty-cart-title">Tu carrito está vacio</h1>
        <Link to="/" className="empty-cart-btn">
          Ir a la tienda
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <div className="cart-list">
          <h1>Tu carrito</h1>
          {cart.map((prod) => (
            <CartItem key={prod.id} {...prod} />
          ))}
        </div>

        <div className="cart-bottom">
          <p> Precio total: <span>${total}</span> </p>
          <div className="bottom-btns">
            <Link to="/checkout" className="bottom-btn"> Finalizar compra </Link>
            <button className="bottom-btn" onClick={() => clearCart()}> Vaciar carrito </button>
          </div>

        </div>

      </div>
    );
  }
}

export default Cart;
