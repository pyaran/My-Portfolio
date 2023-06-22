import "./Navbar.css"
import { Link } from "react-router-dom";

function NewNavbar () {
    return(
       <nav className="nav sticky-top">
            <div className="navbar container-fluid">
                <ul>
                    <li>
                    <Link to="/" className="site-name">Home</Link>
                    </li>
                    <li>
                        <Link to="/Certificaciones">Certificaciones </Link>
                    </li>
                    <li>
                        <Link to="/Proyectos">Proyectos</Link>
                    </li>
                </ul>
            </div>
            
       </nav>
    );
    
}

export default NewNavbar;