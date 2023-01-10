import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContex";
import { useDarkModeContext } from '../../context/DarkModeContext';
const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext();
    const {darkMode} = useDarkModeContext()
    return (
        <>
        <button className={`btn btn-secondary navButton cartWidget ${darkMode ? 'bg-primary' : 'bg-dark'}`}>
            <Link to={'/cart'} className="nav-link">
            <img src="./img/carrito.svg" className="cartWidget" alt="carrito de compras" />
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link>
        </button>
            
        </>
    );
}

export default CartWidget;