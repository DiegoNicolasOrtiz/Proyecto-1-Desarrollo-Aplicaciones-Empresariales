import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Reserva from './Reserva';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App" style={styles.app}>
        <Navbar />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserva" element={<Reserva />} />
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
  },
  main: {
    flex: 1,
    paddingBottom: '2rem',
  },
  footer: {
    backgroundColor: '#3ccf94',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
  }
};

export default App;
