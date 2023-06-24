import "./Footer.css";
function NewFooter (){

    return(
        <div className="sticky-footer">
            <div className="redes">
                <div className="Linkedin">
                    <a href="https://www.linkedin.com/in/sjmontilla/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin linkedin text-primary"></i></a>
                </div>
                <div className="Whatsapp" >
                    <a href="https://wa.me/3815127458" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp whatsapp text-success" name="whatsapp" ></i></a>
                </div>
                <div className="Github" >
                    <a href="https://github.com/pyaran" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default NewFooter;