import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // 🔥 Auto close on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // 🔥 Handle link click
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div  className="logo">
        <Link className="logoText" to={"/"}>👨‍👩‍👦 Family</Link>
        </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Menu */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Me
          </Link>
        </li>
        <li>
          <Link to="/grandfather" onClick={handleLinkClick}>
            Grand-Father
          </Link>
        </li>
        <li>
          <Link to="/father" onClick={handleLinkClick}>
            Father
          </Link>
        </li>
        <li>
          <Link to="/mother" onClick={handleLinkClick}>
            Mother
          </Link>
        </li>
        <li>
          <Link to="/brother" onClick={handleLinkClick}>
            Brother
          </Link>
        </li>
      </ul>
    </nav>
  );
}
