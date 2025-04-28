import React, { useState } from 'react';

const Reserva = () => {
  const [form, setForm] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    personas: 1
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva realizada:\nNombre: ${form.nombre}\nFecha: ${form.fecha}\nHora: ${form.hora}\nPersonas: ${form.personas}`);
    // Aquí podrías enviar los datos a un backend
  };

  return (
    <div style={styles.container}>
      <h2>Reserva tu mesa</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Nombre:
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <label>Fecha:
          <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
        </label>
        <label>Hora:
          <input type="time" name="hora" value={form.hora} onChange={handleChange} required />
        </label>
        <label>Número de personas:
          <input type="number" name="personas" value={form.personas} onChange={handleChange} min="1" required />
        </label>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }
};

export default Reserva;
