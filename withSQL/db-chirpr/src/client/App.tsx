import * as React from "react";
import Main from "./views/Main";
import News from "./views/News";
import NavBar from "./Navbar";

const App: React.FC<IAppProps> = () => {
  return (
    <div className="container-fluid my-2 bg-danger">
      <NavBar />
      <div className="d-flex flex-row justify-content-center text-center my-2">
        <div className="col-md-3">
          <h3>Headlines</h3>
          <News />
        </div>
        <div className="col-md-6">
          <h3 id="timeline">Timeline</h3>
          <Main />
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
  );
};

interface IAppProps {}

export default App;
