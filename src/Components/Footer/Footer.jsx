import "./Footer.css";
import { useNavigate } from 'react-router-dom';

function NewFooter (){

    let navigate = useNavigate();


    return(
        <div className="footer ">
            <div className="redes">
                <div className="Linkedin">
                    <a href="https://www.linkedin.com/in/sjmontilla/"><i className="bi bi-linkedin linkedin text-primary"></i>
                    <span className="text">
                        Linkedin
                    </span></a>
                </div>
                <div className="Whatsapp" >
                <a href="https://wa.me/3815127458"><i className="bi bi-whatsapp whatsapp text-success" name="whatsapp" ></i></a>
                <span className="text">
                     Whatsapp
                </span>
                </div>
            </div>
                
        </div>
    )
}

export default NewFooter;