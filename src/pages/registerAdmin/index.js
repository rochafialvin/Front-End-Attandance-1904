import React from 'react'
import { Link, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from '../../utils/axios'

function RegisterAdmin() {
    const initFormState = {
      fullName: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
      };
    
    const [formState, setFormState] = useState(initFormState);
    const { fullName, email, phone,gender, password } = formState;

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };

    
    
      const onRegisterClick = async () => {
        try {
          const newUser = {
            fullName,
            email,
            phone,
            gender,
            password,
          };
          console.log(newUser);
          await axios.post("/users", newUser);
          setFormState(initFormState);
          alert("Register berhasil");

          window.location.reload(true);
          
        } catch (error) {
          alert(`${error.response.data.message}`);
          console.log({error});
          
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
                <div className='flex flex-column'>
                   <p>Select your gender</p>
                  <select
                    name="gender"
                    onChange={handleChange}
                    className="outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
                  >
                    <option 
                      value="other" 
                      className="bg-white"> 
                      Select Gender
                    </option>
                    <option 
                      className='text-base border-0 outline-none capitalize bg-white text-black' 
                      value="Male"
                    >
                      Male
                    </option>
                    <option 
                      className='text-base border-0 outline-none capitalize bg-white text-black' 
                      value="Female"
                    >
                      Female
                    </option>
                  </select>
                </div>
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
