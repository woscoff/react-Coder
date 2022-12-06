import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <>
        <button className="btn btn-secondary cartWidget">
            <Link to={'/cart'} className="nav-link">
            <img src="./img/carrito.svg" className="cartWidget" alt="carrito de compras" />
            <span className="cantCarrito">0</span>
            </Link>
        </button>
        </>
    );
}

export default CartWidget;