import React from 'react';
import './navBtn.css'; 

const NavBtn = ({text}) => {
    return(
        <>
            <div className="btn-container"></div>
            <span>{text}</span>
        </>
    );
};

export default NavBtn;