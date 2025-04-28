import React from 'react';

const Tutorial = () => {
  return (
    <div style={styles.container}>
      <h2>¿Cómo hacer una reserva?</h2>
      <ol style={styles.list}>
        <li>Ingresa a la sección "Reservar" desde la barra de navegación.</li>
        <li>Completa tus datos: nombre, fecha, hora y cantidad de personas.</li>
        <li>Confirma tu reserva haciendo clic en "Reservar".</li>
        <li>¡Listo! Recibirás la confirmación en pantalla.</li>
      </ol>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  list: {
    textAlign: 'left',
    marginTop: '1rem',
  }
};

export default Tutorial;
