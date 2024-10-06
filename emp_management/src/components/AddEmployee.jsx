import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AddEmployee = () => {
  let navigate = useNavigate();
  const [formData, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleSubmit = e => {
    e.preventDefault();
    console.log("form data=", formData);
    axios.post("http://localhost:5000/employee", formData);

    setForm({
      name: "",
      email: "",
      password: "",
    });
    alert("Employee added successfully")
    navigate("/viewAllemp");
  };

  function handleChange(e) {
    let { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  }
  return (
    <section style={{height:"90vh" , width:"100%", backgroundImage:`url("https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, paddingTop:"10vh", textAlign:"center", }}>

      <main style={{height:"70%" , width:"25%" , border:"solid white" , margin:"auto",borderRadius:"30px"}}>
      <h1 style={{  color:"white" , fontSize:"45px" , fontFamily:"system" }}>Add Employee</h1>
      <img src="assets/addemp.png" alt="" style={{height:"100px"}}/>
      <form onSubmit={handleSubmit} className="addEmpForm">
        <div>
          <input
            type="text"
            name="name"
            id="
      name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          style={{height:"45px", width:"300px", fontSize:"25px", textAlign:"left"}}/>
        </div>

        <div>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Enter Email"
            value={formData.email}
            style={{height:"45px", width:"300px", fontSize:"25px", textAlign:"left"}}
          />
        </div>

        <div>
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="password"
            value={formData.password}
            style={{height:"45px", width:"300px", fontSize:"25px", textAlign:"left"}}
          />
        </div>

        <button  style={{height:"45px", width:"300px", fontSize:"25px", textAlign:"center"}}>Submit</button>
      </form>
      </main>
      
    </section>
  );
};

export default AddEmployee;
