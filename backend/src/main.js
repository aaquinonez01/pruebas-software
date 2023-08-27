import cors from "cors";
import "dotenv/config";
import express from "express";

import categoriaRoute from "./routes/categoria.js";

import db from "./config/db.js";
import peliculaRoute from "./routes/pelicula.js";

const PORT = process.env.PORT ?? 3000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" })); // Aumenta el límite a 10MB (ajusta según tus necesidades)

db()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/categoria", categoriaRoute);
app.use("/api/v1/pelicula", peliculaRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
