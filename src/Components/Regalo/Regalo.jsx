import React, { useState } from "react";
import "./Regalo.css";
import { IconContext } from "react-icons";
import { GiPresent } from "react-icons/gi";
import Notification from "./Notification"; // Import the Notification component

function NewRegalo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotificationMessage('Copiado al portapapeles');
    }).catch(() => {
      setNotificationMessage('Failed to copy text');
    });
  };

  return (
    <div className="container-fluid Regalo">
      <div className="icono-regalo">
        <IconContext.Provider
          value={{ color: "white", className: "present", size: "50px" }}
        >
          <div>
            <GiPresent />
          </div>
        </IconContext.Provider>
      </div>
      <div className="titulo-regalo">
        <h1>Regalos</h1>
      </div>
      <div className="info-regalo">
        <h3>Lo mas importante para nosotros es tu precencia y amor,</h3>
        <h3>sin embargo si deseas colaborar con nuestra luna de miel</h3>
        <h3>facilitamos una cuenta donde puedes hacerlo</h3>
      </div>
      <div>
        <button className="datos-regalo" onClick={openModal}>
          Ver datos bancarios
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-fields">
              <div className="field">
                <strong>Nombre:</strong> Julieta Andjel
                <button onClick={() => copyToClipboard("Julieta Andjel")}>
                  Copiar
                </button>
              </div>
              <div className="field">
                <strong>CVU:</strong> 0000003100093872067334
                <button
                  onClick={() => copyToClipboard("0000003100093872067334")}
                >
                  Copiar
                </button>
              </div>
              <div className="field">
                <strong>Alias:</strong> juliyedgar
                <button onClick={() => copyToClipboard("juliyedgar")}>
                  Copiar
                </button>
              </div>
              <div className="field">
                <strong>CUIT/CUIL:</strong> 27377253227
                <button onClick={() => copyToClipboard("27377253227")}>
                  Copiar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Render Notification */}
      {notificationMessage && (
        <Notification
          message={notificationMessage}
          onClose={() => setNotificationMessage('')}
        />
      )}
    </div>
  );
}

export default NewRegalo;
