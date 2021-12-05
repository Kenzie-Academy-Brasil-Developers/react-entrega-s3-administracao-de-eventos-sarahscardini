import React from "react";
import { Switch, Route } from "react-router";
import MainPage from "../pages/mainPage";
import PartyPage from "../pages/partyPage";
import GraduationPage from "../pages/graduationPage";
import WeddingPage from "../pages/weddingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/party">
        <PartyPage />
      </Route>
      <Route exact path="/graduation">
        <GraduationPage />
      </Route>
      <Route exact path="/wedding">
        <WeddingPage />
      </Route>
    </Switch>
  );
};

export default Routes;
