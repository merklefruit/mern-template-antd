import React from "react";
import { Switch, Route } from "react-router-dom";

// MAIN ROUTES
import Home from "./pages/Home";

// ERROR ROUTES
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Switch>
      {/* MAIN ROUTES */}
      <Route exact path="/" component={Home}></Route>

      {/* ERROR ROUTES */}
      <Route component={PageNotFound}></Route>
    </Switch>
  );
}

export default App;
