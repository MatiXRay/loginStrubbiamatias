import "./App.css";
import { Formulario } from "./components/Formulario";
import { Home } from "./components/Home";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(""); // <-- Cambia a string

  return (
    <div className="App">
      {!user ? (
        <Formulario setUser={setUser} />
      ) : (
        <Home user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
