import React, { Fragment, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./helpers/store";
import setAuthToken from "./helpers/setAuthToken";
import { loadUser } from "./actions/auth";

//  @ ROUTING:
//  @ Routes that don't require authentication are put here.
//  @ All other routes are passed to the Routes component
//  @ in ./components/Routing/Routes

import Routes from "./components/Routing/Routes";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/GuestArea/Home";
import Product from "./components/GuestArea/Product";
import About from "./components/GuestArea/About";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/about" component={About} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
