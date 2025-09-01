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
      <img
        src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/515710301_10236920867869531_6241866540789014667_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9eae26&_nc_eui2=AeG99cL3F6WuIxS0F1vv6x71gqr3cfQY2A-Cqvdx9BjYDz-Aw_wzK9Ta_hq3AuI3-6X0BFen01xTYAI563zIOPNA&_nc_ohc=J_gSkbhFUvcQ7kNvwHY0_Dy&_nc_oc=AdnIR35k7QSyFtqzhAk91ZvtU-fT43EHXZCBWfg3GvakvFzGDIH0QO6dd9LgtWJNxVc&_nc_zt=23&_nc_ht=scontent.fcor10-3.fna&_nc_gid=dYaWrSjxZVaNk3AKr4a_WA&oh=00_AfWEBOMI9_Q1cstpsIyEMmIymmPe1Q5xGU3ubM-N-jI4tQ&oe=68BC0CA5"
        alt="Vicio breaking bad"
        style={{
          marginTop: "1rem",
          borderRadius: "8px",
          width: "750px", // ajusta el ancho
          height: "auto", // mantiene la proporción
          display: "block", // necesario para centrar con margin
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></img>
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
