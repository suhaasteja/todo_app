import React from 'react';
import './AddTodo.css'

export const AddTodo = ({handleAddTodo, editTodo}) => {
  return (
    <div className='add-btn'>
        <button onClick={() => handleAddTodo()}>{editTodo ? 'Edit' : 'Add'}</button>
    </div>
  )
}
