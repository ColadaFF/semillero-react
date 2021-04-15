import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDashboard from "../components/products/dashboard";
import ProductForm from "../components/products/form";
import ProductDetails from "../components/products/details";

function empty() {
  return null;
}

const ProductEditForm = empty;

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProductDashboard />
        </Route>
        <Route path="/create">
          <ProductForm />
        </Route>
        <Route path="/:id/details">
          <ProductDetails />
        </Route>
        <Route path="/:id/edit">
          <ProductEditForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
