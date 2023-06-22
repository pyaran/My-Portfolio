import "./Presentation.css" 
function NewPresentation(){
    
    return(
        <div className="presentation">
            <div className="container">
                <h2 className="Hola">Hola, mi nombre es</h2>
                <br />
                <h1 className="nombre">Santiago Jimenez Montilla</h1>
                <hr />
                <i className="bi bi-keyboard-fill keyboard">   Desarrollador Front-end</i>
                <br />
                <br />
                <i className="bi bi-geo-alt-fill pin">   San Miguel De Tucuman - Argentina</i>
                <br />
                <br />
                <i className="bi bi-envelope mail">   santiagojimenezmontilla@gmail.com</i>
                <br />
                <br />
                <i className="bi bi-telephone phone">   0381-5127458</i>
                <hr />
            </div>
        </div>
    )
}

export default NewPresentation;