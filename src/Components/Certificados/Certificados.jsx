import scrum from "./certificados/scrum.jpg"
import ingles from "./certificados/ingles.jpg"
import "./Certificados.css"

function NewCertificacion(){

    return(
         <div className='certificados'>
            <div className="container">
                <div className="scrum">
                    <h1 className="text-center certificados-h1">Scrum Fundamentals Certified</h1>
                    <img className="cerficado img-fluid" src={scrum} alt="Scrum Fundamentals" />
                </div>
                <hr />
                <div className="certificado ingles">
                    <h1 className="text-center certificados-h1">EF SET Certificate</h1>
                    <img className="cerficado img-fluid" src={ingles} alt="EF SET Certificate" />
                </div>
            </div>
         </div>
    )
}

export default NewCertificacion;