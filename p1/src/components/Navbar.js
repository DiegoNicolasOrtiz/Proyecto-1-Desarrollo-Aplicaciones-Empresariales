import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#3ccf94", padding: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ fontWeight: "bold", color: "white", fontSize: "18px" }}>
        ReserRestaurante
      </div>
      <div>
        <Link to="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Inicio</Link>
        <Link to="/tutorial" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Tutorial</Link>
        <Link to="/reserva" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Reservar</Link>
        <Link to="/registro-empleado" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Soy un Empleado</Link>
        <Link to="/contactanos" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Contáctanos</Link>
        <Link to="/mis-reservas" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Mis Reservas</Link>
      </div>
    </nav>
  );
}

export default Navbar;
