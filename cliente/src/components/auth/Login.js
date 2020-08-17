import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [usuario, handleUsuario] = useState({
    email: "",
    password: "",
  });

  const [error, handleError] = useState(false);

  const { email, password } = usuario;

  const handleInput = (e) => {
    handleUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" && password.trim() === "") {
      handleError(true);
      return;
    }
    handleError(false);
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sobra-dark">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={handleInput}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={handleInput}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar sesión"
            />
          </div>
        </form>
        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
