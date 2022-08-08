import React from 'react'

export const AddTodo = ({handleAddTodo, editTodo}) => {
  return (
    <div>
        <button onClick={() => handleAddTodo()}
        style={{
            width: '150px'
        }}>{editTodo ? 'Edit' : 'Add'}</button>
    </div>
  )
}
