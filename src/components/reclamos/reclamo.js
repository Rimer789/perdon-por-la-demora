import React, { useState, useEffect } from 'react';

const Reclamo = () => {
  const [reclamos, setReclamos] = useState([]);

  useEffect(() => {
    generarReclamos();
  }, []);

  const generarReclamos = () => {
    const listaReclamos = [];

    const nombresClientes = [
      'Juan',
      'María',
      'Carlos',
      'Ana',
      'Pedro',
      'Luisa',
      'Andrés',
      'Laura',
      'Miguel',
      'Lucía',
    ];

    const placaAutos = ['ABC1', 'ABC3', 'ABC5', 'ABC7', 'ABC9'];

    const tiposReclamo = [
      'Reclamo del parqueo',
      'Reclamo del guardia',
      'Reclamo del estado del parqueo',
      'Reclamo de seguridad',
      'Reclamo de servicio',
    ];

    for (let i = 1; i <= 5; i++) {
      const reclamo = {
        id: i,
        cliente: nombresClientes[i - 1],
        placaAuto: placaAutos[i - 1],
        descripcion: tiposReclamo[i - 1],
      };
      listaReclamos.push(reclamo);
    }

    setReclamos(listaReclamos);
  };

  return (
    <div>
      <h1>Reclamos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Placa del Auto</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {reclamos.map((reclamo) => (
            <tr key={reclamo.id}>
              <td>{reclamo.id}</td>
              <td>{reclamo.cliente}</td>
              <td>{reclamo.placaAuto}</td>
              <td>{reclamo.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reclamo;

