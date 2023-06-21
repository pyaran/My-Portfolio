import image1 from "./CardImgs/foto7.jpg";  
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
                            <h1 className="card-title">sobre mi</h1>
                            <p className="paragraph">
                            Soy un apasionado desarrollador front-end con experiencia en el stack MERN, listo para impulsar proyectos innovadores y cautivar a los usuarios con interfaces atractivas y funcionales.
                            </p>
                            <p className="paragraph">
                            Mi enfoque se centra en crear experiencias web impactantes y accesibles para todos los usuarios. Estoy familiarizado/a con la metodología ágil de Scrum, lo que me permite colaborar eficientemente en equipos, adaptarme rápidamente a los cambios y entregar resultados de calidad en cada iteración. Además, mi experiencia en diseño responsive me permite asegurar que las aplicaciones que desarrollo se vean y funcionen de manera óptima en todos los dispositivos y tamaños de pantalla.
                            </p>
                            <p className="paragraph">
                            Soy un entusiasta del aprendizaje constante y siempre estoy buscando nuevos conocimientos para llevar mis habilidades al siguiente nivel. Me encanta explorar las últimas tendencias y tecnologías, lo cual me permite ofrecer soluciones innovadoras y mantenerme al tanto de las mejores prácticas en el desarrollo front-end. Estoy emocionado/a de enfrentar nuevos desafíos y aplicar mi entusiasmo por el crecimiento profesional en cada proyecto en el que participo.
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