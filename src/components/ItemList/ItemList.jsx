import "./ItemList.scss";
import Item from "../Item/Item";

function ItemList({ products }) {
  return (
    <div className="products-list">
      {products.map((prod) => (
        <Item
          key={prod.id}
          img={prod.img}
          name={prod.name}
          category={prod.category}
          price={prod.price}
          id={prod.id}
        />
      ))}
    </div>
  );
}

export default ItemList;
