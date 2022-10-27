import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 *          @About index.js
 *    + index.js is the starting point of react application. Which means code written in here
 *      will be the first code to executed on the browsers.
 *
 */

// Selecting an element with id "root" and assigning this element into constant root variable
// And then assiging <App /> component as root variable's child :p
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
