import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./helpers/store";

// AUTH ROUTES
import Login from "./pages/Login";
import Register from "./pages/Register";

// MAIN ROUTES
import Home from "./pages/Home";

// EXTRA ROUTES
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
