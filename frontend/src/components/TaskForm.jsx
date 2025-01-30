import { useState } from "react";
import PropTypes from "prop-types"; // Importar PropTypes
import { createTask } from "../api/api";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = { title, description, status: "pendente" };
    await createTask(newTask);
    onTaskAdded();
    setTitle("");
    setDescription("");
  }

  return (
    <div className="container">
      <h3 className="text-center my-3">Adicionar Tarefa</h3>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <input 
          type="text" className="form-control w-50 mb-2" placeholder="Título" 
          value={title} onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          className="form-control w-50 mb-2" placeholder="Descrição"
          value={description} onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="btn btn-primary">Adicionar</button>
      </form>
    </div>
  );
}

//Adicionando validação de props
TaskForm.propTypes = {
  onTaskAdded: PropTypes.func.isRequired,
};
