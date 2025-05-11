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
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#3ccf94", color: "white" }}>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Nombre</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Fecha</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Personas</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva, i) => (
              <tr key={i}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{reserva.nombre}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{reserva.fecha}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{reserva.personas}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <button onClick={() => eliminarReserva(i)} style={{ backgroundColor: "#e74c3c", color: "white", border: "none", padding: "5px 10px" }}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MisReservas;
