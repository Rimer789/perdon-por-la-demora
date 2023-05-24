import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      correo: email,
      clave: password
    };

    try {
      const response = await fetch('http://localhost/proyectoParqueo/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Inicio de sesión exitoso:', result);
        // Aquí guardas el rol del usuario en el estado del componente padre
        setUserRole(result.tipo);
      } else {
        console.log('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <div> 
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
    </form>
    <Link to="/registro">Register</Link>
    </div>
  );
};

export default Login;
