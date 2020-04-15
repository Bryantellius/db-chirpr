import React from "react";
import { NavLink } from "react-router-dom";

// Overly ambitious goal tbc
const SignIn: React.FC<ISignInProps> = (props) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-primary">
        <h1 className="w-50">Chirpr Bros.</h1>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h1>Welcome To Chirpr Bros!</h1>
        <hr></hr>
        <div className="form-group text-center w-50">
          <h5>
            <u>Choose Your Character:</u>
          </h5>
          <select className="custom-select" id="userSelect">
            <option defaultChecked>Choose...</option>
            <option value="1">Mario</option>
            <option value="2">Luigi</option>
            <option value="3">Peach</option>
            <option value="4">Daisy</option>
          </select>
        </div>
        <NavLink to="/chirpr">
          <button className="btn btn-lg btn-outline-warning">Sign In</button>
        </NavLink>
      </div>
    </>
  );
};

interface ISignInProps {}

export default SignIn;
