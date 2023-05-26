import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

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
        setUserRole(result.tipo);
        navigate('/'); // Navigate to the desired route after successful login
      } else {
        console.log('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleLogin} className={styles.container}>
      <div className={styles['input-container']}>
        <div className={styles['input-content']}>
          <div className={styles['input-dist']}>
            <div className={styles['input-type']}>
              <input
                className={styles['input-is']}
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={styles['input-is']}
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Iniciar sesión</button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/registro">Register</Link>
    </form>
  );
};

export default Login;
