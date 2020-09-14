import React, { Component, useState } from "react";
import { hot } from "react-hot-loader";
import logo from "../public/edgar.png";
import Header from "./Components/Header";
import {
  ReactPage,
  ExercisePage,
  JSXPage,
  ReactHooksPage,
  ScopesPage,
  ExercisePage3,
  ExercisePage4,
  Avatar,
  FetchPage,
  PokemonPageWithPokemonName,
  Redux,
  ListaPokemon,
  ListaPokemonWithPagination,
  UnitTest
} from "./Pages";
import "./Style/style.less";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header activeClass="react" />
          <ReactPage />
        </Route>
        <Route exact path="/jsx">
          <Header activeClass="jsx" />
          <JSXPage />
        </Route>
        <Route exact path="/hooks">
          <Header activeClass="hooks" />
          <ReactHooksPage />
        </Route>
        <Route path="/exercise1">
          <Header activeClass="exercise1" />
          <ExercisePage />
        </Route>
        <Route exact path="/scopes">
          <Header activeClass="scopes" />
          <ScopesPage />
        </Route>
        <Route exact path="/exercise3">
          <Header activeClass="exercise3" />
          <ExercisePage3 />
        </Route>
        <Route exact path="/exercise4">
          <Header activeClass="exercise4" />
          <ExercisePage4 />
        </Route>
        <Route exact path="/fetch">
          <Header activeClass="fetch" />
          <FetchPage />
        </Route>
        <Route exact path="/pokemon/:name">
          <Header activeClass="fetch" />
          <PokemonPageWithPokemonName />
        </Route>
        <Route exact path="/avatar">
          <Avatar />
        </Route>
        <Route exact path="/listapokemon">
          <ListaPokemon startId={20} endId={80} />
        </Route>
        <Route exact path="/listapokemonfinal">
          <ListaPokemonWithPagination />
        </Route>
        <Route exact path="/redux">
          <Header activeClass="redux" />
          <Redux />
        </Route>
        <Route exact path="/unitTest">
          <Header activeClass="unitTest" />
          <UnitTest />
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(module)(App);
