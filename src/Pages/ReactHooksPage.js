import React from "react";
import { Grey, Orange, Green, Purple, Blue } from "../Components/Text/Text";

export const ReactHooksPage = () => (
  <React.Fragment>
    <h2> React Hooks </h2>
    <p>
      Hooks are a new addition in React 16.8. They let you use state and other
      React features without writing a class.
    </p>
    <h3> useState</h3>
    <div className="examples scopes">
      <Grey>// Declare a new state variable, which we'll call "count"</Grey>
      <div>
        <Purple>const </Purple> [count, setCount] = <Orange>useState</Orange>
        (0);
      </div>
    </div>
    <div className="padding">
      <p></p>
      <b>What does calling useState do?</b>
      <p>
        It declares a “state variable”. Normally, variables “disappear” when the
        function exits but state variables are preserved by React.
      </p>

      <b>What do we pass to useState as an argument?</b>
      <p>The only argument to the useState() Hook is the initial state.</p>
      <b>What does useState return?</b>
      <p>
        {" "}
        It returns a pair of values: the current state and a function that
        updates it. This is why we write const [count, setCount] = useState().
      </p>
    </div>
    <h3> useEffect</h3>
    <div className="examples scopes">
      <div>
        <Orange>useEffect</Orange>
        {"(() => {"}
        {"document.title = `You clicked ${count} times`;"}
        {"});"}
      </div>
    </div>
    <div className="padding">
      <p></p>
      By using this Hook, you tell React that your component needs to do
      something after render. React will remember the function you passed (we’ll
      refer to it as our “effect”), and call it later after performing the DOM
      updates. In this effect, we set the document title, but we could also
      perform data fetching or call some other imperative API.
      <p></p>
      <b>What does calling useState do?</b>
      <p>
        By using this Hook, you tell React that your component needs to do
        something after render.
      </p>
      <b>What do we pass to useState as an argument?</b>
      <p>
        Placing useEffect inside the component lets us access any state
        variables (or any props) right from the effect.
      </p>
      <b>Does useEffect run after every render?</b>
      <p>
        {" "}
        Yes! By default, it runs both after the first render and after every
        update.
      </p>
    </div>
    <h3> useRef</h3>
    <div className="examples scopes">
      <div>
        <Purple>const</Purple> refContainer = <Orange>useRef</Orange>
        (initialState)
      </div>
    </div>
    <p>
      useRef returns a mutable ref object whose .current property is initialized
      to the passed argument (initialValue). The returned object will persist
      for the full lifetime of the component.
    </p>
    <div className="examples scopes">
      <div>
        <Purple>function</Purple>
        <Orange> TextInputWithFocusButton </Orange> ()
        {"{"}
      </div>
      <div>
        <Purple nr_idents={1}>const</Purple> inputEl = <Orange>useRef</Orange>
        (null);
      </div>
      <div>
        <Purple nr_idents={1}>const</Purple> <Orange>onButtonClick</Orange>{" "}
        {"= () => {"}
      </div>
      <div className="nr_idents2">
        inputEl.current.<Orange>focus</Orange>();>
      </div>
      <div className="nr_idents1">{"};"}</div>
      <div className="nr_idents1">
        <Purple>return</Purple>(
      </div>
      <div className="nr_idents2">{"<>"}</div>
      <div className="nr_idents3">
        {"<"}
        <Green>input</Green> <Purple>ref</Purple>={"{"}
        <Green>inputEl</Green>
        {"}"} <Purple>type</Purple>=<Blue>"text"</Blue>
        {"/>"}
      </div>
      <div className="nr_idents3">
        {"<"}
        <Green>button</Green> <Purple>onClick</Purple>={"{"}
        <Orange>onButtonClick</Orange>
        {"}"}
        {">"} Focus the input {"</"}
        <Green>button</Green>
        {">"}
      </div>
      <div className="nr_idents2">{"</>"}</div>
      <div className="nr_idents1">);</div>
      {"}"}
    </div>
    <h3> useReducer</h3>
    <div className="examples scopes">
      <div>
        <Purple>const</Purple> [state, dispatch] = <Orange>useReducer</Orange>
        (reducer, initialState)
      </div>
    </div>
    <p>
      An alternative to useState. Accepts a reducer of type (state, action) =>
      newState, and returns the current state paired with a dispatch method
    </p>
    <p>
      useReducer is usually preferable to useState when you have complex state
      logic that involves multiple sub-values or when the next state depends on
      the previous one.
    </p>
    <div className="examples scopes">
      <div>
        {" "}
        <Purple>const</Purple> initialState = {"{count: "}
        <Blue>0</Blue>
        {"}"};
      </div>
      <p></p>
      <div>
        <Purple>function</Purple> <Orange>reducer</Orange>(state, action) {"{"}
      </div>
      <div>
        <Purple nr_idents={1}>switch</Purple> (action.type) {"{"}
      </div>
      <div>
        <Purple nr_idents={2}>case</Purple> <Blue>'increment'</Blue>:
      </div>
      <div>
        <Purple nr_idents={3}>return</Purple> {"{count: state.count + 1};"}
      </div>
      <div>
        <Purple nr_idents={2}>case</Purple> <Blue>'decrement'</Blue>:
      </div>
      <div>
        <Purple nr_idents={3}>return</Purple> {"{count: state.count - 1};"}
      </div>
      <div>
        <Purple nr_idents={2}>default:</Purple>
      </div>
      <div>
        <Purple nr_idents={3}>throw new</Purple> <Orange>Error</Orange>();
      </div>
      <div className="nr_idents1">{"}"}</div>
      <div>{"}"}</div>
      <p></p>

      <div>
        <Purple>function</Purple> <Orange>Counter</Orange>() {"{"}
      </div>
      <div>
        {" "}
        <Purple nr_idents={1}>const</Purple> [state, dispatch] ={" "}
        <Orange>useReducer</Orange>(reducer, initialState);
      </div>
      <div>
        {" "}
        <Purple nr_idents={1}>return</Purple> (
      </div>
      <div className="nr_idents2">{"<>"}</div>
      <div className="nr_idents3">Count: {"{state.count}"}</div>
      <div className="nr_idents3">
        {" "}
        {"<"}
        <Green>button</Green> <Purple>onClick</Purple>={"{ () =>"}{" "}
        <Orange>dispatch</Orange>
        {"({"} <Green>type</Green>
        {": "} <Blue>'decrement'</Blue> {" })} "}
        {"/>"} - {"</"}
        <Green>button</Green>
        {">"}
      </div>
      <div className="nr_idents3">
        {" "}
        {"<"}
        <Green>button</Green> <Purple>onClick</Purple>={"{ () =>"}{" "}
        <Orange>dispatch</Orange>
        {"({"} <Green>type</Green>
        {": "} <Blue>'increment'</Blue> {" })} "}
        {"/>"} + {"</"}
        <Green>button</Green>
        {">"}
      </div>
      <div className="nr_idents2">{"</>"}</div>
      <div className="nr_idents1">)</div>
      <div>}</div>
    </div>
  </React.Fragment>
);
