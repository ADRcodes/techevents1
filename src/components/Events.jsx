import Event from './Event'

const Events = ({ events, onDelete }) => {
  return (
    <div className="events-container">
      <h1 className="events-heading">Upcoming Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <Event key={event.id} event={event} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

export default Events