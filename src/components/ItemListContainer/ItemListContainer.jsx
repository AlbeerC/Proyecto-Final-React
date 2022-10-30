import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import ShopHome from "../ShopHome/ShopHome"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync";

function ItemListContainer() {

  const { categoryId } = useParams();

  const getProductsCategory = () => getProducts(categoryId)

  const { data: products, error, loading } = useAsync(getProductsCategory, [categoryId])



  if (loading) {
    return <h1 className="loading">Cargando...</h1>;
  }

  if (error) {
    return <h1 className="loading">Error</h1>;
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
