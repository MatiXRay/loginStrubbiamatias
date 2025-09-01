import { useState, useEffect } from "react";

export const Home = ({ user, setUser }) => {
  const [showImage, setShowImage] = useState(false);
  const [games, setGames] = useState([]); // nuevo estado para los juegos

  const handleLogout = () => {
    setUser("");
  };

  const handleToggleImage = () => {
    setShowImage((prev) => !prev);
  };

  // useEffect para traer los datos del backend
  useEffect(() => {
    fetch("http://localhost:3000/api/zelda") // tu backend con dataMock
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error cargando juegos:", err));
  }, []);

  return (
    <>
      <h1>Holaa!</h1>
      <h2>{user}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        <button onClick={handleLogout}>Cerrar sesión</button>
        <button
          onClick={handleToggleImage}
          style={{
            backgroundColor: showImage ? "rgba(66, 6, 6, 1)" : "",
            color: showImage ? "#fff" : "",
            border: "none",
            padding: "0.5rem 1.2rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {showImage ? (
            "OCULTAR"
          ) : (
            <>
              Tocar con <strong>precaución</strong>
            </>
          )}
        </button>

        {showImage && (
          <img
            src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/505996599_30043606905255168_8251238091963582246_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHZduxSc1lu14eEpcQ2GiWnjzHSsawjQZOPMdKxrCNBk-8ZFGmqMGCwf9hBvzVUYjCIjXCl4IoHwhVjne7sRoLf&_nc_ohc=ccv3eUn4U7UQ7kNvwGSSw3-&_nc_oc=AdlRlEl5XoM3XLVKbR3BjyRYpQp5mIorPRxliZI5jEjRqYyb974p31l03SGVWIQA3xU&_nc_zt=23&_nc_ht=scontent.fcor10-3.fna&_nc_gid=6_igh0az8CZLrzMAFSdQ5g&oh=00_AfUIXD0GwIGlGwxdc12FQYUMx8jNKgGzoJFD2ODtOkzI8g&oe=68BBFE6F"
            alt="imagen de vicio travesti"
            style={{
              marginTop: "1rem",
              borderRadius: "8px",
            }}
          />
        )}

        {/* 🔹 Lista de juegos de Zelda */}
        <div style={{ marginTop: "2rem" }}>
          <h3>Juegos de Zelda más vendidos:</h3>
          <ul>
            {games.map((game) => (
              <li key={game.id}>
                {game.title} — {game.sales} millones
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
