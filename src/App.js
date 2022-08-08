import React, {useState, useEffect} from 'react';
import './App.css';
import { AddTodo } from './Components/AddTodo/AddTodo';
import { CompletedTodos } from './Components/CompletedTodos/CompletedTodos';
import { Input } from './Components/Input/Input';
import { Navbar } from './Components/Navbar/Navbar';
import { TodoList } from './Components/TodoList/TodoList';


function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  const [todoEditIndex, setTodoEditIndex] = useState(0);
  // const [completedTodos, setCompletedTodos] = useState([]);
  const [strike, setStrike] = useState(false);

  useEffect(() => {
    setTodoList(localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []);
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);



  const handleInputChange = (e) => {
    setInput(e)
  };

  const handleAddTodo = () => {
    if(input.trim()){
      if(editTodo){
        setTodoList(prev => {
          prev[todoEditIndex] = input;
          return [...prev];
        })      
      }
      else{
        setTodoList(prev => [...prev, input]);
      }
      
      setEditTodo(false);
      setInput('');
    }
  }

  const handleDeleteTodo = (index) => {
    setTodoList(prev => {
      let newTodoList = prev.filter(todo => prev.indexOf(todo) !== index);
      return newTodoList;
    })
  } 

  const handleEditTodo = (index) => {
    setEditTodo(true);
    setInput(todoList[index]);
    setTodoEditIndex(index);
  }

  const handleCompeletedTodo = (index) => {
    
  }

  return (
    <div className="App">
      <Navbar />
      
      <Input handleInputChange={handleInputChange} input={input} />
      <AddTodo handleAddTodo={handleAddTodo} editTodo={editTodo}/>

      {
        !todoList.length ? 
        <h4>No Todos</h4> :
        <TodoList todoList={todoList} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} handleCompeletedTodo={handleCompeletedTodo} />
      }

      {/* <div style={{
        width: '50%',
        margin: '20px auto',
        border: '1px solid',
      }}></div> */}

      {/* <CompletedTodos completedTodos={completedTodos}/> */}
    </div>
  );
}

export default App;
