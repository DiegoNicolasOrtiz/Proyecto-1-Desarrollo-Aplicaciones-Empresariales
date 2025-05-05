import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reserva from "./pages/Reserva";
import Tutorial from "./pages/Tutorial";
import RegistroEmpleado from "./pages/RegistroEmpleado";
import Contactanos from "./pages/Contactanos";
import MisReservas from "./pages/MisReservas";

function App() {
  return (
    <Router>
      <div style={{ border: '8px solid #3ccf94', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/registro-empleado" element={<RegistroEmpleado />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/mis-reservas" element={<MisReservas />} />
          </Routes>
        </div>
        <footer style={{ backgroundColor: '#3ccf94', color: 'white', padding: '10px', textAlign: 'center' }}>
          contacto@reserrestaurante.fake | +569123456789
        </footer>
      </div>
    </Router>
  );
}

export default App;
