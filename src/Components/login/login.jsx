import React, { useState } from "react";
import axios from "axios";
import "./login.css";
function Login() {
  let [dataLogin, setdataLogin] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleUser = (e) => {
    const { name, value } = e.target;
    setdataLogin({
      ...dataLogin,
      [name]: value,
    });
  };
  const submitData = async () => {
    await axios.post("http://localhost:3000/user", dataLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData();
  };
  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="username"
          onChange={handleUser}
          value={dataLogin.username}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleUser}
          value={dataLogin.email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleUser}
          value={dataLogin.password}
        />
        <div className="terms">
          <input type="checkbox" />
          <label>Accept terms and conditions</label>
        </div>
        <div className="submit">
          <button onClick={handleSubmit}>Create</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
