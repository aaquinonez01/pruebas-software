import peliculaController from "../controllers/pelicula.controller.js";

import { Router } from "express";

const router = Router();

router.post("/", peliculaController.postPelicula);

router.get("/", peliculaController.getPeliculas);

router.get("/:id", peliculaController.getPelicula);

router.put("/:id", peliculaController.putPelicula);

router.delete("/:id", peliculaController.deletePelicula);

export default router;
