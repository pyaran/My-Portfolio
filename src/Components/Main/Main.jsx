import NewPresentation from "../Presentation/Presentation";
import NewCard from "../Card/Card";
import NewAptitudes from "../Aptitudes/Aptitudes";
import NewContacto from "../Contacto/Contacto";
import "./Main.css";
import background from "./Images/background4.jpg"
function NewMain () {

    return(
       <div className="main-page" style={{ backgroundImage: `url(${background})` }}>
            <div className="Presentation-component">
                <NewPresentation/>
            </div>
            <div className="card-component">
                <NewCard/>
            </div>
            <div className="aptitudes-component">
                <NewAptitudes/>
            </div>
            <div className="Contacto-component">
                <NewContacto/>
            </div>
       </div>
       
    )
        
        
    
    
}

export default NewMain;