import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Bienvenido a ReserRestaurante</h1>
      <p>
        La forma más fácil y rápida de reservar tu mesa en nuestros restaurantes.
      </p>
      <p>
        Explora nuestra red de locales y asegura tu lugar con un par de clics.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  }
};

export default Home;
