import React from 'react';
import './Input.css';

export const Input = ({handleInputChange, input}) => {
  return (
    <div className='todo-input'>
        <input value={input.todo} onChange={(e) => handleInputChange(e.target.value)} />
    </div>
  )
}
