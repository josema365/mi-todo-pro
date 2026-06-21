import React from 'react';

function ListaTareas({ tareas, cambiarEstado, eliminarTarea }) {
  // Función para definir el color del borde según la prioridad de la tarea
  const obtenerColorPrioridad = (prioridad) => {
    if (prioridad === 'Alta') return '#ef4444'; // Rojo
    if (prioridad === 'Media') return '#eab308'; // Amarillo
    return '#22c55e'; // Verde
  };

  if (tareas.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#64748b', marginTop: '20px', fontStyle: 'italic' }}>
        No hay tareas pendientes. ¡Buen trabajo! 
      </p>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
      {tareas.map((tarea) => (
        <div
          key={tarea.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px',
            backgroundColor: '#1e293b',
            borderRadius: '8px',
            borderLeft: `5px solid ${obtenerColorPrioridad(tarea.prioridad)}`,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <span
            style={{
              color: tarea.completada ? '#64748b' : 'white',
              textDecoration: tarea.completada ? 'line-through' : 'none',
              fontSize: '16px',
              flex: 1,
              paddingRight: '10px',
              wordBreak: 'break-word'
            }}
          >
            {tarea.texto}
          </span>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => cambiarEstado(tarea.id)}
              style={{
                backgroundColor: tarea.completada ? '#475569' : '#16a34a',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {tarea.completada ? 'Deshacer' : '✓'}
            </button>
            <button
              onClick={() => eliminarTarea(tarea.id)}
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              🗑
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaTareas;