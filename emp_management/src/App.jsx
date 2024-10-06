import React from "react";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import ViewAllEmployees from "./components/ViewAllEmployees";
import { Dashboard } from "./components/Dashboard";
import ViewMoreEmpComponent from "./components/ViewMoreEmpComponent";
import UpdateComponent from "./components/UpdateComponent";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "addemp",
          element: <AddEmployee />,
        },
        {
          path: "viewAllemp",
          element: <ViewAllEmployees />,
        },
        {
          path: "viewmore/:id",
          element: <ViewMoreEmpComponent />,
        },
        {
          path: "update/:id",
          element: <UpdateComponent />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
