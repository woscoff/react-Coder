import Item from "../Item/Item";
//Modificar mi array de objetos
const ItemList = ({productList}) => {
    console.log(productList);
    return (
        <div>
            {productList.map(product => <Item key={product.id} producto={product} />)}
        </div>
    );
}

export default ItemList;
