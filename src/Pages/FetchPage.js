import React, { useState, useRef, useEffect, useReducer } from "react";
import { PokemonPage } from "./index";
import { Grey, Orange, Green, Purple, Blue } from "../Components/Text/Text";

export const FetchPage = () => {
  return (
    <React.Fragment>
      <h2>Fetch API</h2>
      <p>
        The Fetch API provides a JavaScript interface for accessing and
        manipulating parts of the HTTP pipeline, such as requests and responses.
        It also provides a global fetch() method that provides an easy, logical
        way to fetch resources asynchronously across the network.
      </p>
      <div className="examples scopes">
        <div>
          <Orange>fetch</Orange>(<Green>'http://example.com/movies.json'</Green>
          )
        </div>
        <div className="nr_idents1">
          .<Orange>then</Orange>.((response) => {"{"}
        </div>
        <div className="nr_idents2">
          return response.<Orange>json</Orange>();
        </div>
        <div className="nr_idents1">{"}"})</div>
      </div>
      <p>
        The fetch() method can optionally accept a second parameter, an init
        object that allows you to control a number of different settings:
      </p>
      <div className="examples scopes">
        <Grey>// Default options are marked with *</Grey>
        <div>
          <Blue>await</Blue> <Orange>fetch</Orange>( url, {"{"}
        </div>
        <div className="nr_idents1">
          method: <Green>'POST'</Green>,{" "}
          <Grey>// *GET, POST, PUT, DELETE, etc.</Grey>
        </div>
        <div className="nr_idents1">
          mode: <Green>'cors'</Green>,{" "}
          <Grey>// no-cors, *cors, same-origin </Grey>
        </div>
        <div className="nr_idents1">
          cache: <Green>'no-cache'</Green>,{" "}
          <Grey>// *default, no-cache, reload, force-cache</Grey>
        </div>
        <div className="nr_idents1">
          credentials: <Green>'same-origin'</Green>,{" "}
          <Grey>// include, *same-origin, omit</Grey>
        </div>
        <div className="nr_idents1">headers: {"{}"},</div>
        <div className="nr_idents1">
          redirect: <Green>'follow'</Green>,{" "}
          <Grey>// manual, *follow, error</Grey>
        </div>
        <div className="nr_idents1">
          referrerPolicy: <Green>'no-referrer'</Green>,
        </div>
        <div className="nr_idents1">
          body: JSON.<Orange>stringify</Orange>(data) // body data type must
          match "Content-Type" header
        </div>
        {"}"});
      </div>
      <p>
        It returns a Promise that resolves to the Response to that request,
        whether it is successful or not.
      </p>
      <p>
        A Promise is an object representing the eventual completion or failure
        of an asynchronous operation.
      </p>
      <h3>Promise.prototype.then()</h3>
      <p>
        The then() method returns a Promise. It takes up to two arguments:
        callback functions for the success and failure cases of the Promise.
      </p>
      <div class="examples scopes">
        <div>
          <Blue>var</Blue> p1 = <Blue>new</Blue> <Orange>Promise</Orange>
          ((resolve, reject) => {"{"}
        </div>
        <div className="nr_idents1">
          <Orange>resolve</Orange>(<Green>'Success!'</Green>);
        </div>
        <div>{"}"});</div>
        <p></p>

        <div>
          p1.<Orange>then</Orange>(value => {"{"}
        </div>
        <div className="nr_idents1">
          console.<Orange>log</Orange>(value); <Grey>// Success!</Grey>
        </div>
        <div>{"} , reason => {"}</div>
        <div className="nr_idents1">
          console.<Orange>error</Orange>(reason); <Grey>// Error!</Grey>
        </div>
        <div>{"}"});</div>
      </div>
      <p>
        <b>Chaining:</b> Since the then method return a Promise that allows to
        chain
      </p>

      <div class="examples scopes">
        <div>
          <Blue>var</Blue> p2 = <Blue>new</Blue> <Orange>Promise</Orange>
          ((resolve, reject) => {"{"}
        </div>
        <div className="nr_idents1">
          <Orange>resolve</Orange>(<Purple>1</Purple>);
        </div>
        <div>{"}"});</div>
        <p></p>

        <div>
          p2.<Orange>then</Orange>(<Blue>function</Blue>(value) {"{"}
        </div>
        <div className="nr_idents1">
          console.<Orange>log</Orange>(value); <Grey>//1</Grey>
        </div>
        <div className="nr_idents1">
          <Blue>return</Blue> value + <Purple>1</Purple>;
        </div>
        <div>
          {"}"}.<Orange>then</Orange>(<Blue>function</Blue>(value){"{"}{" "}
        </div>
        <div className="nr_idents1">
          console.<Orange>log</Orange>(value) <Grey>//2</Grey>
        </div>
        <div>{"}"});</div>
      </div>
      <h3>Promise.all()</h3>
      <p>
        The Promise.all() method returns a single Promise that fulfills when all
        of the promises passed as an iterable have been fulfilled or when the
        iterable contains no promises or when the iterable contains promises
        that have been fulfilled and non-promises that have been returned.
      </p>
      <div class="examples scopes">
        <div>
          <Blue>const</Blue> promise1 = Promise.<Orange>resolve</Orange>(
          <Purple>3</Purple>);
        </div>
        <div>
          <Blue>const</Blue> promise2 = <Purple>42</Purple>;
        </div>
        <div>
          <Blue>const</Blue> promise3 = <Blue>new</Blue>{" "}
          <Orange>Promise</Orange>(<Blue>function</Blue>(resolve, reject) {"{"}
        </div>
        <div className="nr_idents1">
          <Orange>setTimeout</Orange>(resolve, 100, <Green>'foo'</Green>);
        </div>
        <div>{"}"});</div>
        <p></p>
        <div>
          Promise.<Orange>all</Orange>([promise1, promise2, promise3]).
          <Orange>then</Orange>(<Blue>function</Blue>(values) {"{"}
        </div>
        <div className="nr_idents1">
          console.<Orange>log</Orange>(values);{" "}
          <Grey>// expected output: Array [3, 42, "foo"]</Grey>
        </div>
        <div>{"}"});</div>
      </div>
      <h3>Fetch with Hooks</h3>
      <div class="examples scopes">
        <div>
          <Blue>const</Blue> [hasError, setErrors] = <Orange>useState</Orange>(
          <Green>false</Green>);
        </div>
        <div>
          <Blue>const</Blue> [planets, setPlanets] = <Orange>useState</Orange>(
          {"{}"});
        </div>
        <p></p>

        <div>
          <Blue>async function</Blue> <Orange>fetchData</Orange>() {"{"}
        </div>
        <div>
          {" "}
          <Blue>const</Blue> res = <Blue>await</Blue> <Orange>fetch</Orange>(
          <Green>"https://swapi.co/api/planets/4/"</Green>);
        </div>
        <div>res</div>
        <div className="nr_idents1">
          .<Orange>json</Orange>()
        </div>
        <div className="nr_idents1">
          .<Orange>then</Orange>(res => <Orange>setPlanets</Orange>(res))
        </div>
        <div className="nr_idents1">
          .<Orange>catch</Orange>(err => <Orange>setErrors</Orange>(err));
          <Grey> //Promise.prototype.catch()</Grey>
        </div>
        <div>{"}"}</div>
        <p></p>
        <div>
          <Orange>useEffect</Orange>(() => {"{"}
        </div>
        <div className="nr_idents1">
          <Orange>fetchData</Orange>();
        </div>
        <div>{"}"});</div>
      </div>

      <PokemonPage></PokemonPage>
    </React.Fragment>
  );
};
