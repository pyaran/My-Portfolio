import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacto.css"
function NewContacto () {

    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
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
        alert("Se envio el correo con exito");
     });
   } 

   const enviar = ()=>{

    if ((LettersRegexp.test(contacto.nombre) === false) || contacto.nombre === ""){
        alert("Nombre invalido");
    }
    else if(emailRegexp.test(contacto.email) === false || contacto.email === "" ){
        alert("Email invalido");
    }
    else if(contacto.mensaje ===""){
        alert("Por favor escriba su mensaje");
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
                <h1>GET IN TOUCH</h1>
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