import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  // const deleteUser = (id) => {
  //   axios
  //     .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
  //     .then(() => getUsers());
  // };

  return (
    <div className="App">
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
      />
      <UsersList
        users={users}
        getUsers={getUsers}
        setUserSelected={setUserSelected}
        // deleteUser={deleteUser}
      />
      <footer>
        <h2 className="title">
          Jesús Marcelo Gutiérrez Bravo{" "}
          <i className="fa-solid fa-laptop-code"></i>
        </h2>
      </footer>
    </div>
  );
}

export default App;
