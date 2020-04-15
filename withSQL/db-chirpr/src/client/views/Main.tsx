import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BSL from "../components/BSL";
import Timeline from "./Timeline";
import News from "./News";
import AddChirp from "./AddChirp";
import EditChirp from "./EditChirp";
import NavBar from "../components/Navbar";
import Mentions from "./Mentions";

// FC hub where most routes are included
// Formatted with three basic columns for news, timeline, and mentions
const Main: React.FC<IMainProps> = (props) => {
  return (
    <Router>
      <div className="container-fluid my-2 bg-danger">
        <NavBar />
        <Route path="/bsl" component={BSL}></Route>
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
          <div id="mentions" className="col-md-3">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div className="bg-success h-100 border border-light"></div>
                )}
              ></Route>
              <Route path="/:id/mentions" component={Mentions}></Route>
            </Switch>
          </div>
        </div>
        <footer className="text-center align-self-center">
          <a className="nav-link text-dark" href="#title">
            To Top
          </a>
        </footer>
      </div>
    </Router>
  );
};

interface IMainProps {}

export default Main;
