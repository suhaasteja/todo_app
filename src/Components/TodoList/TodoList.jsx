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
                        {todo}
                        <div>
                            <span>
                                <button onClick={() => handleEditTodo(index)}>Edit</button>
                            </span>
                            <span>
                                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                            </span>
                            <span>
                                {/* <button onClick={() => handleCompeletedTodo(index)}>Strike</button> */}
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
