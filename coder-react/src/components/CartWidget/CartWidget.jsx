const CartWidget = () => {
    return (
            <ul className="navbar-nav me-auto">
                <li className="nav-link">
                    <img src="./img/carrito.svg" className="cartWidget" alt="carrito de compras" />
                </li>
                <span className="cantCarrito">0</span>
            </ul>
    
    );
}

export default CartWidget;