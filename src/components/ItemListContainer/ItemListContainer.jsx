import "./ItemListContainer.scss";
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ShopHome from "../ShopHome/ShopHome"

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

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
