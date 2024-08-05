// Notification.js
import React, { useState, useEffect } from 'react';
import './Notification.css'; // Import CSS for the notification

const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 2000); // Hide notification after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    visible && (
      <div className="notification">
        {message}
      </div>
    )
  );
};

export default Notification;
