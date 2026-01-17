import useTaskStore from '../store/useTaskStore'

const FilterControls = () => {
  const filter = useTaskStore((state) => state.filter)
  const setFilter = useTaskStore((state) => state.setFilter)

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ]

  return (
    <div className="filter-controls" role="group" aria-label="Task filters">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`filter-button ${filter === f.value ? 'active' : ''}`}
          aria-pressed={filter === f.value}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default FilterControls
