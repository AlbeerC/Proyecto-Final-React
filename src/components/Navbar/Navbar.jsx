import "./Navbar.css";
import logo from "../../assets/logo.png";
import CardWidget from "../CardWidget/CardWidget";

function Navbar() {
  return (
    <header>
        <ul className="menu">
            <li> <button href=""> Tienda </button> </li>
            <li> <button href=""> Catálogo </button>
                <ul className="submenu">
                    <li> <button href=""> Aventura </button></li>
                    <li> <button href=""> Acción </button></li>
                    <li> <button href=""> Deportes </button></li>
                    <li> <button href=""> Pelea </button></li>
                    <li> <button href=""> Shooter </button></li>
                </ul> 
            </li>
        </ul>

        <a href="../../index.js"> <img src={logo} alt="" /> </a>

        <CardWidget />
        
    </header>
  );
}

export default Navbar;
