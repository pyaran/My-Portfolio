import recetapp from "./Recetapp/recetapp.jpg";
import wip from "./WorkInProgress/wip.jpg"
import "./Proyectos.css";
function NewProyecto () {
    return(
    <div className="proyectos">
        <div className="container contenedor-proyectos">
            <div className="card proyecto">
               <img src={recetapp} className="img-fluid card-img-top imagen-card" alt="recetapp"/>
                <div className="card-body contenido-card">
                    <h1 className="card-title titulo-card">Recetapp</h1>
                    <h2 className="card-text">Proyecto final de RollingCode School</h2>
                    <p className="card-text">Recetapp nació de la unión del gusto por la comida casera, y el encanto de transmitir y compartir tradiciones o ideas a otras personas.</p>
                    <p className="card-text">Si sos un apasionado de la cocina o solo estas buscando nuevos sabores, en Recetapp vas a encontrar la receta ideal para vos.</p>
                    <a href="https://testing--recetapp-comision-8i.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-primary boton-card">Ir a Recetapp</a>
                </div>
            </div>
            <div className="card proyecto">
               <img src={wip} className="img-fluid card-img-top imagen-card" alt="E-Commerce"/>
                <div className="card-body contenido-card">
                    <h1 className="card-title titulo-card">E-Commerce Showroom</h1>
                    <h2 className="card-text">Proyecto Personal</h2>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default NewProyecto;