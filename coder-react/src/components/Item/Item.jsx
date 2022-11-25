//Generar card producto
const Item = ({producto}) => {
    console.log(producto);
    return (
        <>
      <div className="card">
        <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">${producto.precio}</p>
          <button className="btn btn-dark"></button>
        </div>
      </div>
        </>
    );
}

export default Item;
