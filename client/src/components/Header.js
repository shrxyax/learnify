import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/");
  };

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar dark-navbar">
      <div className="logo" onClick={() => goTo('/dashboard')} style={{ cursor: "pointer" }}>
        🌍 <span className="text-glow">Learnify</span>
      </div>
      <div className="nav-links">
        <button className="nav-btn neon-text" onClick={() => goTo('/about')}>About</button>
        <button className="nav-btn neon-text" onClick={() => goTo('/contact')}>Contact</button>
        <button className="nav-btn neon-text" onClick={() => goTo('/dashboard')}>Home</button>
        <button className="logout-btn neon-button" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
