import { useState, useEffect, createContext } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
  }, [cart])


  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd])
    } else {
      console.log('Ya está en el carrito')
    }
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter((prod) => prod.id !== id)
    setCart(cartWithoutProduct);
  }

  const getQuantity = () => {
    let acc = 0

    cart.forEach((prod) => {
      acc += prod.quantity
    })

    return acc
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
