import React from "react";
import { HashRouter,  Route, Switch } from "react-router-dom";

import Home from "@/pages/home";
import User from "@/pages/user";
// export default

const Router = () => {
  return (
    <HashRouter >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
