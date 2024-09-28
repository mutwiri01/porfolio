import  { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Mutwiri Kithinji Portfolio</div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="#hero" onClick={toggleMenu}>Home</a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
        </li>
        <li>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
