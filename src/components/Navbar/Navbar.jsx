import "./Navbar.scss"
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

function Navbar() {

  return (
    <header>
        <ul className="menu">
            <Link to="/" className="nav-item"> <li> Inicio </li></Link>
            <Link className="nav-item"> <li> Filtros </li>
                <ul className="submenu">
                    <Link to={"/category/Aventura"} className="submenu-item"> <li> Aventura </li> </Link>
                    <Link to={"/category/Accion"} className="submenu-item"> <li> Acción </li> </Link>
                    <Link to={"/category/Deportes"} className="submenu-item"> <li> Deportes </li> </Link>
                    <Link to={"/category/Shooter"} className="submenu-item"> <li> Shooter </li> </Link>
                </ul> 
            </Link>
        </ul>


        <Link to="/"> <img src={logo} alt="logo" className="navbar-logo" /></Link>

        <CartWidget />
        
    </header>
  );
}

export default Navbar;
