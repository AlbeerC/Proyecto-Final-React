import './CartWidget.scss'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function CartWidget () {

    const { totalQuantity } = useContext(CartContext)

    return (
      <div className="cart">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="70" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
        </svg>
        <span>{totalQuantity}</span>
      </div>
    )
}

export default CartWidget