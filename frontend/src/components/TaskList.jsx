import { useEffect, useState } from "react";
import { fetchTasks, deleteTask } from "../api/api";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const data = await fetchTasks();
      setTasks(data);
    }
    loadTasks();
  }, []);

  async function handleDelete(id) {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <h2 className="text-center my-3">Lista de Tarefas</h2>
      <div className="row">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
