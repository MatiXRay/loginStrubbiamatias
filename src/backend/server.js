import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Data mock: juegos de Zelda más vendidos
const zeldaGames = [
    { id: 1, title: "The Legend of Zelda: Breath of the Wild", sales: 31.15 },
    { id: 2, title: "The Legend of Zelda: Tears of the Kingdom", sales: 20.28 },
    { id: 3, title: "The Legend of Zelda: Ocarina of Time", sales: 14.00 },
    { id: 4, title: "The Legend of Zelda: Twilight Princess", sales: 8.85 },
    { id: 5, title: "The Legend of Zelda: Skyward Sword", sales: 3.70 },
];

// Endpoint para traer el mock
app.get("/api/zelda", (req, res) => {
    res.json(zeldaGames);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`corriendo en http://localhost:${PORT}`);
});
