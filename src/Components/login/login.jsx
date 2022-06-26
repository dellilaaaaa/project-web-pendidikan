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
      <form className="form">
        <h3>daftar yuk</h3>
        <label className="title">Name</label>
        <input
          className="addData"
          type="text"
          name="username"
          onChange={handleUser}
          value={dataLogin.username}
        />
        <label className="title">Email</label>
        <input
          className="addData"
          type="email"
          name="email"
          onChange={handleUser}
          value={dataLogin.email}
        />
        <label className="title">Password</label>
        <input
          className="addData"
          type="password"
          name="password"
          onChange={handleUser}
          value={dataLogin.password}
        />
        <div className="terms">
          <input className="addData" type="checkbox" />
          <label className="title">Accept terms and conditions</label>
        </div>
        <div className="submit">
          <button className="join" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
