import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
