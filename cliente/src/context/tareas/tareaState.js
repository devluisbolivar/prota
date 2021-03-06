import React, { useReducer } from "react";
import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import { v4 as uuidv4 } from "uuid";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir colores", estado: false, proyectoId: 2 },
      {
        id: 3,
        nombre: "Elegir plataforma de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 4, nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      { id: 5, nombre: "Elegir herramienta", estado: true, proyectoId: 3 },
      { id: 6, nombre: "Elegir lenguaje", estado: false, proyectoId: 2 },
      { id: 7, nombre: "Elegir meotodo de pago", estado: false, proyectoId: 4 },
      { id: 8, nombre: "Elegir bibliotecas", estado: true, proyectoId: 3 },
    ],
    tareasProyecto: null,
    errorTarea: false,
    tareaSeleccionada: null,
  };
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const eliminaTarea = (tareaId) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: tareaId,
    });
  };

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminaTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
