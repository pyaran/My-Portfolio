import { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacto.css"
import Swal from "sweetalert2";
function NewContacto () {

    const emailRegexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const LettersRegexp = /[a-z]/g;

    let formulario = document.querySelector("#formContacto");
    
    const [contacto, setContacto] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje:""

    });

    const setContactoObj =(event) =>{
        setContacto({...contacto, [event.target.name]: event.target.value})
    }

    let parametros = {
        subject: contacto.asunto,
        user_name: contacto.nombre,
        reply_to: contacto.email,
        message: contacto.mensaje
    }
        
    
   let sendEmail = ()=>{
    emailjs.send("service_et15nov", "template_xlrdrwb", parametros, "54bUeuGNA82-XdtyT")
    .then(function(response) {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Su mensaje fue enviado con exito',
            showConfirmButton: false,
            timer:1500
        })
     });
   } 

   const enviar = ()=>{

    if ((LettersRegexp.test(contacto.nombre) === false) || contacto.nombre === ""){
        Swal.fire({
            icon: 'error',
            title: "Nombre invalido",
            text: 'Por favor, ingrese su nombre (Solo letras)',
        })
    }
    else if(emailRegexp.test(contacto.email) === false || contacto.email === "" ){
        Swal.fire({
            icon: 'error',
            title: "Email invalido",
            text: 'Por favor, ingrese una direccion de correo valida',
        })
    }
    else if(contacto.mensaje ===""){
        Swal.fire({
            icon: 'warning',
            title: "No olvide su mensaje!",
            text: 'Por favor, escriba su mensaje',
        })
    }
    else{
        sendEmail();
        formulario.reset();
        setContacto({
            nombre: "",
            email: "",
            asunto: "",
            mensaje:""
        })
    }
}
   

    return(

        <div className="Contacto">
           <div className ="titulo">
                <h1>COMUNICATE CONMIGO</h1>
           </div>
            <div className="container">
            <form id="formContacto">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="nombre" aria-describedby="name" onChange={setContactoObj}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={setContactoObj}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="asunto" className="form-label">Asunto</label>
                    <input type="text" className="form-control" id="asunto" name="asunto" aria-describedby="asunto" onChange={setContactoObj}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Tu mensaje</label>
                    <textarea  name="mensaje"  onChange={setContactoObj}></textarea>
                </div>
                <div className="d-grid col-5 mx-auto register-button">
                    <button type="button" className="btn btn-danger m-3 rounded-pill boton" onClick={enviar}>Enviar</button>
                </div>
            </form>
            </div>
        </div>
    )
        
        
    
    
}

export default NewContacto;