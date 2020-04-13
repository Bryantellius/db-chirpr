import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timeline from "./Timeline";
import News from "./News";
import AddChirp from "./AddChirp";
import EditChirp from "./EditChirp";
import NavBar from "../Navbar";

const Main: React.FC<IMainProps> = (props) => {
  return (
    <Router>
      <div className="container-fluid my-2 bg-danger">
        <NavBar />
        <div className="d-flex flex-row justify-content-center text-center my-2">
          <div className="col-md-3">
            <h3>Real-World</h3>
            <News />
          </div>
          <div className="col-md-6">
            <Switch>
              <Route exact path="/" component={Timeline}></Route>
              <Route path="/add" component={AddChirp}></Route>
              <Route path="/:id/admin" component={EditChirp}></Route>
            </Switch>
          </div>
          <div className="col-md-3">
            <h3>Weather</h3>
          </div>
        </div>
        <footer className="text-center align-self-center">
          <a className="nav-link" href="#timeline">
            To Top
          </a>
        </footer>
      </div>
    </Router>
  );
};

interface IMainProps {}

export default Main;
