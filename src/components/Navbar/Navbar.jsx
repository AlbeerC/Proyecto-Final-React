import "./Navbar.scss"
import logo from "../../assets/logo.png"
import CardWidget from "../CardWidget/CardWidget"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header>
        <ul className="menu">
            <Link to="/" className="nav-item"> <button> Inicio </button></Link>
            <Link className="nav-item"> <button href=""> Filtros </button>
                <ul className="submenu">
                    <Link to={"/category/Aventura"} className="submenu-item"> <button href=""> Aventura </button> </Link>
                    <Link to={"/category/Accion"} className="submenu-item"> <button href=""> Acción </button> </Link>
                    <Link to={"/category/Deportes"} className="submenu-item"> <button href=""> Deportes </button> </Link>
                    <Link to={"/category/Pelea"} className="submenu-item"> <button href=""> Pelea </button> </Link>
                    <Link to={"/category/Shooter"} className="submenu-item"> <button href=""> Shooter </button> </Link>
                </ul> 
            </Link>
        </ul>


        <Link to="/"> <img src={logo} alt="logo" /></Link>

        <CardWidget />
        
    </header>
  );
}

export default Navbar;
