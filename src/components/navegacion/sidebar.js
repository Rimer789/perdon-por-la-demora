import React from 'react';
import { FaTaxi, FaGripHorizontal } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './sidebar.module.css';

const Sidebar = ({ children, userRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };


  const menuItems = [
    {
      path: '/',
      name: 'Panel Principal',
      icon: <FaTaxi />,
    },
    {
      path: '/espacios',
      name: 'Espacios',
      icon: <FaGripHorizontal />,
    },

    {
      path: '/acceso',
      name: 'Accesos',
      role: [1], // Mostrar solo para rol 1
    },
    {
      path: '/cliente',
      name: 'Clientes',
      role: [1], // Mostrar solo para rol 1
    },
    {
      path: '/cobro',
      name: 'Cobros',
      role: [1], // Mostrar solo para rol 1
    },
    {
      path: '/deuda',
      name: 'Deudas',
      role: [1], // Mostrar solo para rol 1
    },
    {
      path: '/guardia',
      name: 'Guardias',
      role: [1], // Mostrar solo para rol 1
    },
    {
      path: '/reclamo',
      name: 'Reclamos',
      role: [1], // Mostrar solo para rol 1
    },
    {
      path: '/reporte',
      name: 'Reportes',
      role: [1], // Mostrar solo para rol 1
    },
    {
      path: '/vehiculo',
      name: 'Vehiculos',
      role: [1], // Mostrar solo para rol 1
    }, {
      path: '/misvehiculos',
      name: 'Mis Vehiculos',
    },
    {
      path: '/ingresosalida',
      name: 'Ingresos y Salidas',
    },
    {
      path: '/reservar',
      name: 'Reservar',
    },
    {
      path: '/turnos',
      name: 'Turnos',
    },
    {
      path: '/historial',
      name: 'Historial',
      role: [1], // Mostrar solo para rol 1
    },
  ];

  const filteredMenuItems = menuItems.filter((item) => {
    if (userRole === 1) {
      return true;
    } else if (userRole === 2) {
      return item.path === '/' || item.path === '/espacios' || item.path === '/turnos' || item.path === '/ingresosalida' || item.path === '/historial';
    } else if (userRole === 3) {
      return item.path === '/espacios' || item.path === '/reservar' || item.path === '/reclamos' || item.path === '/misvehiculos';
    } else {
      return false;
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className="top_section"></div>
        {filteredMenuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
         <button className="logout_button" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
