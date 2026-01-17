import { useState } from 'react'
import useTaskStore from '../store/useTaskStore'

const TaskInput = () => {
  const [text, setText] = useState('')
  const [dueDate, setDueDate] = useState('')
  const addTask = useTaskStore((state) => state.addTask)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTask(text.trim(), dueDate || null)
      setText('')
      setDueDate('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <div className="input-group">
        <label htmlFor="task-text" className="visually-hidden">
          Task description
        </label>
        <input
          id="task-text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="task-input"
          aria-label="New task description"
        />
        <label htmlFor="task-due-date" className="visually-hidden">
          Due date (optional)
        </label>
        <input
          id="task-due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="task-date-input"
          aria-label="Task due date"
        />
        <button type="submit" className="add-button" aria-label="Add task">
          Add Task
        </button>
      </div>
    </form>
  )
}

export default TaskInput
