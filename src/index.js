/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import LessionOne from "./01PropsAndState/LessionOne";
import LessionTwo from "./02RoutingAndNaviagtion/LessonTwo";
import { BrowserRouter } from "react-router-dom";

/**
 *    @Suggestion
 *      To see how every setions work
 *
 *
 *    @FileOverview
 *      + index.js is the starting point of react application. Which means code written
 *        in here will be the first code to executed on the browsers.
 *
 */

// --------------------------------------------------------------------------------------------

/**
 *  @Section01 Properties and State
 *
 *    - Selecting an element with id "root" and assigning this element into
 *      constant root variable.
 *    - And then assiging <App /> component as root variable's child :p
 */
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<LessionTwo />);

// --------------------------------------------------------------------------------------------

/**
 *  @Section02 Routing and Navigation
 *
 *
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LessionTwo />
  </BrowserRouter>
);

// --------------------------------------------------------------------------------------------

/**
 *  @Section03
 *
 */

// --------------------------------------------------------------------------------------------

/**
 *  @Section04
 *
 *
 */

// --------------------------------------------------------------------------------------------

/**
 *  @Section05
 *
 *
 */

// --------------------------------------------------------------------------------------------

/**
 *  @Section06
 *
 *
 */

// --------------------------------------------------------------------------------------------

/**
 *  @Section08
 *
 *
 */

// --------------------------------------------------------------------------------------------

/**
 *  @Section09
 *
 *
 */

// --------------------------------------------------------------------------------------------
