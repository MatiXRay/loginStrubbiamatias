🚀 Pasos para iniciar correctamente:

Abrí una terminal en la carpeta del backend y ejecutá:

node server.js

Te debería mostrar:

corriendo en http://localhost:3000

En otra terminal, andá a la carpeta de tu frontend (vite-project) y ejecutá:

npm run dev

Esto te va a abrir tu React app en http://localhost:5173.

En tu Home.jsx, asegurate que el fetch apunte al puerto 3000 (que es el de tu backend actual):

useEffect(() => {
fetch("http://localhost:3000/api/zelda")
.then((res) => res.json())
.then((data) => setGames(data))
.catch((err) => console.error("Error cargando juegos:", err));
}, []);
