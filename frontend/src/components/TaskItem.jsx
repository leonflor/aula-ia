import PropTypes from "prop-types"; // Importar PropTypes

export default function TaskItem({ task, onDelete }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <span className={`badge ${task.status === "concluído" ? "bg-success" : "bg-warning"}`}>
            {task.status}
          </span>
          <button className="btn btn-danger btn-sm mt-2" onClick={() => onDelete(task.id)}>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

// ✅ Adicionando validação de props
TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
