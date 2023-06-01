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
                        <div className="card-body">
                            <h1 className="card-title">sobre mi</h1>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis distinctio, quae obcaecati ea aliquam soluta iusto accusantium autem quam exercitationem tempora ut amet molestiae error recusandae. Aut, modi sed.
                            </p>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea nulla illo, rerum porro, earum quo laborum iste quis obcaecati ipsa est delectus. Dignissimos deserunt ratione repellendus provident! Cupiditate, sapiente!
                            </p>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus aut tempora doloremque voluptas facilis! Facere totam dolorum dolorem ipsam soluta in, beatae, vero numquam vel, perferendis sed veniam sunt!
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