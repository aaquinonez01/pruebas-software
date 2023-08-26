import { Router } from "express";

import categoriaController from "../controllers/categoria.controller.js";

const router = Router();

router.post("/", categoriaController.postCategoria);
router.get("/", categoriaController.getCategorias);

router.get("/:id", categoriaController.getCategoria);

router.put("/:id", categoriaController.putCategoria);

router.delete("/:id", categoriaController.deleteCategoria);

export default router;
