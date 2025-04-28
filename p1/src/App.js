import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reserva from './pages/Reserva';
import Tutorial from './pages/Tutorial';
import RegistroEmpleado from './pages/RegistroEmpleado';
import Contactanos from './pages/Contactanos';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App" style={styles.app}>
        <Navbar />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="/registro-empleado" element={<RegistroEmpleado />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Routes>
        </main>
        <footer style={styles.footer}>
          <p>📧 contacto@reserrestaurante.fake — 📞 123456789</p>
        </footer>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    border: '5px solid #3ccf94',
    boxSizing: 'border-box',
  },
  main: {
    flex: 1,
    padding: '2rem',
  },
  footer: {
    backgroundColor: '#3ccf94',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    borderTop: '4px solid #3ccf94',
  }
};

export default App;
