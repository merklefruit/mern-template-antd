import React from "react";
import { Route, Switch } from "react-router-dom";

//  @ ROUTES:
//  @ Here are all the routes that require authentication

// MAIN ROUTES
import Dashboard from "../UserArea/Dashboard/Dashboard";

// EXTRA
import PrivateRoute from "../Routing/PrivateRoute";
import PageLayout from "../UserArea/Layout/PageLayout";
import NotFound from "../UserArea/Layout/NotFound";

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
