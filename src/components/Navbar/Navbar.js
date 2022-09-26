import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <button>Home</button>
      </Link>

      <Link to={"./login"}>
        <button>Log In</button>
      </Link>
      <Link to={"./cart"}>
        <button>Cart</button>
      </Link>
    </div>
  );
}

// <Link to={"/restaurant"}><button>Restaurant</button></Link>
