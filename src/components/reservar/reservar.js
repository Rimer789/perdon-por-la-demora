import React, { useState } from "react";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datetime/css/react-datetime.css';
import '../espacio/espacio.css'


const Reservar = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [ci, setCI] = useState('');
    const [rol, setRol] = useState('');
    const [celular, setCelular] = useState('');
    const [correo, setCorreo] = useState('');
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [tipo, setTipo] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
  
    const handleStartDateChange = (date) => {
      setStartDate(date);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
    };
    const enviarDatos = (e) => {
        e.preventDefault();
        //aqui falta ruta para enviar los datos
      }
    return(
        <div>
                    <form className="formulario" onSubmit={enviarDatos}>
                      <h2>Reservar</h2>
                      {/* <label htmlFor="nombre">Nombre:</label> */}
                      <input type="text" id="nombre" placeholder="Nombres" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

                      {/* <label htmlFor="apellidos">Apellidos:</label> */}
                      <input type="text" id="apellidos" placeholder="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required />

                      {/* <label htmlFor="ci">CI:</label> */}
                      <input type="text" id="ci" placeholder="CI" value={ci} onChange={(e) => setCI(e.target.value)} required />

                      {/* <label htmlFor="rol">Rol:</label> */}
                      <input type="text" id="rol" placeholder="Rol" value={rol} onChange={(e) => setRol(e.target.value)} required />

                      {/* <label htmlFor="celular">Celular:</label> */}
                      <input type="text" id="celular" placeholder="Celular" value={celular} onChange={(e) => setCelular(e.target.value)} required />

                      {/* <label htmlFor="correo">Correo:</label> */}
                      <input type="email" id="correo" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />

                      {/* <label htmlFor="placa">Placa:</label> */}
                      <input type="text" id="placa" placeholder="Placa" value={placa} onChange={(e) => setPlaca(e.target.value)} required />

                      {/* <label htmlFor="marca">Marca:</label> */}
                      <input type="text" id="marca" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} required />

                      {/* <label htmlFor="modelo">Modelo:</label> */}
                      <input type="text" id="modelo" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} required />

                      <label htmlFor="tipo">Tipo de auto:</label>
                      <select className="Opciones" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                        <option value="">Seleccionar tipo...</option>
                        <option value="Sedán">Deportivo</option>
                        <option value="SUV">Familiar</option>
                        <option value="Pickup">suzuki</option>
                        <option value="Deportivo">otro</option>
                      </select>
                      <label>hora inicio:</label>
                      <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        minDate={new Date()}
                        minTime={new Date().getHours() + ":" + new Date().getMinutes()}
                        maxTime="23:59"
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                      <br />
                      <label>hora fin:</label>
                      <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        minDate={startDate}
                        minTime={new Date().getHours() + ":" + new Date().getMinutes()}
                        maxTime="23:59"
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                      <button type="submit">Reservar</button>
                    </form>
                  </div>
    );
}
export default Reservar;