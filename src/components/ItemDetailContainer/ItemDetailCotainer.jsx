import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

function ItemDetailContainer( {setCart}) {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()


  useEffect(() => {
    getProductById(productId)
      .then((product) => {
        setProduct(product)
      })
      .finally(() => {
        setLoading(false)
      });
  }, [productId]);

  if (loading) {
    return <h1 className="loading">Cargando...</h1>
  }

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
}

export default ItemDetailContainer
