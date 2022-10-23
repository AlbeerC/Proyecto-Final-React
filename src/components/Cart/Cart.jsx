import "./Cart.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Cart() {
  const { cart, removeItem, total, clearCart } = useContext(CartContext);

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

            <p className="total-price">Precio total: <span>${total}</span> </p>
            <button className="cart-checkout">Finalizar compra</button>
            <button className="cart-clear" onClick={() => clearCart()}>Vaciar carrito</button>

    </div>
  );
}
