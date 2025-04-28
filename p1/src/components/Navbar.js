import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>ReserRestaurante</h2>
      <div>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/tutorial" style={styles.link}>Tutorial</Link>
        <Link to="/reserva" style={styles.link}>Reservar</Link>
        <Link to="/registro-empleado" style={styles.link}>Soy un Empleado</Link>
        <Link to="/contactanos" style={styles.link}>Contáctanos</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#3ccf94',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderBottom: '4px solid #3ccf94',
  },
  logo: {
    color: 'white',
    margin: 0,
  },
  link: {
    color: 'white',
    marginLeft: '1.5rem',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Navbar;
