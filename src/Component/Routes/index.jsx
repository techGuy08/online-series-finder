import React from "react";
import { Route, Switch } from "react-router-dom";
import Series from "../../containers/series";
import SingleSeries from "../../containers/singleSerie";
const Traffic = props => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route exact path="/series/:id" component={SingleSeries} />
  </Switch>
);

export default Traffic;
