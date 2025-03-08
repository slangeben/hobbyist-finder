import React from 'react';
import { useParams } from 'react-router-dom';

// Mock event data for demonstration purposes
const eventsData = [
  { id: 1, title: 'Coding', description: 'An amazing tech event', img: './assets/technology.jpg', location: "Southwark", time: "18:00-20:00" },
  { id: 2, title: 'Art Festival', description: 'Live music from top artists', img: './assets/Art.jpg', location: "Strand", time: "18:00-20:00" },
  { id: 3, title: 'Sports Meet-Up', description: 'Join the sports community', img: './assets/sport.jpeg', location: "Waterloo", time: "16:00-18:00" },
];

const EventDetails = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const event = eventsData.find((e) => e.id === parseInt(id)); // Find the event by ID

  if (!event) {
    return <div>Event not found</div>; // If event not found, display this message
  }

  return (
    <div>
      <img src={event.img} alt={`${event.title} Image`} style={{ width: '100vw', height: '40vh' }} />
      <h1>{event.title}</h1>
      <h2>{event.time}</h2>
      <h2>Location: {event.location}</h2>
      <h2>Event Description:</h2>
      <p>{event.description}</p>

      <button onClick={() => alert('Registered ✅')}>Book</button>
    </div>
  );
};

export default EventDetails;