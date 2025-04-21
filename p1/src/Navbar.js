import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>ReserRestaurante</h2>
      <div>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/reserva" style={styles.link}>Reservar</Link>
      </div>
    </nav>
  );
};

const styles = {
    navbar: {
        backgroundColor: '#3ccf94', // verde oscuro
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
