import React from 'react';
import './TodoList.css';

export const TodoList = ({todoList, handleDeleteTodo, handleEditTodo, handleCompeletedTodo}) => {
    return (
    <div className='todo-list'>
        <ul className='todos-container'>
            {todoList.map((todo, index) => {
                return (
                    <li className='todo-item'
                    key={index}>
                        <span style={{
                            textDecoration: todo.strike ? 'line-through' : ''
                        }}>
                            {todo.todo}
                        </span>
                        <div>
                            <span>
                                <button onClick={() => handleEditTodo(index)} id="edit-btn">Edit</button>
                            </span>
                            <span>
                                <button onClick={() => handleDeleteTodo(index)} id="delete-btn">Delete</button>
                            </span>
                            <span>
                                <button onClick={() => handleCompeletedTodo(index)} id="strike-btn">{!todo.strike ? 'Strike' : 'Un-Strike'}</button>
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
