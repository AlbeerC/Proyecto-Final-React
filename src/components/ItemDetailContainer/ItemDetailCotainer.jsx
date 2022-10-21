import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../../services/firebase";

function ItemDetailContainer({ setCart }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const docRef = doc(database, "products", productId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <h1 className="loading">Cargando...</h1>;
  }

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
}

export default ItemDetailContainer;
