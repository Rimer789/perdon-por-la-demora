import React, { useState, useEffect } from 'react';
import './App.css';
import vilmaImage from './gabi.jpg';
import backImage from './back.jpeg';

const App = () => {
  const [isAccepted, setIsAccepted] = useState(false); // Controla si se ha aceptado
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [backgroundImage, setBackgroundImage] = useState(vilmaImage);

  const handleYesClick = () => {
    // Abrir enlace de WhatsApp
    window.open('https://wa.me/59167566295?text=si%20vamos%20%3A)%20', '_blank');
    // Limpiar todo y mostrar mensaje "Ya lo sabía"
    setIsAccepted(true);
  };

  const moveNoButtonRandomly = () => {
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;
    setNoButtonStyle({
      top: `${randomY}%`,
      left: `${randomX}%`,
      transform: `translate(-${randomX}%, -${randomY}%)`,
    });
  };

  const handleNoButtonClick = () => {
    moveNoButtonRandomly();
    setBackgroundImage(backImage);
    setTimeout(() => {
      setBackgroundImage(vilmaImage);
    }, 1500);
  };

  useEffect(() => {
    moveNoButtonRandomly();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        document.querySelector('.contenedor').classList.add('mobile-center');
      } else {
        document.querySelector('.contenedor').classList.remove('mobile-center');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="contenedor" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {isAccepted ? (
        <h1>Ya lo sabía no abia de otra 😅 😉 solo dime cuando 🙂</h1>
      ) : (
        <>
          <br />
          <br />
          <h1>salimos a ver una peli pa el cine🍿🥤🎮</h1>
          <br />
          <br />
          <h1>aver dime que no😑</h1>
          <br />
          <br />
          <br />
          <br />
          <button id="yesBtn" onClick={handleYesClick}>
            Si
          </button>
          <button
            id="noBtn"
            onTouchStart={handleNoButtonClick}
            onClick={handleNoButtonClick}
            style={noButtonStyle}
          >
            No
          </button>
        </>
      )}
    </div>
  );
};

export default App;
