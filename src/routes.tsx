import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import ListBooksPage from "./pages/listBooks";
import EditBookPage from "./pages/editBook";
import CreateBookPage from "./pages/createBook";

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/page/list/books" push />}
      />
      <Route path="/page/list/books" render={() => <ListBooksPage />} />
      <Route
        exact
        path="/page/edit/book/:bookId"
        render={() => <EditBookPage />}
      />
      <Route exact path="/page/create/book" render={() => <CreateBookPage />} />
    </Switch>
  </Router>
);

export default Routes;
