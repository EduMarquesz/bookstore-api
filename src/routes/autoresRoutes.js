import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get('/autores/:id', AutorController.listarAutoresID)
    .post("/autores", AutorController.cadastrarAutores)
    .put("/autores/:id", AutorController.atualizarAutores)
    .delete("/autores/:id", AutorController.excluirAutores)
export default router;