import React from "react";
import "./index.css";

import ReactDom, { createRoot } from "react-dom/client";
import App from "./App";

let root = createRoot(document.getElementById("root")).render(<App />);
