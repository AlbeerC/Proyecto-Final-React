import { useState, useEffect, createContext } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
  }, [cart])

  useEffect(() => {
    const total = getTotal()
    setTotal(total)
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

  const getTotal = () => {
    let acc = 0

    cart.forEach(prod => {
      acc += prod.quantity * prod.price
    })

    return acc
  }

  const clearCart = () => {
    setCart([])
  }


  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, totalQuantity, total, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
