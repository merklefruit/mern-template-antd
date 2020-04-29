import React, { Fragment, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./helpers/store";
import setAuthToken from "./helpers/setAuthToken";
import { loadUser } from "./actions/auth";

//  @ ROUTING:
//  @ Routes that don't require the main page Layout are found here.
//  @ All other routes are passed to the Routes component
//  @ in ./components/Routing/Routes

import Routes from "./components/Routing/Routes";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./components/Home/index";

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
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
