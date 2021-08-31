import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/TodoList';

function App() {
      const dummy_todos = [
        { msg: 'Hit the gym', isDone: true },
        { msg: 'Pay bills', isDone: true },
        { msg: 'Meet George', isDone: false },
        { msg: 'Buy Eggs', isDone: false },
        { msg: 'Read a book', isDone: true }
    ]

    const deleteItem = (idx) => {
      console.log(idx)
      const newTodos = todos.filter((val, index) => {
          return index !== idx;
      })
      console.log(newTodos)
      setTodos(newTodos);
  }


    const [todos, setTodos] = useState(dummy_todos);
    
    const completeMsg = (idx) =>{
      const todosItem = [...todos]
      console.log(idx)
      const element = todosItem[idx]
      if (element.isDone === true){
        element.isDone = false
      }
      else{
        element.isDone = true

      }
      todosItem[idx] = element
      setTodos(todosItem)
      console.log(element.isDone)
    }
    const getMsg = (message) => {
      if (message === ''){
      alert('Alert')
    }
    else{
      console.log(message)
      setTodos((prvTodos) => {
        return [...prvTodos, {msg: message, isDone : false}]
      });
    }
      
    }
  return (
    <div className="App">
      <Header getMsg = {getMsg} />
      <ToDoList  todos = {todos} deleteItem = {deleteItem} completeMsg={completeMsg} />
    </div>
  );
}

export default App;
