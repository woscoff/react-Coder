import Item from "../Item/Item";
//Modificar mi array de objetos
const ItemList = ({productsList}) => {
    return (
        <>
            {productsList.map(producto => <Item key={producto.id} prod={producto} />)}
        </>
    );
}

export default ItemList;
