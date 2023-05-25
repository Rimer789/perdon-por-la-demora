import React, { useState } from 'react';
import styles from './register.module.css';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Aquí puedes enviar los datos a un servidor o realizar cualquier otra acción
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles['input-container']}>
        <div className={styles['input-content']}>
          <div className={styles['input-dist']}>
            <div className={styles['input-type']}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button type="submit">Registrarse</button>
              
            </div>
            < Link  to = "/login"  type = "button"  className = "btn btn-secundaria col-4 m-1" > Cancelar </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;