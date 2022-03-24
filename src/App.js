import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  })

  return (
    <div className="App">
      <UsersList users={users} />
      <footer><h1 className="title">Jesús Marcelo Gutiérrez Bravo <i class="fa-solid fa-laptop-code"></i></h1></footer>
    </div>
  );
}

export default App;
