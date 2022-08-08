import React from 'react';
import './CompletedTodos.css';

export const CompletedTodos = ({completedTodos}) => {
  return (
    <div>
        <h4>{completedTodos.length ? 'COMPLETED TODOS' : 'NO TODOS COMPLETED'}</h4>
        <ul>
            {
                completedTodos.map((todo, index) => {
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
                                <button onClick={() => {}}>edit</button>
                            </span>
                            <span>
                                <button onClick={() => {}}>delete</button>
                            </span>
                        </div>
                    </li>
                )
                })
            }
        </ul>
    </div>
  )
}
