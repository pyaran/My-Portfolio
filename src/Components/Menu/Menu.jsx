import "./Menu.css";
import { IconContext } from "react-icons";
import { BiFoodMenu } from "react-icons/bi";
function NewMenu (){

    return(
    <div className='container-fluid menu'>
    <div className='icono-menu'>
    <IconContext.Provider value={{ color: "white", className: "dress", size:"50px" }}>
  <div>
  <BiFoodMenu />
  </div>
</IconContext.Provider>
    </div>
    <div className='titulo-menu'>
    <h1>
      Menu
    </h1>
    </div>
    <div className='info-menu'>
    <h3>
      Queremos que todos nuestros invitados disfruten, por eso haznos saber si tienes alguna restricion alimentaria
    </h3>
    </div>
    <div>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-A6SZNJUOK3c3cknYaYMgqs3PtSmwrpCufx_b1HvKjEQj_A/viewform" target="_blank" rel="noreferrer">
    <button className="encuesta-menu">Indicar</button>
    </a>
    </div>
  </div>
    )
};
export default NewMenu;