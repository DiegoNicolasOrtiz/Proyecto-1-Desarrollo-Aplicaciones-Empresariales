import React from 'react';

const Contactanos = () => {
  return (
    <div style={styles.container}>
      <h2>Contáctanos</h2>
      <p>Podés seguirnos o escribirnos en nuestras redes sociales:</p>
      <ul style={styles.list}>
        <li>📸 Instagram: @ReserRestaurante_Oficial</li>
        <li>📘 Facebook: ReserRestaurante Community</li>
        <li>🐦 Twitter: @ReserRestaurante</li>
        <li>💼 LinkedIn: ReserRestaurante Corporativo</li>
        <li>📧 Correo: contacto@reserrestaurante.fake</li>
      </ul>
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
    listStyleType: 'none',
    padding: 0,
    marginTop: '1.5rem',
    textAlign: 'left',
    lineHeight: '2',
    fontSize: '1.1rem',
  }
};

export default Contactanos;
