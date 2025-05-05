import React, { useState } from "react";

function Reserva() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [personas, setPersonas] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaReserva = { nombre, fecha, personas };
    const reservasExistentes = JSON.parse(localStorage.getItem("reservas")) || [];
    reservasExistentes.push(nuevaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservasExistentes));
    alert("Reserva guardada con éxito.");
    setNombre("");
    setFecha("");
    setPersonas(1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reservar Mesa</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
        <input type="number" min="1" value={personas} onChange={(e) => setPersonas(e.target.value)} required />
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default Reserva;
