import scrum from "./certificados/scrum.jpg"
import ingles from "./certificados/ingles.jpg"
import "./Certificados.css"

function NewCertificacion(){

    return(
         <div className='certificados container'>
            <div className="scrum">
                <h1 className="text-center certificados-h1">Scrum Fundamentals Certified</h1>
                <img className="img-fluid" src={scrum} alt="Scrum Fundamentals" />
            </div>
            <div className="ingles">
                <h1 className="text-center certificados-h1">EF SET Certificate</h1>
                <img className="img-fluid" src={ingles} alt="EF SET Certificate" />
            </div>
         </div>
    )
}

export default NewCertificacion;