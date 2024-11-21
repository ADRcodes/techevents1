
const Header = ({ onAdd, showAdd }) => {
  return (
    <header>
      <h1>Tech Events</h1>
      <button onClick={onAdd} className={`add-event-btn ${showAdd ? 'close' : ''}`}>
        {showAdd ? 'Close' : 'Add Event'}
      </button>
    </header>
  )
}

export default Header