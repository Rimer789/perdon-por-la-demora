import React, { useState, useEffect } from 'react';

const Vehiculo = () => {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    generarVehiculos();
  }, []);

  const generarVehiculos = () => {
    const listaVehiculos = [];

    const nombres = [
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

    for (let i = 1; i <= 10; i++) {
      const vehiculo = {
        id: i,
        placa: `ABC${i}`,
        dueno: nombres[i - 1],
        duracionReserva: obtenerDuracionReserva(),
      };
      listaVehiculos.push(vehiculo);
    }

    setVehiculos(listaVehiculos);
  };

  const obtenerDuracionReserva = () => {
    const duracionDias = Math.floor(Math.random() * 7) + 1;
    return `${duracionDias} días`;
  };

  return (
    <div>
      <h1>Vehículos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Placa</th>
            <th>Dueño</th>
            <th>Duración de la Reserva</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo) => (
            <tr key={vehiculo.id}>
              <td>{vehiculo.id}</td>
              <td>{vehiculo.placa}</td>
              <td>{vehiculo.dueno}</td>
              <td>{vehiculo.duracionReserva}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vehiculo;
