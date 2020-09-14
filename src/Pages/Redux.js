import React, { useRef, useEffect, useState } from "react";
import {
  Grey,
  Orange,
  Green,
  Purple,
  Blue,
  Yellow
} from "../Components/Text/Text";

export const Redux = () => {
  return (
    <React.Fragment>
      <h3>Redux</h3>
      <h2>Actions</h2>
      <p>
        Actions are payloads of information that send data from your application
        to your store. They are the only source of information for the store.
        You send them to the store using store.dispatch().
      </p>
      <div className="examples scopes">
        <div>{"{"}</div>
        <div className="nr_idents1">
          type: <Purple>ADD_TODO</Purple>,
        </div>
        <div className="nr_idents1">
          {" "}
          text: <Green>'Build my first Redux app'</Green>
        </div>
        <div>{"}"}</div>
      </div>
      <p>
        Types should typically be defined as string constants. Once your app is
        large enough, you may want to move them into a separate module.
      </p>
      <h3>Action Creators</h3>
      <p>Action creators are exactly that—functions that create actions. </p>
      <div className="examples scopes">
        <div>
          <Purple>function</Purple> <Orange>addTodo</Orange> (text) {"{"}
        </div>
        <div className="nr_idents1"> return {"{"}</div>
        <div className="nr_idents2">
          type: <Purple>ADD_TODO</Purple>,
        </div>
        <div className="nr_idents2">text</div>
        <div className="nr_idents1">{"}"}</div>
        <div>{"}"}</div>
      </div>
      <p>This makes them portable and easy to test.</p>

      <h2>Dispatch</h2>
      <p>
        Dispatches an action. This is the only way to trigger a state change.
      </p>
      <div className="examples scopes">
        <div>
          <Yellow>dispatch</Yellow>(<Yellow>addTodo</Yellow>(text))
        </div>
      </div>
      <h2>Reducer</h2>
      <p>
        Reducers specify how the application's state changes in response to
        actions sent to the store. Remember that actions only describe what
        happened, but don't describe how the application's state changes.
      </p>
      <p>
        The reducer is a pure function that takes the previous state and an
        action, and returns the next state. Things you should never do inside a
        reducer:
        <ul>
          <li>Mutate its arguments;</li>
          <li>Perform side effects like API calls and routing transitions;</li>
          <li>Call non-pure functions, e.g. Date.now() or Math.random().</li>
        </ul>
      </p>
      <div className="examples scopes">
        <div>
          <Purple>function</Purple> <Yellow>todoApp</Yellow>(state =
          initialState, action) {"{"}
        </div>
        <div className="nr_idents1">
          <Purple>switch</Purple> (action.type) {"{"}
        </div>
        <div className="nr_idents2">
          <Purple> case </Purple> <Yellow>SET_VISIBILITY_FILTER</Yellow>:
        </div>
        <div className="nr_idents2">
          <Purple>return</Purple> {"{"}{" "}
        </div>
        <div className="nr_idents3"> ...state, </div>
        <div className="nr_idents3"> visibilityFilter: action.filter </div>
        <div className="nr_idents2">{"}"})</div>
        <div className="nr_idents2">
          <Purple>default:</Purple>
        </div>
        <div className="nr_idents3">
          {" "}
          <Purple>return</Purple> state
        </div>
        <div className="nr_idents2">{"}"}</div>
        <div className="nr_idents1">{"}"}</div>
      </div>
      <h2>Store</h2>
      <p>
        The Store is the object that brings them together. The store has the
        following responsibilities:
      </p>
      <ul>
        <li>Holds application state;</li>
        <li>Allows access to state via getState();</li>
        <li>Allows state to be updated via dispatch(action);</li>
        <li>Registers listeners via subscribe(listener);</li>
      </ul>

      <div className="examples scopes">
        <div>
          <Purple>const</Purple> store = <Yellow>createStore</Yellow>(todoApp,
          window.<Purple>STATE_FROM_SERVER</Purple>)
        </div>
      </div>
      <p>
        {" "}
        You may optionally specify the initial state as the second argument to
        createStore()
      </p>
      <h2>Usage with React</h2>
      <h3>Provider</h3>
      <p>
        The {"<Provider /> "}makes the Redux store available to any nested
        components that have been wrapped in the connect() function. Since any
        React component in a React Redux app can be connected, most applications
        will render a {"<Provider>"} at the top level, with the entire app’s
        component tree inside of it.
      </p>
      <div className="examples scopes">
        <div>
          <Purple>const</Purple> store = createStore()
        </div>
        <p></p>
        <div>
          ReactDOM.<Yellow>render</Yellow>(
        </div>
        <div className="nr_idents1">
          {"<Provider store={"}
          <Green>store</Green>
          {"}>"}
        </div>
        <div className="nr_idents1">{"<App />"}</div>
        <div className="nr_idents1">{"</Provider>,"}</div>
        <div className="nr_idents1">
          <Green>document</Green>.getElementById(<Green>'root'</Green>)
        </div>
        )
      </div>
      <h3>Connect</h3>
      <p>The connect() function connects a React component to a Redux store.</p>
      <p>
        It provides its connected component with the pieces of the data it needs
        from the store, and the functions it can use to dispatch actions to the
        store.
      </p>
      <div className="examples scopes">
        {" "}
        <div>
          <Purple>function</Purple> <Orange>connect</Orange>(mapStateToProps?,
          mapDispatchToProps?, mergeProps?, options?)
        </div>{" "}
      </div>
      <p>
        The mapStateToProps and mapDispatchToProps deals with your Redux store’s
        state and dispatch, respectively.
      </p>
      <h4>mapStateToProps</h4>
      <p>
        If a mapStateToProps function is specified, the new wrapper component
        will subscribe to Redux store updates. This means that any time the
        store is updated, mapStateToProps will be called.
      </p>
      <p>Parameters</p>
      <ul>
        {" "}
        <li>state</li>
        <li>ownProps</li>
      </ul>
      <div class="examples scopes">
        <div>
          <Purple>const</Purple> mapStateToProps = state => ({"{"} todos:
          state.todos {"}"})
        </div>
      </div>
      <h4>mapDispatchToProps</h4>
      <p>Parameters</p>
      <ul>
        {" "}
        <li>dispatch</li>
        <li>ownProps</li>
      </ul>
      <div className="examples scopes">
        <div>
          <Purple>const</Purple> mapDispatchToProps = dispatch => {"{"}
        </div>
        <div className="nr_idents1">
          <Purple>return</Purple> {"{"}
        </div>
        <div className="nr_idents2">
          increment: () => dispatch({"{"} type: <Green>'INCREMENT'</Green> {"}"}
          )
        </div>
        <div className="nr_idents1">{"}"}</div>
        <div>{"}"}</div>
      </div>
      <h2>Selectors</h2>
      <p>
        A “selector” is simply a function that accepts Redux state as an
        argument and returns data that is derived from that state.{" "}
      </p>
      <div className="scopes examples">
        <div>selectUserIds = state => state.users.map(user => user.id);</div>
      </div>
      <h2>React-Redux Hooks</h2>
      <p>
        React Redux now offers a set of hook APIs as an alternative to the
        existing connect() Higher Order Component. These APIs allow you to
        subscribe to the Redux store and dispatch actions, without having to
        wrap your components in connect()
      </p>
      <h3>useSelector()</h3>
      <p>
        Allows you to extract data from the Redux store state, using a selector
        function.
      </p>
      <div class="examples scopes">
        <div>
          <Purple>const</Purple> result: any = useSelector(selector:{" "}
          <Green>Function</Green>)
        </div>
      </div>
      <p>
        The selector is approximately equivalent to the mapStateToProps. The
        selector will be called with the entire Redux store state as its only
        argument. The selector will be run whenever the function component
        renders. useSelector() will also subscribe to the Redux store, and run
        your selector whenever an action is dispatched.
      </p>
      <div class="examples scopes">
        <div>
          <Purple>import</Purple> React from <Green>'react'</Green>
        </div>
        <div>
          <Purple>import</Purple> {"{ useSelector }"} from{" "}
          <Green>'react-redux'</Green>
        </div>
        <div>
          <Purple> export const</Purple> CounterComponent = () => {"{"}{" "}
        </div>
        <div className="nr_idents1">
          {" "}
          const counter = <Orange>useSelector</Orange>(state => state.counter){" "}
        </div>
        <div className="nr_idents1">return {"<div>{counter}</div>"}</div>
        <div>{"}"}</div>
      </div>
      <h3>useDispatch()</h3>
      <div class="examples scopes">
        <div>
          <Purple>const</Purple> dispatch = useDispatch()
        </div>
      </div>
      <p>
        This hook returns a reference to the dispatch function from the Redux
        store. You may use it to dispatch actions as needed.
      </p>
      <div class="examples scopes">
        <div>
          <Purple>import</Purple> React from <Green>'react'</Green>
        </div>
        <div>
          <Purple>import</Purple> {"{ useDispatch }"} from{" "}
          <Green>'react-redux'</Green>
        </div>
        <div>
          {" "}
          <Purple>export const</Purple> CounterComponent = {"({ value }) => {"}{" "}
        </div>
        <div className="nr_idents1">
          {" "}
          <Purple>const</Purple> dispatch = <Orange>useDispatch</Orange>()
        </div>
        <div className="nr_idents1">
          {"return <"}
          <Purple>button</Purple>
          {" onClick={() => "}
          <Orange>dispatch</Orange>
          {"({ type: 'increment-counter' })}>Increment<"}
          <Purple>/button></Purple>
        </div>
        {"}"}
      </div>
    </React.Fragment>
  );
};
