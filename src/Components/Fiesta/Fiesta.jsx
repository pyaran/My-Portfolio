import "./Fiesta.css";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { IconContext } from "react-icons";
function NewFiesta (){

    return(
    <div className='container-fluid Fiesta'>
    <div className='icono-copas'>
    <IconContext.Provider value={{ color: "white", className: "glass", size:"50px" }}>
  <div>
  <LiaGlassCheersSolid/>
  </div>
</IconContext.Provider>
    </div>
    <div className='ceremonia-fiesta'>
    <h1>
      Fiesta
    </h1>
    </div>
    <div className='ubicacion3'>
    <h2>
      Salon Canzonieri Park
    </h2>
    <h2>
      22 Hs
    </h2>
    </div>
    <div>
    <a href="https://www.google.com/maps/place/Canzonieri+park,+Yerba+Buena,+Tucum%C3%A1n/data=!4m2!3m1!1s0x942243e00ed4b3eb:0xa64ea21de74defe9?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNi4xMDEYACCenQoqUSw5NDIwNzgwOCw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQVI%3D" target="_blank" rel="noreferrer">
    <button className="como-llegar3">Como llegar</button>
    </a>
    </div>
  </div>
    )
};
export default NewFiesta;