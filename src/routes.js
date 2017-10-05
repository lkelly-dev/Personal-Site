import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Resume from "./components/organisms/resume";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/resume" component={Resume} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
