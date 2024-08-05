import "./Footer.css";
import { FaChurch } from "react-icons/fa6";
import { IconContext } from "react-icons";
function NewFooter (){

    return(
    <div className='container-fluid footer'>
    <div className='icono-iglesia'>
    <IconContext.Provider value={{ color: "white", className: "church", size:"50px" }}>
  <div>
  <FaChurch/>
  </div>
</IconContext.Provider>
    </div>
    <div className='ceremonia-religiosa'>
    <h1>
      Ceremonia religiosa
    </h1>
    </div>
    <div className='ubicacion'>
    <h2>
      14 de Septiembre 2024
    </h2>
    <h2>
      Parroquia Nuestra Señora Del Valle
    </h2>
    <h2>
      21 Hs
    </h2>
    </div>
    <div>
    <a href="https://www.google.com/maps/place/Parroquia+Nuestra+Se%C3%B1ora+del+Valle/@-26.815749,-65.293438,17z/data=!3m1!4b1!4m6!3m5!1s0x942242d62123af13:0xaa2edb3420b1b358!8m2!3d-26.815749!4d-65.293438!16s%2Fg%2F1tfwlfys?entry=ttu" target="_blank" rel="noreferrer">
    <button className="como-llegar">Como llegar</button>
    </a>
    </div>
  </div>
    )
};
export default NewFooter;