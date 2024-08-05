import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrousel.css'; // Import your custom CSS

// Import images from the same folder
import img1 from "./images/imagen1.jpg";
import img2 from './images/imagen2.jpg';
import img3 from './images/imagen3.jpg';
import img4 from './images/imagen4.jpg';
import img5 from './images/imagen5.jpg';
import img6 from './images/imagen6.jpg';
import img7 from './images/imagen7.jpg';
import img8 from './images/imagen8.jpg';
import img9 from './images/imagen9.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]; // Array of images

function NewCarrousel() {
  return (
    <div className="container-fluid carousel-container">
      <h1 className="carousel-title">Nosotros</h1>
      <Carousel
        indicators={false} // Hide default indicators
        controls={false}   // Hide default controls
        interval={5000}    // Set the transition interval (5 seconds)
        pause="hover"      // Pause on hover
        fade                // Fade transition
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default NewCarrousel;
