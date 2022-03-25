import React from "react";
import axios from "axios";

const UsersList = ({ users, setUserSelected, getUsers }) => {
  return (
    <div>
      <h1 className="title">
        Users List <i className="fa-solid fa-users"></i>
      </h1>
      <ul className="UsersList">
        {users.map((user) => (
          <li key={user.id} className="card">
            <div className="card__ctn">
              <div className="card__content">
                <h3>
                  {user.first_name} {user.last_name}{" "}
                  <i className="fa-solid fa-user"></i>
                </h3>
                <p>
                  {user.email} <i className="fa-solid fa-envelope"></i>
                </p>
                <p>
                  {user.birthday} <i className="fa-solid fa-cake-candles"></i>
                </p>
              </div>
              <div className="card__buttons">
                <button onClick={() => setUserSelected(user)}>
                  {" "}
                  <i className="fa-solid fa-pencil"></i>{" "}
                </button>
                <button
                  onClick={() =>
                    axios
                      .delete(
                        `https://users-crud1.herokuapp.com/users/${user.id}/`
                      )
                      .then(() => getUsers())
                  }
                >
                  {" "}
                  <i className="fa-solid fa-trash"></i>{" "}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
