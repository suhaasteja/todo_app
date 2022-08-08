import React from 'react';
import './Input.css';

export const Input = ({handleInputChange, input}) => {
  return (
    <div>
        <input value={input} onChange={(e) => handleInputChange(e.target.value)} />
    </div>
  )
}
