import React from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <h1>Yanghui Xi</h1>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" activeClassName="active">
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
