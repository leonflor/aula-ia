import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";

// Resolver corretamente o caminho do banco de dados
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, "../database/database.sqlite");

// Função para conectar ao banco
async function connectDB() {
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
}

// Criar a tabela se não existir
async function initDB() {
  const db = await connectDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT DEFAULT 'pendente',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log("Banco de dados pronto!");
}

initDB();

export default connectDB;
