import './navbar.css';
import BotonDarkMode from './BotonDarkMode/BotonDarkMode';
import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";

import { useDarkModeContext } from '../../context/DarkModeContext';
const Navbar = () => {
    const {darkMode} = useDarkModeContext()
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${darkMode ? 'bg-primary' : 'bg-dark'}`}>
        <div className="container-fluid">
          <a href="/">
						<img src="./img/logo.png" alt="logo" className='logo'/>
					</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse">
          <Categorias/>
          <div className='d-flex'>
          <CartWidget/>
          <BotonDarkMode/>
          </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
