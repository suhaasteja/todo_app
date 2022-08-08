import React, {useState, useEffect} from 'react';
import './App.css';
import { AddTodo } from './Components/AddTodo/AddTodo';
import { CompletedTodos } from './Components/CompletedTodos/CompletedTodos';
import { Input } from './Components/Input/Input';
import { Navbar } from './Components/Navbar/Navbar';
import { TodoList } from './Components/TodoList/TodoList';


function App() {
  const [input, setInput] = useState({
    todo: '',
    strike: false
  });
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
    setInput({
      ...input,
      todo: e
    })
  };

  const handleAddTodo = () => {
    if(input.todo.trim()){
      if(editTodo){
        setTodoList(prev => {
          prev[todoEditIndex].todo = input.todo;
          return [...prev];
        })      
      }
      else{
        setTodoList(prev => [...prev, input]);
      }
      
      setEditTodo(false);
      setInput({
        todo: '',
        strike: false
      });
    }
  }

  const handleDeleteTodo = (index) => {
    setTodoList(prev => {
      let newTodoList = prev.filter(todo => prev.indexOf(todo) !== index);
      return newTodoList;
    })
    setEditTodo(false);

  } 

  const handleEditTodo = (index) => {
    setEditTodo(true);
    setInput(todoList[index]);
    setTodoEditIndex(index);
  }

  const handleCompeletedTodo = (index) => {
    setTodoList(prev => {
      prev[index].strike = !prev[index].strike;
      return [...prev];
    })
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
