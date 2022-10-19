import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Protected from "./pages/Protected";
import Unprotected from "./pages/Unprotected";
import Home from "./pages/Home";
import SecuredRoute from "./SecuredRoute";

function App() {
  const [isAutheticated, setisAutheticated] = useState(false);

  function login() {
    setisAutheticated(true);
    alert("Logged in!");
  }

  function logout() {
    setisAutheticated(false);
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Link to Home Page</Link>
          </li>
          <li>
            <Link to="/protected">Link to Protected Page</Link>
          </li>
          <li>
            <Link to="/unprotected">Link to Unprotected Page</Link>
          </li>
        </ul>
        {isAutheticated ? (
          <button style={{ border: "2px solid red" }} onClick={logout}>
            Logout
          </button>
        ) : (
          <button style={{ border: "2px solid orange" }} onClick={login}>
            Login
          </button>
        )}
        <br />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <SecuredRoute
          path="/protected"
          component={Protected}
          auth={isAutheticated}
        />
        <Route path="/unprotected" component={Unprotected} />
      </Switch>
    </Router>
  );
}

export default App;
