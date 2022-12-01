import { Link } from "react-router-dom";

//Generar card producto
const Item = ({producto}) => {
    console.log(producto);
    return (
        <>
          <div className="card border-light mb-3 cardProducto border-light">
            <img src={`../img/${producto.img}`} className="card-img-top d-block w-100" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">*{producto.marca}*</p>
              <div class="precio"> 
								<div class="box-precio">
									<span class="precio2">${producto.precio}</span>
								</div>
							</div>
              <button type="button" className="btn btn-primary"><Link className="nav-link" to={`/product/${prod.id}`}>Ver producto</Link></button>
            </div>
          </div>
        </>
    );
}

export default Item;
