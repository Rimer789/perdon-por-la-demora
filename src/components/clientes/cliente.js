import React, { useState } from 'react';

const Cliente = () => {
  // Datos de ejemplo para la tabla
  const [clientes] = useState([
    {
      id: 1,
      nombre: 'John Doe',
      ci: '1234567890',
      correo: 'johndoe@example.com',
      tipo: 'docente',
    },
    {
      id: 2,
      nombre: 'Jane Smith',
      ci: '0987654321',
      correo: 'janesmith@example.com',
      tipo: 'estudiante',
    },
    {
      id: 3,
      nombre: 'Admin User',
      ci: '9876543210',
      correo: 'admin@example.com',
      tipo: 'administrador',
    },
  ]);

  // Función para editar un cliente
  const editarCliente = (id) => {
    // Aquí puedes implementar la lógica para editar un cliente según su ID
    console.log('Editar cliente:', id);
  };

  // Función para eliminar un cliente
  const eliminarCliente = (id) => {
    // Aquí puedes implementar la lógica para eliminar un cliente según su ID
    console.log('Eliminar cliente:', id);
  };

  return (
    <div>
      <h1>Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>CI</th>
            <th>Correo</th>
            <th>Tipo de Cliente</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.ci}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.tipo}</td>
              <td>
                <button onClick={() => editarCliente(cliente.id)}>Editar</button>
                <button onClick={() => eliminarCliente(cliente.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cliente;
