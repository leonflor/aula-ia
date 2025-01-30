import connectDB from "../src/database.js";

async function seedDatabase() {
  try {
    const db = await connectDB();

    // Remover todas as tarefas antes de popular
    await db.run("DELETE FROM tasks");

    // Inserir tarefas de teste
    await db.run(`
      INSERT INTO tasks (title, description, status) VALUES 
      ('Estudar Node.js', 'Revisar conceitos básicos e avançados', 'pendente'),
      ('Criar API REST', 'Desenvolver uma API usando Express e SQLite', 'em progresso'),
      ('Testar endpoints', 'Verificar se todas as rotas estão funcionando', 'concluído')
    `);

    console.log("Banco de dados populado com sucesso!");
  } catch (error) {
    console.error("Erro ao popular o banco:", error.message);
  }
}

// Executar o seed
seedDatabase();
