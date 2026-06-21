import React, { useState } from 'react';

function FormularioTarea({ agregarTarea }) {
  const [texto, setTexto] = useState('');
  const [prioridad, setPrioridad] = useState('Baja');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!texto.trim()) return; // Si está vacío, no hace nada

    // Le enviamos la nueva tarea al componente padre (App.jsx)
    agregarTarea({
      id: Date.now(),
      texto: texto,
      prioridad: prioridad,
      completada: false
    });

    // Limpiamos el input después de agregar
    setTexto('');
    setPrioridad('Baja');
  };

  return (
    <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', width: '100%' }}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #334155',
          backgroundColor: '#1e293b',
          color: 'white',
          fontSize: '16px',
          outline: 'none'
        }}
      />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
        <label style={{ fontSize: '14px', color: '#94a3b8' }}>Prioridad:</label>
        <select
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '6px',
            backgroundColor: '#1e293b',
            color: 'white',
            border: '1px solid #334155',
            cursor: 'pointer'
          }}
        >
          <option value="Baja">🟢 Baja</option>
          <option value="Media">🟡 Media</option>
          <option value="Alta">🔴 Alta</option>
        </select>

        <button
          type="submit"
          style={{
            padding: '8px 16px',
            borderRadius: '6px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
        >
          ➕ Agregar
        </button>
      </div>
    </form>
  );
}

export default FormularioTarea;