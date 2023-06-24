import image1 from "./CardImgs/icon.png";  
import "./Card.css"; 

function NewCard (){
    return(
    <div className="graybg">
        <div className="container">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4 imagen">
                        <img src={image1} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h1 className="card-title">SOBRE MI</h1>
                            <p className="paragraph">
                            Soy un desarrollador front-end con experiencia en el stack MERN, listo para impulsar proyectos innovadores con interfaces atractivas y funcionales.
                            </p>
                            
                            <p className="paragraph">
                            Soy un entusiasta del aprendizaje constante y siempre estoy buscando nuevos conocimientos para llevar mis habilidades al siguiente nivel. Estoy emocionado de enfrentar nuevos desafíos y aplicar mi entusiasmo por el crecimiento profesional en cada proyecto en el que participo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

    
}

export default NewCard;