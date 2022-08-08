import React from 'react';
import './TodoList.css';

export const TodoList = ({todoList, handleDeleteTodo, handleEditTodo, handleCompeletedTodo}) => {
    return (
    <div>
        <ul>
            {todoList.map((todo, index) => {
                return (
                    <li style={{
                        width: '50%',
                        margin: '0 auto',
                        'display': 'flex',
                        'justifyContent': 'space-around',
                        'alignItems': 'center',
                    }}
                    key={index}>
                        <span style={{
                            textDecoration: todo.strike ? 'line-through' : ''
                        }}>
                            {todo.todo}
                        </span>
                        <div>
                            <span>
                                <button onClick={() => handleEditTodo(index)}>Edit</button>
                            </span>
                            <span>
                                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                            </span>
                            <span>
                                <button onClick={() => handleCompeletedTodo(index)}>{!todo.strike ? 'Strike' : 'Un-Strike'}</button>
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
