import React from "react";
import NuevoProyecto from "../projects/NuevoProyecto";
import ListarProyectos from "../projects/ListarProyectos";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NuevoProyecto />
      <div className="proyectos">
        <h2>Tus proyectos</h2>
        <ListarProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
