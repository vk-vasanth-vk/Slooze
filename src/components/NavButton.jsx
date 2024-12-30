import React from 'react';
import './navButton.css'; 

const NavButton = ({text}) => {
  return (
    <div className='btn-container'>
        <button className="btn">
        <svg width="80px" height="40px" viewBox="0 0 180 60" className="border">
          <polyline points="179,1 179,80 1,80 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,80 1,80 1,1 179,1" className="hl-line" />
        </svg>
        <span>{text}</span>
        </button>
    </div>
  );
};

export default NavButton;
