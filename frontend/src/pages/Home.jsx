import { useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

export default function Home() {
  const [update, setUpdate] = useState(false);

  function refreshTasks() {
    setUpdate(!update);
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Gerenciador de Tarefas</h1>
      <TaskForm onTaskAdded={refreshTasks} />
      <TaskList key={update} />
    </div>
  );
}
