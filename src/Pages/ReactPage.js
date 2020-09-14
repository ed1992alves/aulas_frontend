import React from "react";

export const ReactPage = () => (
  <React.Fragment>
    <h2>React.Element</h2>
    <p>
      It is a simple object that describes a DOM node and its attributes or
      properties you can say. It is an immutable description object and you can
      not apply any methods on it.
    </p>
    <div className="examples">
      &lt;h1&gt;Hello, world&lt;/h1&gt;
      <br></br>
      <br></br>
      React.createElement( type, [props], [...children] )
    </div>
    <h2>React.Fragment</h2>
    <p>
      The React.Fragment component lets you return multiple elements in a
      render() method without creating an additional DOM element
    </p>
    <div className="examples">
      &lt;React.Fragment &gt;
      <br></br>
      &nbsp; &nbsp;&lt;ChildA /&gt;
      <br></br>
      &nbsp;&nbsp;&lt;ChildB /&gt;
      <br></br>
      &nbsp; &nbsp;&lt;ChildC /&gt;
      <br></br>
      &lt;/React.Fragment &gt;
    </div>

    <h2>React.Component</h2>
    <p>
      {" "}
      It is a function or class that accepts an input and returns a React
      element.{" "}
    </p>
    <div className="examples">
      <b> Class </b>
      {"class Welcome extends React.Component{"}
      <br></br>
      &nbsp;&nbsp;{"render() {}"}
      <br></br>
      {"}"}
      <br></br>
      <br></br>
      <b> Function</b>
      {"const Greeting = () => {}"}
    </div>
  </React.Fragment>
);
