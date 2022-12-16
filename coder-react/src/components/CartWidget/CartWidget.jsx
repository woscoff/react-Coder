import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContex";
const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext();

    return (
        <>
        <button className="btn btn-secondary cartWidget">
            <Link to={'/cart'} className="nav-link">
            <img src="./img/carrito.svg" className="cartWidget" alt="carrito de compras" />
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link>
        </button>
            
        </>
    );
}

export default CartWidget;