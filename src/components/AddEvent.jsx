import { useState } from 'react'

const AddEvent = ({ onAdd }) => {
  const [eventTitle, setEventTitle] = useState('Bob')
  const [eventDate, setEventDate] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventOrganizer, setEventOrganizer] = useState('')
  const [errors, setErrors] = useState({})

  const onSubmit = (event) => {
    event.preventDefault()

    const newErrors = {}

    if (!eventTitle.trim()) {
      newErrors.title = 'Title is required'
    }
    if (!eventDate) {
      newErrors.date = 'Date is required'
    }
    if (!eventTime) {
      newErrors.time = 'Time is required'
    }
    if (!eventDescription.trim()) {
      newErrors.description = 'Description is required'
    }
    if (eventDescription.length > 100) {
      newErrors.description = 'Description is too long'
    }

    if (!eventLocation.trim()) {
      newErrors.location = 'Location is required'
    }
    if (!eventOrganizer.trim()) {
      newErrors.organizer = 'Organizer is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const newData = {
      title: eventTitle,
      date: eventDate,
      time: eventTime,
      description: eventDescription,
      location: eventLocation,
      organizer: eventOrganizer,
    }
    onAdd(newData)

    // Clear the form fields and errors
    setEventTitle('')
    setEventDate('')
    setEventTime('')
    setEventDescription('')
    setEventLocation('')
    setEventOrganizer('')
    setErrors({})
  }

  function autofill() {
    setEventTitle('Bob')
    setEventDate('2021-10-10')
    setEventTime('12:00')
    setEventDescription('A fun event')
    setEventLocation('123 Main St')
    setEventOrganizer('Alice')
  }


  return (
    <div className="add-event">
      <h1 className="form-heading">Add Event</h1>

      <form onSubmit={onSubmit} className="event-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className={`form-input ${errors.title ? 'input-error' : ''}`}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className={`form-input ${errors.date ? 'input-error' : ''}`}
          />
          {errors.date && <p className="error-message">{errors.date}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className={`form-input ${errors.time ? 'input-error' : ''}`}
          />
          {errors.time && <p className="error-message">{errors.time}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className={`form-input ${errors.description ? 'input-error' : ''}`}
          />
          {errors.description && (
            <p className="error-message">{errors.description}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            className={`form-input ${errors.location ? 'input-error' : ''}`}
          />
          {errors.location && (
            <p className="error-message">{errors.location}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="organizer" className="form-label">
            Organizer
          </label>
          <input
            type="text"
            id="organizer"
            name="organizer"
            value={eventOrganizer}
            onChange={(e) => setEventOrganizer(e.target.value)}
            className={`form-input ${errors.organizer ? 'input-error' : ''}`}
          />
          {errors.organizer && (
            <p className="error-message">{errors.organizer}</p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Add Event
        </button>
        <button onClick={autofill}>Autofill</button>
      </form>
    </div>
  )
}

export default AddEvent
