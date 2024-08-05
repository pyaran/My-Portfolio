import NewPresentation from "../Presentation/Presentation";
import NewCountdown from "../Navbar/Navbar";
import NewFooter from "../Footer/Footer";
import NewContacto from "../Contacto/Contacto";
import NewFiesta from "../Fiesta/Fiesta";
import NewDresscode from "../Dresscode/Dresscode";
import NewRegalo from "../Regalo/Regalo";
import NewMenu from "../Menu/Menu";
import NewCarrousel from "../Carrousel/Carrousel";
import NewCanciones from "../Canciones/Canciones";
import NewFotos from "../Fotos/Fotos";
import NewAsistencia from "../Asistencia/Asistencia";
import NewFecha from "../Fecha/Fecha";
import React from 'react';
import ReactDOM from 'react-dom';
import background from "./Images/flores2.jfif"
import "./Main.css";
function NewMain () {

    return(
       <div className="main-page" style={{ backgroundImage: `url(${background})`}}>
            <div className="Presentation-component">
                <NewPresentation/>
            </div>
            <div className="countdown-component">
                <NewCountdown targetDate="2024-09-14T21:00:00-03:00" />
            </div>
            <div className="footer-component">
                <NewFooter/>
            </div>
            <div className="contacto-component">
                <NewContacto/>
            </div>
            <div className="Fiesta-component">
                <NewFiesta/>
            </div>
            <div className="Dresscode-component">
                <NewDresscode/>
            </div>
            <div className="Regalo-component">
                <NewRegalo/>
            </div>
            <div className="Menu-component">
                <NewMenu/>
            </div>
            <div className="Carrousel-component">
                <NewCarrousel/>
            </div>
            <div className="Canciones-component">
                <NewCanciones/>
            </div>
            <div className="Fotos-component">
                <NewFotos/>
            </div>
            <div className="Asistencia-component">
                <NewAsistencia/>
            </div>
            <div className="Fecha-component">
                <NewFecha/>
            </div>

       </div>
       
    )
}

export default NewMain;