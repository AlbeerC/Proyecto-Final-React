import "./CartItem.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartItem({ id, name, quantity, price }) {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <div className="cart-item">
      <p>
        <span>Producto:</span>
        {name}
      </p>
      <p>
        <span>Precio:</span>${price}
      </p>
      <p>
        <span>Cantidad:</span>
        {quantity}
      </p>
      <p>
        <span>Subtotal:</span>${price * quantity}
      </p>
      <button onClick={() => handleRemove(id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
