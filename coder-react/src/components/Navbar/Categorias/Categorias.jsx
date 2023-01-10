import '../navbar.css';
import { Link } from "react-router-dom";
import { useDarkModeContext } from '../../../context/DarkModeContext';
const Categorias = () => {
  const {darkMode} = useDarkModeContext()
    return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className={`btn btn-secondary navButton ${darkMode ? 'bg-primary' : 'bg-dark'}`}><Link className="nav-link" to={"/category/1"}>Buzos</Link></button>
              </li>
              <li className="nav-item">
              <button className={`btn btn-secondary navButton ${darkMode ? 'bg-primary' : 'bg-dark'}`}><Link className="nav-link" to={"/category/3"}>Pantalones</Link></button>
              </li>
              <li className="nav-item">
              <button className={`btn btn-secondary navButton ${darkMode ? 'bg-primary' : 'bg-dark'}`}><Link className="nav-link" to={"/category/2"}>Remeras</Link></button>
              </li>
            </ul>
    );
}

export default Categorias;

