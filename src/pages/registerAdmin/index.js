import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from '../../utils/axios'

function RegisterAdmin() {
    const initFormState = {
      fullName: "",
        email: "",
        phone: "",
        password: "",
      };
    
    const [formState, setFormState] = useState(initFormState);
    const { fullName, email, phone, password } = formState;

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };
    
      const onRegisterClick = async () => {
        try {
          const newUser = {
            fullName,
            email,
            phone,
            password,
          };
          console.log(newUser);
          await axios.post("/users", newUser);
          setFormState(initFormState);
          alert("Register berhasil");
        } catch (error) {
          alert(`${error.message}`);
          console.log(error.message);
        }
      };


  return (
    <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Register now!</h1>
            <p className="lead">
            Get started and start working
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 offset-4">
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bold mb-3">Register</h5>
              
                <label>Full Name</label>
                <input
                  name="fullName"
                  onChange={handleChange}
                  placeholder="Full Name"
                  type="text"
                  className="form-control my-2"
                  
                />
                <label>E-mail</label>
                <input
                  name="email"
                  onChange={handleChange}
                  placeholder="E-mail"
                  type="text"
                  className="form-control my-2"
                  
                />
                <label>Phone Number</label>
                <input
                  name="phone"
                  onChange={handleChange}
                  placeholder="Phone Number"
                  type="text"
                  className="form-control my-2"
                  
                />
                <label>Password</label>
                <input
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  className="form-control my-2"
                 
                />
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <button
                    className="btn btn-primary mt-2"
                    onClick={onRegisterClick}
                  >
                    Register
                  </button>
                  
                  <Link to="/login">Or login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RegisterAdmin
