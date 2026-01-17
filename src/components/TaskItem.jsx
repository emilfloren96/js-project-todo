// date-fns is a library for working with dates
// format: converts dates to readable strings like "Jan 15, 2024"
// isPast: checks if a date is in the past
// parseISO: converts ISO string ("2024-01-15T00:00:00.000Z") back to Date object
import { format, isPast, parseISO } from 'date-fns'
import useTaskStore from '../store/useTaskStore'

// Destructuring { task } from props - same as (props) => { const task = props.task }
const TaskItem = ({ task }) => {
  // Destructuring from store - get both functions at once
  // Unlike selectors, this subscribes to the whole store (less optimized but fine for actions)
  const { toggleTask, removeTask } = useTaskStore()

  const isOverdue = task.dueDate && !task.completed && isPast(parseISO(task.dueDate))

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      <div className="task-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            aria-label={`Mark task "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
          />
          <span className="checkmark" aria-hidden="true"></span>
        </label>
        <div className="task-details">
          <span className="task-text">{task.text}</span>
          <div className="task-metadata">
            <span className="task-created">
              Created: {format(parseISO(task.createdAt), 'MMM d, yyyy')}
            </span>
            {task.dueDate && (
              <span className={`task-due ${isOverdue ? 'overdue-label' : ''}`}>
                Due: {format(parseISO(task.dueDate), 'MMM d, yyyy')}
                {isOverdue && ' (Overdue)'}
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => removeTask(task.id)}
        className="delete-button"
        aria-label={`Delete task "${task.text}"`}
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem
