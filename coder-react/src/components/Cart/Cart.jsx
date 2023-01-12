
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContex";
import { useDarkModeContext } from "../../context/DarkModeContext";
import '../App.css'

const Cart = () => {
    const {darkMode} = useDarkModeContext();
    const{carrito, emptyCart, totalPrice, removeItem}= useCarritoContext();
    return (
        <>
        {carrito.length === 0 ? 
        <>
        <h1>Carrito vacio</h1>
        <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
        </>
        :
        <div className="container text-center cart">
            <div class="row row-cols-1">
        {
            carrito.map(prod => 
                <div className="card mb-2 col" key={prod.id} style={{maxWidth: '80em'}}>
                    <div className="col-md-15">
                        <div className="cardBody">
                        <img src={prod.img} alt="Producto" className="img-fluid rounded-start image" />
                            <h5 className="card-title">{`${prod.nombre} ${prod.marca}`}</h5>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Precio unitario: {new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                            <p className="card-text">Cantidad: {new Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                        </div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/reactcoder-25cdb.appspot.com/o/delete.svg?alt=media&token=385edb06-a1a4-41e6-b402-1db5d419622d" onClick={() => removeItem(prod.id)} alt=""/>
                    </div>
                </div>
        )}
            <div className="col">
                <p>Compra final: ${new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                <button className="btn btn-danger m-2" onClick={emptyCart}>Vaciar carrito</button>
                <button className="btn btn-dark m-2"><Link to={'/'}>Continuar comprando</Link></button>
                <button className="btn btn-dark m-2"><Link to={'/checkout'}>Finalizar Compra</Link></button>
            </div>
            </div>
        </div>
        }
        </>
    );
}

export default Cart;


            
