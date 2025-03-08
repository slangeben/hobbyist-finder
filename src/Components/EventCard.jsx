import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EventCard({ eventName, location, time, imgSrc, description }) {
  return (
    <Card style={{ width: '20rem', height: '32rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} className="event-card">
      <Card.Img 
        variant="top" 
        src={imgSrc} 
        style={{ height: '180px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fw-bold text-primary">{eventName}</Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
            📍 <strong>{location}</strong>
            <br />
            🕒 <strong>{time}</strong>
          </Card.Text>
        </div>
        <Button variant="outline-primary" className="mt-3 w-100">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
