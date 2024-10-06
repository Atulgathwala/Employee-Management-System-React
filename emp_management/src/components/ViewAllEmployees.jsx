import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

var ViewAllEmployees = () => {
  let navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let { data } = await axios.get("http://localhost:5000/employee");
      // console.log(data);
      setApiData(data);
    };
    getData();
  }, []);

  let handleViewMore = id => {
    navigate(`/viewmore/${id}`);
  };

  let handleupdate = id => {
    navigate(`/update/${id}`);
  };

  let handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:5000/employee/${id}`);
      window.location.reload();
      // Handle post-delete actions here (e.g., navigate to another page or update the UI)
    } catch (error) {
      console.error("There was an error deleting the employee:", error);
      // Optionally handle the error here (e.g., show an error message)
    }
  };

  return (
    <section style={{height:"90vh" , width:"100%" ,backgroundImage:`url("https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, color:"white" }}>
      <h1 style={{ textAlign: "center", color:"white" }}>All Employee</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>

            <th colSpan={3}>Options</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map(val => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>
                  <button
                    onClick={() => {
                      handleViewMore(val.id);
                    }}
                  >
                    viewMore
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleupdate(val.id);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(val.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Outlet></Outlet>
    </section>
  );
};

export default ViewAllEmployees;
