import React, { useState, useEffect } from 'react';
import './App.css';
import vilmaImage from './vilma.jpeg';
import backImage from './back.jpeg';

const App = () => {
  const [isAccepted, setIsAccepted] = useState(null);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [backgroundImage, setBackgroundImage] = useState(vilmaImage);

  const handleYesClick = () => {
    window.open('https://wa.me/59167566295?text=si%20iremos%20%3A)%20', '_blank');
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
      if (window.innerWidth <= 768) { // Cambia el ancho máximo según tus necesidades
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
      <br />
      <br />
      <p>seras mi novia quieras o no </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button id="yesBtn" onClick={handleYesClick}>
        Si
      </button>
      <button id="noBtn" onTouchStart={handleNoButtonClick} onClick={handleNoButtonClick} style={noButtonStyle}>
        No
      </button>
      {isAccepted !== null && <p> no habia de otra </p>}
    </div>
  );
};

export default App;
