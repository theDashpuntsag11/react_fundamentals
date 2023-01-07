import React from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
  /**
   *
   *      @Navbar
   *          + First thing you should notice here is if we use a link like this:
   *                  <li>
   *                      <a href="/"> Some Link </a>
   *                  </li>
   *            Whenever we click it a new request will be sent to the hosting server.
   *            So insteat Link component from "react-router-dom" is highly suggested.
   *
   */
  return (
    <header>
      <div>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet ups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add new meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
