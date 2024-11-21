import { useEffect, useState } from 'react'
import './App.css'
import AddEvent from './components/AddEvent'
import Header from './components/Header'
import Events from './components/Events'

function App() {

  const [events, setEvents] = useState([])
  const [showAddEvent, setShowAddEvent] = useState(false)


  const fetchEvents = async () => {
    const response = await fetch('http://localhost:3001/events')
    const events = await response.json()
    return events
  }



  const addEvent = async (event) => {
    const response = await fetch('http://localhost:3001/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    })

    const newEvent = await response.json()
    setEvents([...events, newEvent])
  }

  const deleteEvent = async (id) => {
    await fetch(`http://localhost:3001/events/${id}`, {
      method: 'DELETE',
    })

    setEvents(events.filter((event) => event.id !== id))
  }


  useEffect(() => {
    const getEvents = async () => {
      const eventsFromServer = await fetchEvents()
      setEvents(eventsFromServer)
    }
    getEvents()
  }, [])





  return (
    <>
      <Header onAdd={() => setShowAddEvent(!showAddEvent)} showAdd={showAddEvent} />
      <AddEvent onAdd={addEvent} />
      <Events onDelete={deleteEvent} events={events} />
    </>
  )
}

export default App
