import '../navbar.css';
import { Link } from "react-router-dom";
const Categorias = () => {
    return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className='btn btn-secondary'><Link className="nav-link" to={"/category/1"}>Buzos</Link></button>
              </li>
              <li className="nav-item">
              <button className='btn btn-secondary'><Link className="nav-link" to={"/category/3"}>Pantalones</Link></button>
              </li>
              <li className="nav-item">
              <button className='btn btn-secondary'><Link className="nav-link" to={"/category/2"}>Remeras</Link></button>
              </li>
            </ul>
    );
}

export default Categorias;

