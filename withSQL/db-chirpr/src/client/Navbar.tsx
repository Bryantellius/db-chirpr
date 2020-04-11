import React from "react";

const NavBar: React.FC<INavProps> = () => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-primary">
      <h1 className="w-50">Chirpr</h1>
      <div className="w-25 text-right d-flex justify-content-around">
        <button className="btn btn-outline-dark">Home</button>
        <button className="btn btn-outline-dark">Add Chirp</button>
      </div>
    </div>
  );
};

interface INavProps {}

export default NavBar;
