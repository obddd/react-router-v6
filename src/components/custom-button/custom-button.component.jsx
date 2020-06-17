import React from 'react';
import './custom-button.style.css';

const CustomButton = ({children}) => {
    return (
        <button className='custom-button'>
            {children}
        </button>    
    );
};

export default CustomButton;