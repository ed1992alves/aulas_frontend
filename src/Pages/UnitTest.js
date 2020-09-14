import React, { useRef, useEffect, useState } from "react";
import { Grey, Orange, Green, Purple, Blue } from "../Components/Text/Text";

export const UnitTest = () => {
  return (
    <React.Fragment>
      <h1>Unit testing</h1>
      <h2>Jest</h2>
      <p>Jest is a JavaScript Testing Framework with a focus on simplicity</p>
      <h3>
        <a href="https://jestjs.io/docs/en/expect">Expect</a>
      </h3>
      <p>
        When you're writing tests, you often need to check that values meet
        certain conditions. expect gives you access to a number of "matchers"
        that let you validate different things.
      </p>
      <div className="examples scopes">
        <div>
          <Orange>expect</Orange>(selectColor()).<Orange>toBe</Orange>
          ('blue');
        </div>
        <div>
          <Orange>expect</Orange>(container).<Orange>toMatchSnapshot</Orange>();
        </div>
      </div>
      <h3>Describe / It</h3>
      <p>
        <bold>describe</bold> breaks your test suite into components.
        <bold>it</bold> is where you perform individual tests. You should be
        able to describe each test like a little sentence
      </p>
      <div className="examples scopes">
        <div>
          <Orange>describe</Orange>
          {"('area is calculated when', function() '{"}
        </div>
        <div className="nr_idents1">
          <Orange>it</Orange>
          {"('sets the radius', function() { ... });"}
        </div>
        <div className="nr_idents1">
          <Orange>it</Orange>
          {"('sets the diameter', function() { ... });"}
        </div>
        <div className="nr_idents1">
          <Orange>it</Orange>
          {"('sets the circumference', function() { ... });"}
        </div>
        {"}"});
      </div>
      <h2>React Testing Library</h2>
      <p>
        The React Testing Library is a very light-weight solution for testing
        React components.{" "}
      </p>
      <h3>Render()</h3>
      <p>
        render(Component) returns:
        <ul>
          <li>
            <a href="https://testing-library.com/docs/react-testing-library/cheatsheet">
              all the queries from DOM Testing Library
            </a>
          </li>

          <li>unmount function to unmount the component</li>
          <li>
            container reference to the DOM node where the component is mounted
          </li>
          <li>re-render function </li>
        </ul>
      </p>
      <div className="scopes examples">
        <div>
          <Blue>import</Blue> {"{ render, fireEvent }"} <Blue>from</Blue>{" "}
          <Green>'@testing-library/react'</Green>
        </div>

        <div>
          <Orange>test</Orange>(<Green>'loads items eventually'</Green>,{" "}
          <Blue>async</Blue> () => {"{"}
        </div>
        <div className="nr_idents1">
          {" "}
          const {"{(getByText, findByText)}"} = <Purple>render</Purple>(
          {"<Page />"})
        </div>
        <p></p>

        <div className="nr_idents1">
          <Grey>// Click button</Grey>
        </div>
        <div className="nr_idents1">
          fireEvent.<Purple>click</Purple>(<Purple>getByText</Purple>(
          <Green>'Load'</Green>)){" "}
        </div>
        <p></p>

        <div className="nr_idents1">
          <Blue>const</Blue> items = <Blue>await</Blue>{" "}
          <Purple>findByText</Purple>(<Orange>/Item #[0-9]: /</Orange>)
        </div>

        <div className="nr_idents1">
          <Purple>expect</Purple>(items).<Purple>toHaveLength</Purple>(
          <Green>10</Green>)
        </div>
        {"})"}
      </div>
    </React.Fragment>
  );
};
