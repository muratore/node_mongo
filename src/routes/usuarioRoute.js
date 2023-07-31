import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const routerUsuario = express.Router()


routerUsuario
.get('/usuarios', UsuarioController.buscarTodos)
.get('/usuario/:id', UsuarioController.buscarPorId)
.post('/usuario', UsuarioController.inserir)
.put('/usuario/:id', UsuarioController.atualizarUsuario)
.delete('/usuario/:id', UsuarioController.excluirPorId)

export default routerUsuario