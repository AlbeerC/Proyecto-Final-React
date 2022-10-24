import "./CartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/carrito-vacio.png";
import fullCart from "../../assets/carrito-lleno.png";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <Link to="/cart" className="cart">
        <img src={emptyCart} alt="carrito vacio" />
        <span>{totalQuantity}</span>
      </Link>
    );
  } else {
    return (
      <Link to="/cart" className="cart">
        <img src={fullCart} alt="carrito lleno" />
        <span>{totalQuantity}</span>
      </Link>
    );
  }
}

export default CartWidget;
