import "./Fiesta.css";
function NewFiesta (){

    return(
    <div className='container-fluid Fiesta'>
    <div className='icono-copas'>
    <h2>
      icono de copas
    </h2>
    </div>
    <div className='ceremonia-fiesta'>
    <h1>
      Fiesta
    </h1>
    </div>
    <div className='ubicacion3'>
    <p>
      Salon Cansonieri Park
    </p>
    <p>
      22 Hs
    </p>
    </div>
    <div>
    <a href="https://www.google.com/maps/place/Canzonieri+park,+Yerba+Buena,+Tucum%C3%A1n/data=!4m2!3m1!1s0x942243e00ed4b3eb:0xa64ea21de74defe9?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNi4xMDEYACCenQoqUSw5NDIwNzgwOCw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQVI%3D" target="_blank" rel="noreferrer">
    <button className="como-llegar">Como llegar</button>
    </a>
    </div>
  </div>
    )
};
export default NewFiesta;