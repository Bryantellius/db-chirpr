import React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-primary shadow rounded">
      <h1 className="w-50">Chirpr Bros.</h1>
      <div className="w-50 d-flex justify-content-end">
        <NavLink to="/">
          <button className="btn btn-outline-warning mx-1">Home</button>
        </NavLink>
        <NavLink to="/add">
          <button className="btn btn-outline-warning mx-1">Add Chirp</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
