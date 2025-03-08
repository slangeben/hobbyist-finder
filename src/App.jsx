import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from './EventPage'; // Your event listing page
import EventDetails from './EventDetails.jsx'; // The event details page
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import FindInterest from './FindInterest.jsx';
import Dashboard from './Dashboard.jsx';
import Partner from './partner.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Event listing page */}
        <Route path="/signup" element={<Signup />} /> {/* Event listing page */}
        <Route path="/interest" element={<FindInterest />} /> {/* Event listing page */}
        <Route path="/events" element={<EventPage />} /> {/* Event listing page */}
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Event details page */}
        <Route path="/partner" element={<Partner />} /> {/* Event details page */}

      </Routes>
    </Router>
  );
}

export default App;
