import React from "react";
import "./Access.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaAmilia } from "react-icons/fa";
const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <h1 className="title">ACCESS TO INTERVIEW</h1>
        <form className="form">
        <span>Roll No : </span> 
          <div className="input-group">
            <label htmlFor="rollNumber" className="label">
            <FaAmilia className="icon-user" />
            </label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              placeholder="Roll Number"
              className="input"
            />
          </div>
          <span>Password : </span>
          <div className="input-group">
            
            <label htmlFor="password" className="label">
            <RiLockPasswordLine className="icon-user"/>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="input"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
       
      </div>
      <button className="exit-button">EXIT</button>
    </div>
  );
};

export default LoginPage;
