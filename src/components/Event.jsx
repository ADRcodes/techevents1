import { useState } from 'react'

const Event = ({ event, onDelete }) => {
  const { title, date, time, description, location, organizer } = event

  // Generate a random number only once when the component is first rendered
  const [randomNum] = useState(() => {
    return Math.floor(Math.random() * 200) + 200 // Random number between 200 and 299
  })

  const imageUrl = `https://picsum.photos/${randomNum}/300`

  return (
    <div>
      <div className="eventcard">
        <div className="eventcard-image-wrapper">
          <img
            className="eventcard-img"
            src={imageUrl}
            alt="event photo"
          />
          <svg onClick={() => onDelete(event.id)} className="delete-icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M10 11V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M14 11V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M4 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>
        </div>
        <div className="eventcard-content">
          <h2 className="eventcard-title">{title}</h2>
          <p className="eventcard-date">{date}</p>
          <p className="eventcard-time">{time}</p>
          <p className="eventcard-description">{description}</p>
          <p className="eventcard-location">{location}</p>
          <p className="eventcard-organizer">{organizer}</p>
        </div>
      </div>
    </div>
  )
}

export default Event