import React from 'react';
import './register.css'; // Ensure the CSS is properly linked

const Register = ({ text }) => {
  return (
    <div className="container">
      <div className="center">
        <button className="btn">
          <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg>
          <span>{text}</span> {/* Dynamically display the text prop */}
        </button>
      </div>
    </div>
  );
};

export default Register;
