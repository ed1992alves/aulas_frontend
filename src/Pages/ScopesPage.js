import React, { useRef, useEffect, useState } from "react";
import { Grey, Orange, Green, Purple } from "../Components/Text/Text";

export const ScopesPage = () => {
  return (
    <React.Fragment>
      <h2>Scope in JavaScript</h2>
      <p>In the JavaScript language there are two types of scopes:</p>
      <ul>
        <li>Global Scope</li>
        <li>Local Scope</li>
      </ul>
      <p>
        Variables defined inside a function are in local scope while variables
        defined outside of a function are in the global scope. Each function
        when invoked creates a new scope.
      </p>
      <h2>Global Scope</h2>
      <p>
        A variable is in the Global scope if it's defined outside of a function.
      </p>
      <div className="examples scopes">
        <div>
          <Purple>var</Purple> name = <Green>'Hammad'</Green>;
        </div>
      </div>
      <p>
        Variables inside the Global scope can be accessed and altered in any
        other scope.
      </p>
      <div className="examples scopes">
        <div>
          <Purple>var</Purple> name = <Green>'Hammad'</Green>;
        </div>

        <div>
          console.log(name); <Grey nr_idents={1}>// 'Hammad'</Grey>
        </div>
        <br></br>
        <div>
          <Purple>function</Purple> <Orange>logName</Orange>() => {"{"}
        </div>
        <div>
          &nbsp;&nbsp; console.log(name);{" "}
          <Grey nr_idents={1}>
            //'name' is accessible here and everywhere else
          </Grey>
        </div>
        <div>{"}"}</div>
        <br></br>
        <div>
          <Orange>logName</Orange>();{" "}
        </div>
      </div>
      <h2>Local Scope</h2>
      <p>
        Variables defined inside a function are in the local scope. And they
        have a different scope for every call of that function.
      </p>
      <div className="examples scopes">
        <div>
          <Grey>//Global Scope</Grey>
        </div>
        <div>
          <Purple>function</Purple>
          <Orange> someFunction</Orange>(){" {"}
        </div>
        <div>
          <Grey nr_idents={1}>//Local Scope #1</Grey>
        </div>
        <div>
          <Purple nr_idents={1}>function</Purple>
          <Orange> someOtherFunction</Orange>(){" {"}
        </div>
        <div>
          <Grey nr_idents={2}>//Local Scope #2</Grey>
        </div>
        <div className="nr_idents1">{"}"}</div>
        <div>{"}"}</div>
        <br></br>
        <div>
          <Grey>//Global Scope</Grey>
        </div>
        <div>
          <Purple>function</Purple>
          <Orange> anotherFunction</Orange>(){" {"}
        </div>
        <Grey nr_idents={1}>//Local Scope #3</Grey>
        <div>{"}"}</div>
        <div>
          <Grey>//Global Scope</Grey>
        </div>
      </div>
      <h2>Block Statements</h2>
      <p>
        Block statements like <b>if</b> and <b>switch</b> conditions or{" "}
        <b>for</b> and <b>while</b> loops, unlike functions, don't create a new
        scope. Variables defined inside of a block statement will remain in the
        scope they were already in.
      </p>
      <div className="examples scopes">
        <div>
          <Purple>if </Purple>(<Orange>true</Orange>){" {"}
        </div>
        <div>
          <Grey nr_idents={1}>
            // this 'if' conditional block doesn't create a new scope{" "}
          </Grey>
        </div>
        <div>
          <Purple nr_idents={1}>var</Purple> name = <Green>'Hammad'</Green>;{" "}
          <Grey>// name is still in the global scope</Grey>
        </div>
        <div>{"}"}</div>
        <br></br>
        <div>
          console.log(name); <Grey>// 'Hammad'</Grey>
        </div>
      </div>
      <p>
        ECMAScript 6 introduced the <b>let</b> and <b>const</b> keywords. These
        keywords can be used in place of the var keyword.
      </p>
      <div className="examples scopes">
        <div>
          <Purple>var</Purple> name = <Green>'Hammad'</Green>;
        </div>
        <br></br>
        <div>
          <Purple>let</Purple> likes = <Green>'Coding'</Green>;
        </div>
        <div>
          <Purple>const</Purple> skills = <Green>'Javascript'</Green>;
        </div>
      </div>
      <p>
        Contrary to the <b>var</b> keyword, the <b>let</b> and <b>const</b>{" "}
        keywords support the declaration of local scope inside block statements.
      </p>
      <div className="examples scopes">
        <div>
          <Purple>if </Purple>(<Orange>true</Orange>){" {"}
        </div>
        <div>
          <Purple nr_idents={1}>var</Purple> name = <Green>'Hammad'</Green>;
        </div>
        <div>
          <Purple nr_idents={1}>let</Purple> likes = <Green>'Coding'</Green>;
        </div>
        <div>
          <Purple nr_idents={1}>const</Purple> skills = <Green>'skills'</Green>;
        </div>
        {"}"}
        <br></br>
        <br></br>
        <div>
          console.log(name) <Grey>//'Hammad'</Grey>
        </div>
        <div>
          console.log(likes){" "}
          <Grey>//Uncaught ReferenceError: likes is not defined</Grey>
        </div>
        <div>
          console.log(const){" "}
          <Grey>//Uncaught ReferenceError: likes is not defined</Grey>
        </div>
      </div>
      <p>
        Global scope lives as long as your application lives. Local Scope lives
        as long as your functions are called and executed.
      </p>
      <h2>Lexical Scope</h2>
      <p>
        Lexical Scope means that in a nested group of functions, the inner
        functions have access to the variables and other resources of their
        parent scope.{" "}
      </p>
      <div className="examples scopes">
        <div>
          <Purple>function</Purple> <Orange>grandfather</Orange>() {" {"}{" "}
        </div>
        <div>
          <Purple>var</Purple> name = <Green>'Hammad'</Green>;
        </div>
        <div>
          <Grey nr_idents={1}>// likes is not accessible here</Grey>{" "}
        </div>
        <div>
          <Purple nr_idents={1}>function</Purple> <Orange>parent</Orange>(){" "}
          {" {"}
        </div>
        <div>
          <Grey nr_idents={2}>// name is accessible here</Grey>
        </div>
        <div>
          <Grey nr_idents={2}> // likes is not accessible here </Grey>
        </div>
        <div>
          <Purple nr_idents={2}>function</Purple>
          <Orange> child</Orange>() {" {"}{" "}
        </div>
        <div>
          <Grey nr_idents={3}> // name is also accessible here </Grey>
        </div>
        <div>
          <Purple nr_idents={3}>var</Purple> likes = <Green>'Coding'</Green>;{" "}
        </div>
        <div className="nr_idents2">{"}"}</div>
        <div className="nr_idents1">{"}"}</div>
        <div>{"}"}</div>
      </div>
      <h2>Closures</h2>
      <p>
        A Closure is created when an inner function tries to access the scope
        chain of its outer function meaning the variables outside of the
        immediate lexical scope. Closures contain their own scope chain, the
        scope chain of their parents and the global scope.
      </p>
      <p>
        <b>
          A closure can not only access the variables defined in its outer
          function but also the arguments of the outer function.{" "}
        </b>
      </p>
      <p>
        A closure can also access the variables of its outer function even after
        the function has returned. This allows the returned function to maintain
        access to all the resources of the outer function.
      </p>
      <div className="examples scopes">
        <div>
          <Purple>function</Purple> <Orange>greet</Orange>() {" {"}{" "}
        </div>
        <div>
          <Purple nr_idents={1}>const</Purple> name = <Green>'Hammad'</Green>;
        </div>
        <div>
          <Purple nr_idents={1}>return function</Purple> () {" {"}
        </div>
        <div className="nr_idents2">console.log('Hi ' + name);</div>
        <div className="nr_idents1">{" }"}</div>
        <div>{" }"}</div>
        <br></br>
        <div>
          <Purple>let</Purple> greetLetter = <Orange>greet</Orange>();{" "}
          <Grey>// nothing happens, no errors</Grey>
        </div>
        <br></br>
        <div>
          {" "}
          <Grey>
            // calling greetLetter calls the returned function from the greet()
            function
          </Grey>
        </div>
        <div>
          <Orange>greetLetter()</Orange>; <Grey>// 'Hi Hammad'</Grey>
        </div>
      </div>
      <p>Exercise</p>
      <div className="examples scopes">
        <div>
          <Purple>function</Purple> <Orange>outer</Orange>() {" {"}
        </div>
        <div>
          <Purple nr_idents={1}>var</Purple> b = <Green>10</Green>;
        </div>
        <div>
          <Purple nr_idents={1}>var</Purple> c = <Green>100</Green>;
        </div>
        <div>
          <Purple nr_idents={1}>function</Purple> <Orange>inner</Orange>(){" "}
          {" {"}
        </div>
        <div>
          <Purple nr_idents={2}>var</Purple> a = <Green>20</Green>;
        </div>
        <div className="nr_idents2"> console.log("a= " + a + " b= " + b); </div>
        <div className="nr_idents2">a++;</div>
        <div className="nr_idents2">b++;</div>
        <div className="nr_idents1">{"}"}</div>
        <div>
          <Purple nr_idents={1}>return inner;</Purple>
        </div>
        <div>{"}"}</div>
        <br></br>
        <div>
          <Purple>var</Purple> X = <Orange>outer</Orange>();{" "}
          <Grey>// outer() invoked the first time</Grey>
        </div>
        <div>
          <Purple>var</Purple> Y = <Orange>outer</Orange>();{" "}
          <Grey>// outer() invoked the second time</Grey>
        </div>
        <div>
          <Orange>X</Orange>(); <Grey>// X() invoked the first time </Grey>
        </div>
        <div>
          <Orange>X</Orange>(); <Grey>// X() invoked the second time </Grey>
        </div>
        <div>
          <Orange>Y</Orange>(); <Grey>// Y() invoked the first time </Grey>
        </div>
      </div>
      <div className="examples scopes">
        A) X() invoked the first time
        <ol>
          <li className="correct">a= 20 b= 10</li>
          <li className="incorrect">a= 20 b= 0</li>
          <li className="incorrect">a= 0 b= 0</li>
          <li className="incorrect">a= 1 b= 11</li>
          <li className="incorrect">a= 20 b= 11</li>
          <li className="incorrect">a= 21 b= 10</li>
        </ol>
        <br></br>
        B) X() invoked the second time
        <ol>
          <li className="incorrect">a= 20 b= 10</li>
          <li className="incorrect">a= 20 b= 0</li>
          <li className="incorrect">a= 0 b= 0</li>
          <li className="incorrect">a= 1 b= 11</li>
          <li className="correct">a= 20 b= 11</li>
          <li className="incorrect">a= 21 b= 10</li>
        </ol>
        <br></br>
        C) Y() invoked the first time
        <ol>
          <li className="correct">a= 20 b= 10</li>
          <li className="incorrect">a= 20 b= 0</li>
          <li className="incorrect">a= 0 b= 0</li>
          <li className="incorrect">a= 1 b= 11</li>
          <li className="incorrect">a= 20 b= 11</li>
          <li className="incorrect">a= 21 b= 10</li>
        </ol>
      </div>
    </React.Fragment>
  );
};
