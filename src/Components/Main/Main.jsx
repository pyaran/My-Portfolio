import NewPresentation from "../Presentation/Presentation";
import NewCountdown from "../Navbar/Navbar";
import NewFooter from "../Footer/Footer";
import NewContacto from "../Contacto/Contacto";
import NewFiesta from "../Fiesta/Fiesta";
import NewDresscode from "../Dresscode/Dresscode";
import React from 'react';
import ReactDOM from 'react-dom';
import background from "./Images/Fondo-Invitacion-casamiento.jpg"
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
       </div>
       
    )
        
        
    
    
}

export default NewMain;