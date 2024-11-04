import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="Navbar">
        <div className="right">
          <h2 className="link">
            <Link className="link" to={"/"}>
              Astro
            </Link>
          </h2>
        </div>
        <div className="left">
          <ul>
            <li>
              <Link className="link" to={"/allpost"}>
                Post
              </Link>
            </li>
            <li>
              <Link className="link">Tags</Link>
            </li>
            <li>
              <Link className="link">Detail</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
