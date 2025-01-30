import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./src/routes/taskRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Usar as rotas de tarefas
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
