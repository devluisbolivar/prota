import React, { useReducer } from "react";
import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import { TAREAS_PROYECTO, AGREGAR_TAREA } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir plataforma de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir herramienta", estado: true, proyectoId: 3 },
      { nombre: "Elegir lenguaje", estado: false, proyectoId: 2 },
      { nombre: "Elegir meotodo de pago", estado: false, proyectoId: 4 },
      { nombre: "Elegir bibliotecas", estado: true, proyectoId: 3 },
    ],
    tareasProyecto: null,
  };
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        obtenerTareas,
        agregarTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
