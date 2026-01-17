import useTaskStore from '../store/useTaskStore'

const TaskStats = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const completeAll = useTaskStore((state) => state.completeAll)

  // Calculate stats
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const active = tasks.filter((task) => !task.completed).length

  return (
    <div className="task-stats">
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{total}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{active}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{completed}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>
      {active > 0 && (
        <button
          onClick={completeAll}
          className="complete-all-button"
          aria-label="Mark all tasks as complete"
        >
          Complete All
        </button>
      )}
    </div>
  )
}

export default TaskStats
