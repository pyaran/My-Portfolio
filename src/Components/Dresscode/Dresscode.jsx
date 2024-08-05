import "./Dresscode.css";
import { GiAmpleDress } from "react-icons/gi";
import { IconContext } from "react-icons";

function NewDresscode (){

    return(
    <div className='container-fluid dresscode'>
    <div className='icono-vestido'>
    <IconContext.Provider value={{ color: "white", className: "dress", size:"50px" }}>
  <div>
  <GiAmpleDress/>
  </div>
</IconContext.Provider>
    </div>
    <div className='titulo-dresscode'>
    <h1>
      Dress Code
    </h1>
    </div>
    <div className="subtitulo-dresscode">
        <h2>
            Formal Elegante
        </h2>
    </div>
    <div className='info-dresscode'>
    <h3 className="longh3">
      En nuestra boda, el blanco y tonalidades afines está reservado para una sola persona:
    </h3>
    <h3>
      ¡La novia!
    </h3>
    <h3>
      ¡Vamos a iluminar la fiesta con otros colores!
    </h3>
    </div>
  </div>
    )
};
export default NewDresscode;