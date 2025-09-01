import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

// Servir carpeta dist
app.use(express.static(path.join(__dirname, "dist")));

// Enviar index.html para todas las rutas
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

const PORT = 5173;
app.listen(PORT, () => {
    console.log(`Frontend corriendo en http://localhost:${PORT}`);
});
