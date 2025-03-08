import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./partner.css";

const sports = ["Basketball", "Football", "Tennis", "Swimming", "Running"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const times = ["Morning", "Afternoon", "Evening"];

const generatePartners = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    name: `Partner ${i + 1}`,
    sport: sports[i % sports.length],
    level: levels[i % levels.length],
    availableTime: times[i % times.length],
    avatar: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${(i % 30) + 1}.jpg`,
    description: `Looking for a ${levels[i % levels.length]} level partner to train in ${sports[i % sports.length]} during the ${times[i % times.length]}.`,
  }));
};

const Partner = () => {
  const [partners, setPartners] = useState(generatePartners());
  const [filteredPartners, setFilteredPartners] = useState(partners);
  const [currentPage, setCurrentPage] = useState(1);
  const [chatPartner, setChatPartner] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    filterPartners();
  }, []);

  const filterPartners = () => {
    const sportFilter = document.getElementById("sport-filter").value;
    const levelFilter = document.getElementById("level-filter").value;
    const timeFilter = document.getElementById("time-filter").value;

    const filtered = partners.filter(
      (p) =>
        (sportFilter === "all" || p.sport === sportFilter) &&
        (levelFilter === "all" || p.level === levelFilter) &&
        (timeFilter === "all" || p.availableTime === timeFilter)
    );
    setFilteredPartners(filtered);
    setCurrentPage(1);
  };

  const renderPartners = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredPartners.slice(start, end);
  };

  return (
    <div className="container partner-container">
      <button className="btn-go-back" onClick={() => window.history.back()}>← Go Back</button>
      <h2 className="mb-4">Find Your Partner</h2>

      <div className="filter-container">
        <select id="sport-filter" className="form-select w-auto" onChange={filterPartners}>
          <option value="all">All Sports</option>
          {sports.map((sport) => (
            <option key={sport} value={sport}>{sport}</option>
          ))}
        </select>
        <select id="level-filter" className="form-select w-auto" onChange={filterPartners}>
          <option value="all">All Levels</option>
          {levels.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
        <select id="time-filter" className="form-select w-auto" onChange={filterPartners}>
          <option value="all">All Times</option>
          {times.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div id="partner-list">
        {renderPartners().map((partner) => (
          <div key={partner.name} className="partner-card">
            <img src={partner.avatar} alt={partner.name} className="partner-avatar" />
            <div className="partner-info">
              <div className="partner-name">{partner.name}</div>
              <div className="partner-bio">Sport: {partner.sport} | Level: {partner.level}</div>
              <div className="partner-availability">Available: {partner.availableTime}</div>
              <div className="partner-description">{partner.description}</div>
            </div>
            <button className="btn btn-primary" onClick={() => setChatPartner(partner)}>Chat</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="btn btn-secondary" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {Math.ceil(filteredPartners.length / itemsPerPage)}</span>
        <button className="btn btn-secondary" disabled={currentPage === Math.ceil(filteredPartners.length / itemsPerPage)} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>

      {chatPartner && (
        <div id="chat-modal" className="chat-modal">
          <div className="chat-header">
            <span>Chat with {chatPartner.name}</span>
            <button className="btn btn-sm btn-light" onClick={() => setChatPartner(null)}>X</button>
          </div>
          <div id="chat-body" className="chat-body"></div>
          <div className="chat-footer">
            <input type="text" id="chat-input" placeholder="Type a message..." />
            <button className="btn btn-primary btn-sm">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner;
