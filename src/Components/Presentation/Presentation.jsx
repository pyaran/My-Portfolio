import "./Presentation.css" 
function NewPresentation(){
    
    return(
        <div className="presentation">
            <div className="container">
                <div className="contenido">
                    <h1 className="Hola">Hola, mi nombre es</h1>
                    <br />
                    <h1 className="nombre">Santiago Jimenez Montilla</h1>
                    <hr />
                    <i className="icono bi bi-keyboard-fill keyboard"> Desarrollador Front-end</i>
                    <i className="icono bi bi-geo-alt-fill pin"> San Miguel De Tucuman - Argentina</i>
                    <i className="icono bi bi-envelope mail"> santiagojimenezmontilla@gmail.com</i>
                    <i className="icono bi bi-telephone phone"> 0381-5127458</i>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default NewPresentation;