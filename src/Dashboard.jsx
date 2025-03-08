import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div>
      {/* Floating Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom" style={{ backgroundColor: '#ffcc00', padding: '10px 20px', position: 'fixed', top: '0', width: '100%', zIndex: '1000', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#df6437' }}>TRYBE</a>
          <form className="d-flex mx-auto" role="search">
            <input className="search-box form-control me-2" type="search" placeholder="Search TRYBE" aria-label="Search" style={{ backgroundColor: '#fff3cd', border: 'none', padding: '8px 15px', borderRadius: '5px', color: '#df6437' }} />
          </form>
          <div className="d-flex align-items-center">
            <button className="btn reward-btn me-3" style={{ backgroundColor: '#df6437', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>💎 Reward Points</button>
            <img src="https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg" className="profile-img" alt="User Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #df6437' }} />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar" style={{ width: '250px', height: '100vh', backgroundColor: '#df6437', color: 'white', position: 'fixed', top: '60px', left: '0', padding: '20px' }}>
        <h5>Kevin</h5>
        <p> 💎 102 Points</p>
        <hr />
        <a href="dashboard.html" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '10px', borderRadius: '5px' }}>Dashboard</a>
        <a href="modules.html" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '10px', borderRadius: '5px' }}>Modules</a>
        <a href="forum.html" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '10px', borderRadius: '5px' }}>Community Forum</a>
        <hr />
        <h6>MY ACHIEVEMENTS</h6>
        <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '10px', borderRadius: '5px' }}>📜 Certificates</a>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ marginLeft: '260px', marginTop: '80px', padding: '20px' }}>
        <h2>Dashboard</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="dashboard-card text-center" style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ color: '#df6437' }}>0.47%</h3>
              <p>Creativity</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dashboard-card text-center" style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ color: '#df6437' }}>0.00%</h3>
              <p>Sports</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dashboard-card text-center" style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ color: '#df6437' }}>14.95%</h3>
              <p>Technology</p>
            </div>
          </div>
        </div>

        <h4 className="mt-4">Weekly Streak</h4>
        <div className="dashboard-card" style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <p>🔥 0 Streak Points</p>
          <p>0 / 30 Streak pts</p>
        </div>

        <h4 className="mt-4">Refer a Friend</h4>
        <div className="dashboard-card" style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <p>Earn rewards by inviting your friends!</p>
          <button className="btn btn-primary" style={{ backgroundColor: '#df6437', border: 'none', padding: '8px 15px', borderRadius: '5px' }}>Refer Now</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
