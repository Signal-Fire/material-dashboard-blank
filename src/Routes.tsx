import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "components/templates/Layout";
import Dashboard from "views/Dashboard";

const PrivateRoute = ({ ...routeProps }) => {
  return <Route {...routeProps} />;
};

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute
        exact
        path="/"
        render={(props) => (
          <Layout>
            <Dashboard {...props} />
          </Layout>
        )}
      />
    </Switch>
  );
};

export default Routes;
