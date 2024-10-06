import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewMoreEmpComponent = porps => {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employee");
        setEmpData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    apiData();
  }, []);

  const ids = useParams();

  const employee = empData.find(i => i.id === ids.id);

  // console.log(Object.entries(employee));
  return (
    <>
      <h1 style={{ width: "20vw", margin: "auto" }}>Employee Details</h1>
      <section className="viewMoreSection">
       <img src="assets/person.png" alt=""  />
        <hr />
        {employee ? (
          <div>
            {Object.entries(employee).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        ) : (
          <p>No employee found with the specified ID.</p>
        )}
      </section>
    </>
  );
};

export default ViewMoreEmpComponent;
