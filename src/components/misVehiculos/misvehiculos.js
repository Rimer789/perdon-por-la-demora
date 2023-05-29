import React, { useState } from 'react';

const MisVehiculos = () => {
  const [vehiculos, setVehiculos] = useState([
    {
      id: 1,
      placa: 'ABC123',
      tipo: 'Sedán',
      fechaRegistro: '2023-05-01',
    },
    {
      id: 2,
      placa: 'DEF456',
      tipo: 'SUV',
      fechaRegistro: '2023-04-15',
    },
    {
      id: 3,
      placa: 'GHI789',
      tipo: 'Camioneta',
      fechaRegistro: '2023-05-10',
    },
    // Agrega más objetos de vehículos según sea necesario
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedPlaca, setEditedPlaca] = useState('');
  const [editedTipo, setEditedTipo] = useState('');
  const [editedFechaRegistro, setEditedFechaRegistro] = useState('');

  const handleEdit = (vehiculoId) => {
    const vehiculo = vehiculos.find((v) => v.id === vehiculoId);
    if (vehiculo) {
      setEditingId(vehiculoId);
      setEditedPlaca(vehiculo.placa);
      setEditedTipo(vehiculo.tipo);
      setEditedFechaRegistro(vehiculo.fechaRegistro);
    }
  };

  const handleSave = (vehiculoId) => {
    const updatedVehiculos = vehiculos.map((vehiculo) => {
      if (vehiculo.id === vehiculoId) {
        return {
          ...vehiculo,
          placa: editedPlaca,
          tipo: editedTipo,
          fechaRegistro: editedFechaRegistro,
        };
      }
      return vehiculo;
    });

    setVehiculos(updatedVehiculos);
    setEditingId(null);
    setEditedPlaca('');
    setEditedTipo('');
    setEditedFechaRegistro('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedPlaca('');
    setEditedTipo('');
    setEditedFechaRegistro('');
  };

  const handleAdd = () => {
    const newVehiculo = {
      id: vehiculos.length + 1,
      placa: editedPlaca,
      tipo: editedTipo,
      fechaRegistro: editedFechaRegistro,
    };

    setVehiculos([...vehiculos, newVehiculo]);
    setEditedPlaca('');
    setEditedTipo('');
    setEditedFechaRegistro('');
  };

  return (
    <div>
      <h1>Mis Vehículos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Placa del Vehículo</th>
            <th>Tipo del Vehículo</th>
            <th>Fecha de Registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo) => (
            <tr key={vehiculo.id}>
              <td>{vehiculo.id}</td>
              <td>
                {editingId === vehiculo.id ? (
                  <input
                    type="text"
                    value={editedPlaca}
                    onChange={(e) => setEditedPlaca(e.target.value)}
                  />
                ) : (
                  vehiculo.placa
                )}
              </td>
              <td>
                {editingId === vehiculo.id ? (
                  <input
                    type="text"
                    value={editedTipo}
                    onChange={(e) => setEditedTipo(e.target.value)}
                  />
                ) : (
                  vehiculo.tipo
                )}
              </td>
              <td>
                {editingId === vehiculo.id ? (
                  <input
                    type="text"
                    value={editedFechaRegistro}
                    onChange={(e) => setEditedFechaRegistro(e.target.value)}
                  />
                ) : (
                  vehiculo.fechaRegistro
                )}
              </td>
              <td>
                {editingId === vehiculo.id ? (
                  <>
                    <button onClick={() => handleSave(vehiculo.id)}>Guardar</button>
                    <button onClick={handleCancel}>Cancelar</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(vehiculo.id)}>Editar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Agregar Vehículo</h2>
      <div>
        <label>
          Placa:
          <input
            type="text"
            value={editedPlaca}
            onChange={(e) => setEditedPlaca(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Tipo:
          <input
            type="text"
            value={editedTipo}
            onChange={(e) => setEditedTipo(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Fecha de Registro:
          <input
            type="text"
            value={editedFechaRegistro}
            onChange={(e) => setEditedFechaRegistro(e.target.value)}
          />
        </label>
        <br/>
        <button onClick={handleAdd}>Agregar</button>
      </div>
    </div>
  );
};

export default MisVehiculos;
