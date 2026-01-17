import useTaskStore from '../store/useTaskStore'
import TaskItem from './TaskItem'
import EmptyState from './EmptyState'

const TaskList = () => {
  const allTasks = useTaskStore((state) => state.tasks)
  const filter = useTaskStore((state) => state.filter)

  // Filter tasks based on the current filter
  const filteredTasks = allTasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  if (allTasks.length === 0) {
    return <EmptyState />
  }

  if (filteredTasks.length === 0 && filter !== 'all') {
    return (
      <div className="empty-filter">
        <p>No {filter} tasks found</p>
      </div>
    )
  }

  return (
    <ul className="task-list" role="list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
