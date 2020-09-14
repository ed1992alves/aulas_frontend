import React from "react";

export const JSXPage = () => (
  <React.Fragment>
    <h2> JSX </h2>
    <a href="https://reactjs.org/docs/introducing-jsx.html">Documentation</a>
    <h2> Props </h2>
    <p>
      {" "}
      Most components can be customized when they are created, with different
      parameters. These creation parameters are called props, short for
      properties.{" "}
    </p>
    <div className="examples">
      const Greeting = (props) => (<br></br>
      &nbsp;&nbsp;&lt;div&gt;Hello {"{props.name}"} &lt;/div&gt;
      <br></br>)<br></br>
      <br></br>
      &lt;View&gt;
      <br></br>
      &nbsp;&nbsp;&lt;Greeting name='Joao' age='21' /&gt;
      <br></br>
      &nbsp;&nbsp;&lt;Greeting name='Ana' age='19' /&gt;
      <br></br>
      &nbsp;&nbsp;&lt;Greeting name='Maria' age='17' /&gt;
      <br></br>
      &lt;/View>
    </div>
  </React.Fragment>
);
