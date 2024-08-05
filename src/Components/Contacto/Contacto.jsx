import "./Contacto.css"
import { GiBigDiamondRing } from "react-icons/gi";
import { IconContext } from "react-icons";

function NewContacto () {
  return(
  <div className='container-fluid contacto'>
    <div className='icono-anillo'>
    <IconContext.Provider value={{ color: "white", className: "church", size:"50px" }}>
  <div>
  <GiBigDiamondRing/>
  </div>
</IconContext.Provider>
    </div>
    <div className='ceremonia-civil'>
    <h1>
      Ceremonia civil
    </h1>
    </div>
    <div className='ubicacion2'>
    <h2>
      14 de Septiembre 2024
    </h2>
    <h2>
      Canzonieri Park - Yerba Buena
    </h2>
    <h2>
      22 Hs
    </h2>
    </div>
    <div>
    <a href="https://www.google.com/maps/place/Canzonieri+park,+Yerba+Buena,+Tucum%C3%A1n/data=!4m2!3m1!1s0x942243e00ed4b3eb:0xa64ea21de74defe9?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNi4xMDEYACCenQoqUSw5NDIwNzgwOCw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQVI%3D" target="_blank" rel="noreferrer">
    <button className="como-llegar2">Como llegar</button>
    </a>
    </div>
  </div>
    )
}

export default NewContacto;