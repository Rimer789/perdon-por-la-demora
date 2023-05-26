import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Sidebar from './components/navegacion/sidebar.js';
import Panel from './components/panelprincipal/panel.js';
import Espacios from './components/espacio/espacio.js';
import Login from './components/login/login.js';
import Register from './components/registro/Register.js';
import Acceso from './components/accesos/acceso.js';
import Cliente from './components/clientes/cliente.js';
import Cobro from './components/cobros/cobro.js';
import Deuda from './components/deudas/deuda.js';
import Guardia from './components/guardias/guardia.js';
import Reclamo from './components/reclamos/reclamo.js';
import Reporte from './components/reportes/reporte.js';
import Vehiculo from './components/vehiculos/vehiculo.js';
import Misvehiculos from './components/misVehiculos/misvehiculos.js';
import Historial from './components/historial/historial.js';
import IngresoSalida from './components/ingresoSalida/ingresosalida.js';
import Reservar from './components/reservar/reservar.js';
import Turno from './components/turno/turno.js'

const App = () => {
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Routes>
        {userRole !== null ? (
          <Route
            path="/"
            element={
              <Sidebar userRole={userRole}>
                <Outlet /> {/* Renderiza las rutas secundarias */}
              </Sidebar>
            }
          >
            <Route path="/" element={<Panel />} />
            <Route path="/espacios" element={<Espacios />} />
            <Route path="/acceso" element={<Acceso />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/cobro" element={<Cobro />} />
            <Route path="/deuda" element={<Deuda />} />
            <Route path="/guardia" element={<Guardia />} />
            <Route path="/reclamo" element={<Reclamo />} />
            <Route path="/reporte" element={<Reporte />} />
            <Route path="/vehiculo" element={<Vehiculo />} />
            <Route path="/misvehiculos" element={<Misvehiculos />} />
            <Route path="/turnos" element={<Turno />} />
            <Route path="/ingresosalida" element={<IngresoSalida />} />
            <Route path="/reservar" element={<Reservar />} />
            <Route path="/historial" element={<Historial />} />
          </Route>
        ) : (
          <Route path="/" element={<Login setUserRole={setUserRole} />} />
        )}
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
