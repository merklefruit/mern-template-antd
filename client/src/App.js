import React, { Fragment, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./helpers/store";
import setAuthToken from "./helpers/setAuthToken";
import { loadUser } from "./actions/auth";

// AUTH ROUTES
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

// MAIN ROUTES
import Home from "./pages/Home";

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
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
