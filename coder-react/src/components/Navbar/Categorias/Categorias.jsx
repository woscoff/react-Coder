import '../navbar.css';
const Categorias = () => {
    return (
        <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Buzos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pantalones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Remeras</a>
              </li>
            </ul>
        </div>
    );
}

export default Categorias;

