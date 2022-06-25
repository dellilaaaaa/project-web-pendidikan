import React from "react";
import { useState } from "react";
import "./navbar.css";

function Navigasi() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="judul">SEVIMA</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">home</a>
        <a href="/about">about</a>
        <a href="/learning">learning</a>
        <a href="/contact">contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navigasi;
