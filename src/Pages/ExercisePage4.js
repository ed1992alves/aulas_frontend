import React, { useState, useRef, useEffect, useReducer } from "react";
import header from "../Style/images/header.svg";
import background0 from "../Style/images/background1.svg";
import background1 from "../Style/images/background2.svg";
import background2 from "../Style/images/background3.svg";
import { Tab } from "../Components/index";

export const ExercisePage4 = () => {
  const items = ["First Option", "Second Option", "Third Option"];
  const wrapperRef = useRef();
  const [selectedOption, changeSelectedOption] = useState(0);
  const initialState = { selectedOption: 0, nr_clicks: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "restartState":
        return { ...state, nr_clicks: 0 };
      case "changeState":
        return { nr_clicks: state.nr_clicks++, selectedOption: action.value };
      default:
        throw new Error();
    }
  }

  const changeBackground = () => {
    switch (state.selectedOption) {
      case 0:
        return background0;
      case 1:
        return background1;
      case 2:
        return background2;
    }
  };

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      dispatch({ type: "restartState" });
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  });

  return (
    <div className="center">
      <img src={header} className="header"></img>
      <Tab
        forwardRef={wrapperRef}
        items={items}
        callback={key => dispatch({ type: "changeState", value: key })}
        selectedOption={state.selectedOption}
      ></Tab>
      <div className="cliques">Numero de cliques: {state.nr_clicks}</div>
      <img src={changeBackground()}></img>
    </div>
  );
};
