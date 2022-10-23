import "./ItemListContainer.scss";
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ShopHome from "../ShopHome/ShopHome"
import { getDocs, collection, query, where } from "firebase/firestore"
import { database } from "../../services/firebase"

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)
   
    const collectionRef = categoryId 
        ? query(collection(database, "products"), where("category", "==", categoryId))
        : collection(database, "products")

    getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(doc => {
            const data = doc.data()

            return { id: doc.id, ...data }
        })

        setProducts(productsAdapted)

    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })  
}, [categoryId])

  if (loading) {
    return <h1 className="loading">Cargando...</h1>;
  }

  return (
    <div className="main">
      <ShopHome />
      <h1 className="list-title">Nuestros productos</h1>
      <ItemList products={products} />
      <p className="soon">Más juegos próximamente</p>
    </div>
  );
}

export default ItemListContainer;
