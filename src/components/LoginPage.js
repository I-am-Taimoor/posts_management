import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({})

  const database = [
    {
      id: "1",
      name: "Taimoor",
      username: "tai_1@gmail.com",
      password: "12345678"
    },
    {
      id: "2",
      name: "Hamza",
      username: "tai_2@gmail.com",
      password: "12345678"
    },
    {
      id: "3",
      name: "Ali",
      username: "tai_3@gmail.com",
      password: "12345678"
    },
    {
      id: "4",
      name: "Naveed",
      username: "tai_4@gmail.com",
      password: "12345678"
    },
    {
      id: "5",
      name: "Saqib",
      username: "tai_5@gmail.com",
      password: "12345678"
    },
    {
      id: "6",
      name: "Suleman",
      username: "tai_6@gmail.com",
      password: "12345678"
    },
    {
      id: "7",
      name: "Abdul",
      username: "tai_7@gmail.com",
      password: "12345678"
    },
    {
      id: "8",
      name: "Tai_8",
      username: "tai_8@gmail.com",
      password: "12345678"
    },
    {
      id: "9",
      name: "Safeer",
      username: "tai_9@gmail.com",
      password: "12345678"
    },
    {
      id: "10",
      name: "Aqib",
      username: "tai_10@gmail.com",
      password: "12345678"
    },
  ];

  const errors = {
    email: "Invalid Email",
    password: "Invalid Password"
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="text-danger">{errorMessages.message}</div>
    );

  const handleLogin = (event) => {
    event.preventDefault();

    var email = document.forms[0].email.value
    var password = document.forms[0].password.value

    const userData = database.find((user) => user.username === email);

    if (userData) {
      if (userData.password !== password) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        navigate(`/home`, { state: { user: userData } });
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <center><h2 className='text-light'>Posts Manager</h2></center>
          <form>
            <div className="form-group my-3">
              <label className='text-light' htmlFor="email">Email address</label>
              <input type="email" className="form-control my-1" id="email" placeholder="Enter email" />
              {renderErrorMessage("email")}
            </div>
            <div className="form-group my-2">
              <label className='text-light' htmlFor="password">Password</label>
              <input type="password" className="form-control my-1" id="password" placeholder="Password" />
              {renderErrorMessage("password")}
            </div>
            <div className="form-group form-check my-2">
              <input type="checkbox" className="form-check-input" id="remember-me" />
              <label className="form-check-label text-light" htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary my-1" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
