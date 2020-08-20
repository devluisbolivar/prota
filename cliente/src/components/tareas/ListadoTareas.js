import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>;
  }

  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir colores", estado: false },
    { nombre: "Elegir plataforma de pago", estado: false },
    { nombre: "Elegir hosting", estado: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li cla="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => (
            <Tarea key={tarea.nombre} tarea={tarea} />
          ))
        )}
      </ul>
      <button
        type="button"
        className="btn btn-blanco"
        onClick={() => eliminarProyecto(proyectoActual.id)}
      >
        Eliminar proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
