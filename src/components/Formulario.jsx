import "./Formulario.css";
import { useState } from "react";

export const Formulario = ({ setUser }) => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario == "" || contrasena == "") {
      setError(true);
      return;
    }

    setError(false);
    setUser(usuario);
  };

  return (
    <>
      <h1>Login</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        ></input>
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        ></input>
        <button>Iniciar</button>
      </form>
      {error && <p>Todos los campos con obligatorios</p>}
    </>
  );
};
