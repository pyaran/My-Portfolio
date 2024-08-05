import "./Canciones.css";
import { IconContext } from "react-icons";
import { GiMusicalNotes } from "react-icons/gi";
function NewCanciones (){

    return(
    <div className='container-fluid canciones'>
    <div className='icono-musica'>
    <IconContext.Provider value={{ color: "white", className: "notes", size:"50px" }}>
  <div>
  <GiMusicalNotes/>
  </div>
</IconContext.Provider>
    </div>
    <div className='cancion'>
    <h1>
      ¿Que cancion no puede faltar?
    </h1>
    </div>
    <div className='Cancion-form'>
    <h3>
      ¡Ayudanos sugiriendo las canciones que pensas que no pueden faltar en la fiesta!
    </h3>
    </div>
    <div>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfzONKKr_LzUAvlvjLTujG0SOjLwo01MS_028Y4aP93eDIWHg/viewform" target="_blank" rel="noreferrer">
    <button className="Sugerir-cancion">Sugerir cancion</button>
    </a>
    </div>
  </div>
    )
};
export default NewCanciones;