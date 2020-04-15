import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import SignIn from "./components/SignIn";

const App: React.FC<IAppProps> = () => {
  return (
    <Router>
      <div className="container-fluid my-2 bg-danger">
        <Switch>
          {/* I had plans for a sign-in route, but put a pin in it for now */}
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </div>
    </Router>
  );
};

interface IAppProps {}

export default App;
