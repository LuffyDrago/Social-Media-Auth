import { Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="link">
          Vick
        </Link>
      </span>
      <ul className="list">
        <li className="listItem">
          <img src="" alt="" className="avatar" />
        </li>
        <li className="listItem">JohnDoe</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
