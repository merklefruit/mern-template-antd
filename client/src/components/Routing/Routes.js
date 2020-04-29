import React from "react";
import { Route, Switch } from "react-router-dom";

// MAIN ROUTES
import Dashboard from "../Dashboard/Dashboard";

// EXTRA
import PrivateRoute from "../Routing/PrivateRoute";
import PageLayout from "../Layout/PageLayout";
import NotFound from "../Layout/NotFound";

const Routes = () => {
  return (
    <PageLayout>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  );
};

export default Routes;
