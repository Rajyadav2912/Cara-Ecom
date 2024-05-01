import React from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../../assest/home/logo.png";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <nav className="header">
      {/* logo */}
      <div>
        <img src={logo} alt="" />
      </div>
      {/* link */}
      <ul className="navbar">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Shop</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>
            <FaCartArrowDown fontSize={30} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
