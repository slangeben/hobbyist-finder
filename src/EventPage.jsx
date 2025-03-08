import { useNavigate } from 'react-router-dom';
import drawImg from './assets/creativity/drawing.jpg';
import BkbImg from './assets/sports/bkb-img.jpeg';
import badmintonImg from './assets/sports/badminton.jpg';
import EventCard from './Components/EventCard';

const events = [
    { id: 1, title: 'Tech Conference', description: 'An amazing tech event', img: drawImg, location: "Southwark", time: "18:00-20:00" },
    { id: 2, title: 'Music Festival', description: 'Live music from top artists', img: BkbImg, location: "Strand", time: "18:00-20:00" },
    { id: 3, title: 'Music Festival', description: 'Live music from top artists', img: badmintonImg, location: "Waterloo", time: "18:00-20:00" },
];

const EventPage = () => {
    const navigate = useNavigate();
  
    const handleCardClick = (id) => {
        navigate(`/event/${id}`); // Navigate to event details page
    };

    const handleProfile = () => {
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <h1 className="page-title">Recommended Events</h1>
            <button className="btn-profile" onClick={handleProfile}>Profile</button>
            <div className="event-list" style={{alignItems:'center'}}>
                {events.map((event) => (
                    <div
                        key={event.id}
                        onClick={() => handleCardClick(event.id)} // Handle card click to navigate
                        className="event-card"
                    >
                        <EventCard
                            eventName={event.title}
                            imgSrc={event.img}
                            location={event.location}
                            time={event.time}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventPage;
