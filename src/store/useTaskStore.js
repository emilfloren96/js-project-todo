// Zustand is a state management library
// 'create' holds your app's state
import { create } from 'zustand'

// 'persist' is middleware that automatically saves state to localStorage
// so data survives page refreshes
import { persist } from 'zustand/middleware'

const useTaskStore = create(
  persist(
    // 'set' is a function to update state, 'get' retrieves current state
    (set, get) => ({
      tasks: [],
      filter: 'all', // all, active, completed
      darkMode: false,

      // Action to add a new task
      addTask: (text, dueDate = null) => {
        const newTask = {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
          dueDate: dueDate ? new Date(dueDate).toISOString() : null,
        }
        // set() receives current state and returns new state
        // Spread operator (...) creates a new array with old tasks + new task
        set((state) => ({ tasks: [...state.tasks, newTask] }))
      },

      removeTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }))
      },

      // map() creates a new array by transforming each item
      // For the matching task: spread all properties and flip 'completed'
      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        }))
      },

      // Mark all tasks as completed using map()
      completeAll: () => {
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, completed: true })),
        }))
      },

      setFilter: (filter) => {
        set({ filter })
      },

      toggleDarkMode: () => {
        set((state) => ({ darkMode: !state.darkMode }))
      },
    }),
    {
      // This key is used in localStorage to save/load the state
      name: 'todo-storage',
    }
  )
)

export default useTaskStore
