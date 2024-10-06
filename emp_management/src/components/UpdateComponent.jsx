import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateComponent = () => {
  let navigate = useNavigate();
  let ids = useParams();
  let [UpdateEmp, setupdateEmp] = useState({});
  useEffect(() => {
    let apiData = async () => {
      let { data } = await axios.get(
        `http://localhost:5000/employee/${ids.id}`
      );
      setupdateEmp(data);
    };
    apiData();
  }, []);

  let handleChange = e => {
    let { name, value } = e.target;
    setupdateEmp({ ...UpdateEmp, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    axios.patch(`http://localhost:5000/employee/${ids.id}`, UpdateEmp);
    navigate("/viewAllemp");
  };

  return (
    <>
      <h1 style={{ width: "25vw", margin: "auto" }}>Update The Employee</h1>
      <section onSubmit={handleSubmit}>
        <form>
          <div>
            ID :
            <input
              type="text"
              value={UpdateEmp.id}
              name="id"
              onChange={handleChange}
              readOnly
            />
          </div>
          <div>
            Name :
            <input
              type="text"
              value={UpdateEmp.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            email :
            <input
              type="text"
              value={UpdateEmp.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div>
            Password :
            <input
              type="text"
              value={UpdateEmp.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <input type="Submit" />
        </form>
      </section>
    </>
  );
};

export default UpdateComponent;
