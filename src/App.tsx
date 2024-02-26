import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';
import UserProfile from './UserProfile';
import { User } from './types/user';

function App() {

  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const user:User = {
    name: "Tomoko Uehara",
    hobbies: ["Work out", "Running", "Game"],
    userId: 0,
    id: 0
  }

  const onClickFetchData = ()=>{
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res)=>{
      setTodos(res.data);
      console.log(res.data);
  })
  }

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color='blue' fontSize='18px' />
      <button onClick={onClickFetchData}>Fetch Data</button>
      {todos.map((todo)=>(
        <Todo 
          key={todo.id}
          title={todo.title} 
          userId={todo.userId} 
          completed={todo.completed}
         />
      ))}
    </div>
  );
}

export default App;
