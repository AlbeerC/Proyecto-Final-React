import "./Checkout.scss"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { database } from "../../services/firebase/index"
import { NotificationContext } from "../../notification/NotificationService"
import { useNavigate } from "react-router-dom"

function Checkout () {

    const { setNotification } = useContext(NotificationContext)
    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()


    const [ loading, setLoading ] = useState(false)

    const [ name, setName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ adress, setAdress ] = useState("")

    const createOrder = async () => {
        setLoading(true)

        try {
            const objectOrder = {
                buyer: {
                    name: name,
                    email: email,
                    phone: phone,
                    adress: adress
                },
                items: cart,
                total: total
            }

            const batch = writeBatch(database)

            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(database, "products")
    
            const productsAdded = await getDocs(query(productsRef, where(documentId(), "in", ids)))

            const { docs } = productsAdded

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb- prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(database, "orders")
                const orderAdded= await addDoc(orderRef, objectOrder)

                clearCart()

                setTimeout(() => {
                    navigate("/")
                }, 3000)

                setNotification("success", `Orden realizada. El ID de su orden es: ${orderAdded.id}`)
            } else {
                setNotification("error" , "Uno o más productos están fuera de stock")
            }

        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    if (loading) {
        return (
            <h1 className="loading">Se está generando su orden...</h1>
        )
    }


    
    return (
        <div className="form-container">
            <form className="form">
                <p>Ingrese sus datos para crear la orden</p>
                <div className="campo">
                    <label>Nombre</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="campo">
                    <label>Correo electrónico</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="campo">
                    <label>Número de celular</label>
                    <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="campo">
                    <label>Dirección</label>
                    <input type="text" required value={adress} onChange={(e) => setAdress(e.target.value)} />
                </div>
                <button className="btn-checkout" onClick={createOrder}>Generar orden</button>
            </form>


        </div>
    )
}

export default Checkout