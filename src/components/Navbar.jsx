import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      margin: "30px"
    }}>

      <Link key="home" to="/">Home</Link>
      <Link key="about" to="about">About</Link>
      <Link key="contact" to="contact">Contact</Link>
      <Link key="services" to="services">Services</Link>

    </div>
  );
};

export default Navbar;