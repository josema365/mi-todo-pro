import React, { useState, useEffect } from 'react';
import FormularioTarea from './componentes/FormularioTarea';
import ListaTareas from './componentes/ListaTareas';

function App() {
  // 1. Inicializar el estado leyendo las tareas guardadas previamente en el navegador
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas_pro');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  // 2. Cada vez que la lista de tareas cambie, se guarda automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem('tareas_pro', JSON.stringify(tareas));
  }, [tareas]);

  // 3. Función para agregar una nueva tarea a la lista
  const agregarTarea = (nuevaTarea) => {
    setTareas([nuevaTarea, ...tareas]);
  };

  // 4. Función para marcar como completada (o deshacer) una tarea
  const cambiarEstado = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  // 5. Función para eliminar definitivamente una tarea de la lista
  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasFiltradas);
  };

  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '40px 20px',
      fontFamily: 'sans-serif',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#1e293b',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '24px',
          marginBottom: '8px',
          fontWeight: 'bold',
          color: '#f8fafc'
        }}>
          Gestor de Tareas Pro
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '14px',
          color: '#94a3b8',
          marginBottom: '24px'
        }}>
          Desarrollado por José Manuel Huanca
        </p>

        {/* Pasamos la función agregarTarea al componente formulario */}
        <FormularioTarea agregarTarea={agregarTarea} />

        {/* Pasamos los datos y las funciones de control al componente de la lista */}
        <ListaTareas 
          tareas={tareas} 
          cambiarEstado={cambiarEstado} 
          eliminarTarea={eliminarTarea} 
        />
      </div>
    </div>
  );
}

export default App;