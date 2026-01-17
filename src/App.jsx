import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import FilterControls from './components/FilterControls'
import DarkModeToggle from './components/DarkModeToggle'
import useTaskStore from './store/useTaskStore'

export const App = () => {
  const tasks = useTaskStore((state) => state.tasks)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">My Tasks</h1>
        <DarkModeToggle />
      </header>

      <main>
        <TaskInput />

        {tasks.length > 0 && (
          <>
            <TaskStats />
            <FilterControls />
          </>
        )}

        <TaskList />
      </main>
    </div>
  )
}
