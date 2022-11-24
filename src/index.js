import React from "react";
import ReactDOM from "react-dom/client";
import LessionOne from "./01PropsAndState/LessionOne";
import LessionTwo from "./02RoutingAndNaviagtion/LessonTwo";
import { BrowserRouter } from "react-router-dom";

/**
 *          @About index.js
 *    + index.js is the starting point of react application. Which means code written
 *      in here will be the first code to executed on the browsers.
 *
 */

/**
 *  @Lession01
 *  Selecting an element with id "root" and assigning this element into constant root variable
 *  And then assiging <App /> component as root variable's child :p
 *
 */
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<LessionTwo />);

/**
 *  @Lession02
 *
 *
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LessionTwo />
  </BrowserRouter>
);
