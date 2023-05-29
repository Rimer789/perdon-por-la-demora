import React, { useState, useEffect } from 'react';

const IngresoSalida = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    generarRegistros();
  }, []);

  const generarRegistros = () => {
    const registrosEntrada = [];
    const registrosSalida = [];

    const fechaActual = new Date();

    // Generar 10 registros de entrada en días anteriores al día actual
    for (let i = 1; i <= 10; i++) {
      const fecha = new Date(fechaActual);
      fecha.setDate(fecha.getDate() - i);

      const registro = {
        id: i,
        placa: `ABC${i}`,
        fecha: fecha.toLocaleDateString(),
        horaEntrada: obtenerHoraAleatoria(),
        horaSalida: '',
      };
      registrosEntrada.push(registro);
    }

    // Generar 5 registros de salida solo para los últimos elementos
    for (let i = 6; i <= 10; i++) {
      const fecha = new Date(fechaActual);
      fecha.setDate(fecha.getDate() - i);

      const registro = {
        id: i,
        placa: `DEF${i}`,
        fecha: fecha.toLocaleDateString(),
        horaEntrada: obtenerHoraAleatoria(),
        horaSalida: obtenerHoraAleatoria(),
      };
      registrosSalida.push(registro);
    }

    // Ordenar registros por fecha y hora
    const todosLosRegistros = [...registrosEntrada, ...registrosSalida];
    const registrosOrdenados = todosLosRegistros.sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);

      if (fechaA < fechaB) return -1;
      if (fechaA > fechaB) return 1;

      const horaA = obtenerHoraEnMinutos(a.horaEntrada || a.horaSalida);
      const horaB = obtenerHoraEnMinutos(b.horaEntrada || b.horaSalida);

      if (horaA < horaB) return -1;
      if (horaA > horaB) return 1;

      return 0;
    });

    setRegistros(registrosOrdenados);
  };

  const obtenerHoraAleatoria = () => {
    const hora = Math.floor(Math.random() * 24);
    const minutos = Math.floor(Math.random() * 60);
    return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
  };

  const obtenerHoraEnMinutos = (hora) => {
    const [horaStr, minutosStr] = hora.split(':');
    const horaNum = parseInt(horaStr, 10);
    const minutosNum = parseInt(minutosStr, 10);
    return horaNum * 60 + minutosNum;
  };

  return (
    <div>
      <h1>Ingresos y Salidas de Autos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Placa</th>
            <th>Fecha</th>
            <th>Hora de Entrada</th>
            <th>Hora de Salida</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.id}</td>
              <td>{registro.placa}</td>
              <td>{registro.fecha}</td>
              <td>{registro.horaEntrada}</td>
              <td>{registro.horaSalida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngresoSalida;

