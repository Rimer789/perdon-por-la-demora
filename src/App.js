import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [isAccepted, setIsAccepted] = useState(null);

  const handleYesClick = () => {
    window.open('https://wa.me/59167566295?text=si%20iremos :) %20', '_blank');
    setIsAccepted(true);
  };

  const handleNoMouseOver = () => {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    const noBtn = document.querySelector('#noBtn');
    noBtn.style.setProperty('top', `${randomY}%`);
    noBtn.style.setProperty('left', `${randomX}%`);
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
  };

  

  return (
    <div className="contenedor">
      <br />
      <br />
      <p>si vamos ir al cine nove? -_- </p>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button id="yesBtn" onClick={handleYesClick}>
        Si
      </button>
      <button id="noBtn" onMouseOver={handleNoMouseOver}>
        No
      </button>
      {isAccepted !== null && (
        <p>Tu respuesta fue: {isAccepted ? 'Sí' : 'No'}</p>
      )}
    </div>
  );
};

export default App;
