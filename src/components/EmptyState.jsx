const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon" aria-hidden="true">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" opacity="0.2" />
          <path
            d="M40 60L50 70L80 40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.3"
          />
        </svg>
      </div>
      <h2 className="empty-state-title">No tasks yet</h2>
      <p className="empty-state-description">
        Start by adding your first task above. Stay organized and get things done!
      </p>
    </div>
  )
}

export default EmptyState
