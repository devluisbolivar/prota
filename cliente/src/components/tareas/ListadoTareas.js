import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { tareasProyecto } = tareasContext;

  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>;
  }

  const [proyectoActual] = proyecto;

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li cla="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
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
