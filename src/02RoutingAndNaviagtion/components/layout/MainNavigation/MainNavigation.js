import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

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
   *      @CSS_module
   *        + CSS module is a technique that will make sure which we can attach CSS files to
   *          specific component.
   *        + To bind your css files to specific component your css file name must end with
   *          ".module.css"
   *
   */
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MeetUps</div>
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
