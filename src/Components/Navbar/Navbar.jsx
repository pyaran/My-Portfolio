import "./Navbar.css"
import { Link } from "react-router-dom";

function NewNavbar () {
    return(
       <nav className="nav sticky-top">
           <Link to="/" className="site-name">Home</Link>
            <ul>
                <li>
                    <Link to="/Certificaciones">Certificaciones </Link>
                </li>
                <li>
                    <Link to="/Proyectos">Proyectos</Link>
                </li>
            </ul>
       </nav>
    );
    
}

export default NewNavbar;