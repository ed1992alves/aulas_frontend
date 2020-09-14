import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { useLayoutEffect, useEffect, useState } from "react";
import "../Style/style.less";

const Header = ({ activeClass }) => {
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const selected = document.querySelector(`.navigation div.${activeClass}`);
    const selectedBorder = document.querySelector(
      ".navigation + .selected_border"
    );
    if (selected) {
      setLeft(selected.offsetLeft);
      setWidth(selected.offsetWidth);
    }

    selectedBorder.style.left = `${left}px`;
    selectedBorder.style.width = `${width}px`;
  });
  return (
    <React.Fragment>
      <div className="nav_container">
        <div className="navigation" id="nav1">
          <div
            className={(activeClass == "react" ? "selected" : null, "react")}
          >
            <Link to="/">React</Link>
          </div>
          <div className={(activeClass == "jsx" ? "selected" : null, "jsx")}>
            <Link to="/jsx">JSX/Props</Link>
          </div>
          <div
            className={(activeClass == "hooks" ? "selected" : null, "hooks")}
          >
            <Link to="/hooks">React Hooks</Link>
          </div>
          <div
            className={(activeClass == "scopes" ? "selected" : null, "scopes")}
          >
            <Link to="/scopes">Scopes</Link>
          </div>
          <div
            className={(activeClass == "fetch" ? "selected" : null, "fetch")}
          >
            <Link to="/fetch">Fetch API</Link>
          </div>
          <div
            className={(activeClass == "redux" ? "selected" : null, "redux")}
          >
            <Link to="/redux">Redux</Link>
          </div>
          <div
            className={
              (activeClass == "unitTest" ? "selected" : null, "unitTest")
            }
          >
            <Link to="/unitTest">Unit Testing</Link>
          </div>
        </div>
        <div className="selected_border teste"></div>
      </div>
    </React.Fragment>
  );
};

export default Header;
