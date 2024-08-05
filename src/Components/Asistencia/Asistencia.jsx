import "./Asistencia.css";
import { IconContext } from "react-icons";
import { FaWpforms } from "react-icons/fa";
function NewAsistencia (){

    return(
    <div className='container-fluid asistencia'>
    <div className='icono-agenda'>
    <IconContext.Provider value={{ color: "white", className: "agenda", size:"50px" }}>
  <div>
  <FaWpforms/>
  </div>
</IconContext.Provider>
    </div>
    <div className='titulo-confirmar-asistencia'>
    <h1>
      Confirmar asistencia
    </h1>
    </div>
    <div className='titulo-asistencia'>
    <h3>
      ¡Nos encantaria contar con vos en este dia magico!
    </h3>
    <h3>
        Por favor, confirma tu asistencia hasta el dia 01/09/2024.
    </h3>
    <h3>
      En caso de no recibir tu confirmacion, entenderemos que no podrás acompañarnos
    </h3>
    </div>
    <div>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuyMnCDkhVVtvfQKqApeutVa91lhKhS1buP0ODABrwepssQw/viewform" target="_blank" rel="noreferrer">
    <button className="confirmar-asistencia">Confirmar asistencia</button>
    </a>
    </div>
  </div>
    )
};
export default NewAsistencia;