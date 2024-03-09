import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {


  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    mobile: "",
    project: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
   const {data}= await axios.post(`http://localhost:5000/api/register`,user);
   console.log(data)
   alert('registered successfully..')
   setTimeout(() => {
     navigate("/clienttable")
   }, 1000);
  }
   
  return (
    <div className="row">
      <div className="col-md-6 offset-3">
        <div className="card p-5 my-3">
          <h3>Create Client</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                LASTNAME
              </label>
              <input
                type="lastname"
                className="form-control"
                name="lastname"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div> 

            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                value={user.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Project
              </label>
              <textarea
                className="form-control"
              
                name="project"
                value={user.project}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Create Client
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;


