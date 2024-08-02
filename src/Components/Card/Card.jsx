import "./Card.css"; 

function NewCard (){
    return(
        <div className='container card'>
            <div className='icono-copas'>
                <h2>
                icono de copas
                </h2>
            </div>
            <div className='fiesta'>
                <h1>
                Fiesta
                </h1>
            </div>
            <div className='ubicacion3'>
                <p>
                Salon Canzonieri Park
                </p>
                <p>
                22 Hs
                </p>
            </div>
            <div>
                <a href="https://www.google.com/maps/place/Canzonieri+park/@-26.8075885,-65.3252861,17z/data=!3m1!4b1!4m6!3m5!1s0x942243e00ed4b3eb:0xa64ea21de74defe9!8m2!3d-26.8075885!4d-65.3252861!16s%2Fg%2F11gyzkh7f0?entry=ttu" target="_blank" rel="noreferrer">
                <button className="como-llegar">Como llegar</button>
                </a>
            </div>
      </div>
    )
    
}

export default NewCard;