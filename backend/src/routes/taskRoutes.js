import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// Definição das rotas
router.post("/tasks", createTask); // Criar uma nova tarefa
router.get("/tasks", getTasks); // Listar todas as tarefas
router.put("/tasks/:id", updateTask); // Atualizar uma tarefa pelo ID
router.delete("/tasks/:id", deleteTask); // Deletar uma tarefa pelo ID

export default router;
