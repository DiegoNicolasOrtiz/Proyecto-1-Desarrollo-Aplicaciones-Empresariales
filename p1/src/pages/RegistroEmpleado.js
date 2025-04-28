import React, { useState } from 'react';

const RegistroEmpleado = () => {
  const [form, setForm] = useState({
    nombre: '',
    correoEmpresa: '',
    empresa: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registro realizado:\nNombre: ${form.nombre}\nCorreo: ${form.correoEmpresa}\nEmpresa: ${form.empresa}`);
    // Aquí podrías enviar los datos a una base de datos
  };

  return (
    <div style={styles.container}>
      <h2>Registro de empleados para reuniones</h2>
      <p>Regístrate con tu correo empresarial para reservar salas especiales en nuestros restaurantes.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Nombre:
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <label>Correo de empresa:
          <input type="email" name="correoEmpresa" value={form.correoEmpresa} onChange={handleChange} required />
        </label>
        <label>Nombre de la empresa:
          <input type="text" name="empresa" value={form.empresa} onChange={handleChange} required />
        </label>
        <button type="submit">Registrarme</button>
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
    marginTop: '1rem',
  }
};

export default RegistroEmpleado;
