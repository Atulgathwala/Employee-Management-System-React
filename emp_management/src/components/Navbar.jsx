import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        height: "10vh",
        padding: "0 5vh",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow:"2px 5px 2px #000000"
      }}
    >
      <img
        src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/3bd878073b208bdad45534d68f5a44e2"
        alt=""
        style={{ height: "8vh" }}
      />
     <div style={{flexBasis:"55%" }}> <NavLink to="/" style={{fontSize:"50px" ,textDecoration:"none" }}>Home</NavLink></div>
    
    </nav>
  );
};

export default Navbar;
