import "./Fotos.css";
import { IconContext } from "react-icons";
import { FaCamera } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function NewFotos (){

    return(
    <div className='container-fluid fotos'>
    <div className='icono-fotos'>
    <IconContext.Provider value={{ color: "white", className: "camera", size:"47px" }}>
  <div>
  <FaCamera/>
  </div>
</IconContext.Provider>
    </div>
    <div className='titulo-foto'>
    <h1>
      ¡Fotos!
    </h1>
    <h3>
        Podes subir fotos de nuestros recuerdos, preparativos y de nuestra noche especial
    </h3>
    </div>
    <div>
    <a href="https://photos.google.com/share/AF1QipNHklKs3hj8CUSbt1_1V1kdDoaPibeM-dq-403I5Zt8Tg0Y_4IaQynstsibHM_nWQ?key=Y2lnYVJoNVVyc3J1Q241WWRHeFkybG9zR19KY2tn" target="_blank" rel="noreferrer">
    <button className="album">Album de fotos</button>
    </a>
    </div>
    <div className='icono-insta'>
    <IconContext.Provider value={{ color: "white", className: "instagram", size:"50px" }}>
  <div>
  <FaInstagram/>
  </div>
</IconContext.Provider>
    </div>
    <div className="hashtag">
        <h1>
            #J&E2024
        </h1>
    </div>
    <div className="etiquetanos">
        <h3>
            Etiquetanos en Instagram con nuestro hashtag en tus fotos o videos
        </h3>
    </div>
  </div>
    )
};
export default NewFotos;