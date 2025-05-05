import React, { useState, useEffect } from "react";

function MisReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("reservas")) || [];
    setReservas(datos);
  }, []);

  const eliminarReserva = (index) => {
    const nuevas = [...reservas];
    nuevas.splice(index, 1);
    localStorage.setItem("reservas", JSON.stringify(nuevas));
    setReservas(nuevas);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mis Reservas</h2>
      {reservas.length === 0 ? (
        <p>No tienes reservas aún.</p>
      ) : (
        <ul>
          {reservas.map((reserva, i) => (
            <li key={i}>
              {reserva.nombre} - {reserva.fecha} - {reserva.personas} personas
              <button onClick={() => eliminarReserva(i)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MisReservas;
