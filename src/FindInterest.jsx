import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Art from './assets/Art.jpg'
import Sport from './assets/sport.jpeg'
import Tech from './assets/technology.jpg'
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png'


const FindInterest = () => {
    const navigate = useNavigate();

    const handleArt = () => {
        navigate('/events');
    }

    const handleTech = () => {
        navigate('/events');
    }

    const handleSport = () => {
        navigate('/events');
    }

    const handlePartner = () => {
        navigate('/partner');
    }

    const events = [
        { id: 1, title: 'Technology', img: Tech , handle: handleTech},
        { id: 2, title: 'Arts and Crafts', img: Art, handle: handleArt} ,
        { id: 3, title: 'Sports', img: Sport , handle: handleSport},
    ];

    

    return (
        <div>
        <header className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
            <a href="#" className="navbar-brand d-flex align-items-center">
                <img src="logo.png" width="100" height="40" alt="Logo" className="me-2" />
            </a>
            <div className="ms-auto">
                <button onClick={handlePartner} className="btn btn-outline-light">Partner</button>
            </div>
            </div>
        </header>
    
        <main>
            <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">TRYBE</h1>
                <p className="lead text-body-secondary">Connect, Discover, Meet.</p>
                </div>
            </div>
            </section>
    
            <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {events.map(event => (
                    <div className="col" key={event.id}>
                    <div className="card shadow-sm">
                        <img src={event.img} width="100%" height="225" alt={event.name} />
                        <div className="card-body">
                        <p className="card-text">{event.name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </main>
    
        <footer className="text-body-secondary py-5">
            <div className="container">
            <p className="float-end mb-1">
                <a href="#">Back to top</a>
            </p>
            <p className="mb-1">TRYBE</p>
            </div>
        </footer>
        </div>
    );
}
      
 export default FindInterest;
      