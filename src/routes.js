import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Resume from "./components/organisms/resume";
import About from "./components/organisms/about";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
