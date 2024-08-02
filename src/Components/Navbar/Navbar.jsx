import React, { useState, useEffect } from 'react';
import "./Navbar.css" 
import background from "./Images/Fondo-Invitacion-casamiento.jpg"

const NewCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='container-fluid countdown'>
      <div className='fecha'>
      <h1>
        {timeLeft.days || 0} Días, {timeLeft.hours || 0} Horas, {timeLeft.minutes || 0} Minutos, {timeLeft.seconds || 0} Segundos
      </h1>
      </div>
      <div className='icono-corazon'>
      <h2>
        icono de corazon
      </h2>
      </div>
      <div className='comienza'>
      <h1>
        AQUI COMIENZA, NUESTRO FELICES PARA SIEMPRE
      </h1>
      </div>
      
    </div>
  );
};

export default NewCountdown;
