import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersForm = ({ getUsers, userSelected, setUserSelected }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (userSelected) {
      setFirstName(userSelected.first_name);
      setLastName(userSelected.last_name);
      setEmail(userSelected.email);
      setPassword(userSelected.password);
      setBirthday(userSelected.birthday);
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      birthday,
    };
    if (userSelected) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          user
        )
        .then(() => {
          setUserSelected(null);
          getUsers();
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setBirthday("");
        });
    } else {
      axios.post("https://users-crud1.herokuapp.com/users/", user).then(() => {
        getUsers();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
      });
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="input-ctn">
        <label htmlFor="email">E-Mail: </label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="input-ctn">
        <label htmlFor="first">Name: </label>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>
      <div className="input-ctn">
        <label htmlFor="last">Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>
      <div className="input-ctn">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="input-ctn">
        <label htmlFor="birthday">Birthday: </label>
        <input
          type="date"
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
        />
      </div>
      <button>Upload</button>
    </form>
  );
};

export default UsersForm;
