import React, { useState, useEffect } from 'react';
import "./Navbar.css" 
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";


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
      <div className='fecha2'>
      <h2>
      {timeLeft.days || 0} Días
      </h2>
      <h2>
      {timeLeft.hours || 0} Hs
      </h2>
      <h2>
      {timeLeft.minutes || 0} Min
      </h2>
      <h2>
        {timeLeft.seconds || 0} Seg
      </h2>
      </div>
      <div className='icono-corazon'>
      <IconContext.Provider value={{ color: "white", className: "heart", size:"40px" }}>
  <div>
  <FaHeart/>
  </div>
</IconContext.Provider>
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