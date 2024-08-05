import "./Fecha.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

// Google Calendar URL with provided details
const googleCalendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casamiento%20Juli%20y%20Edgar&dates=20240914T130000Z/20240914T140000Z&details=Hoy%20se%20casan%20Juli%20Y%20Edgar&sf=true&output=xml`;

function NewFecha() {
    return (
        <div className='container-fluid fecha'>
            <div className='icono-calendario'>
                <IconContext.Provider value={{ color: "white", className: "time", size:"50px" }}>
                    <div>
                        <FaRegCalendarAlt/>
                    </div>
                </IconContext.Provider>
            </div>
            <div className='agenda-fecha'>
                <h1>
                    Agenda la fecha
                </h1>
            </div>
            <div className='ubicacion4'>
                <a href={googleCalendarURL} target="_blank" rel="noreferrer">
                    <button className="agendar-la-fecha">Agenda</button>
                </a>
            </div>
            <div className="gracias">
                <h2>
                    ¡Gracias por formar parte de uno de los días más felices de nuestras vidas!
                </h2>
            </div>
            <div className="JYE">
                <h1>
                    Juli y Edgar
                </h1>
            </div>
        </div>
    );
}

export default NewFecha;
