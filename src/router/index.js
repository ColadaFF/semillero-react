import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDashboard from "../components/products/dashboard";
import CreateProduct from "../components/products/form/create-form";
import EditProduct from "../components/products/form/edit-form";
import ProductDetails from "../components/products/details";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProductDashboard />
        </Route>
        <Route path="/create">
          <CreateProduct />
        </Route>
        <Route path="/:id/details">
          <ProductDetails />
        </Route>
        <Route path="/:id/edit">
          <EditProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
