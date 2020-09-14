import { Dropdown } from "../Components";
import React, { useRef, useEffect, useState } from "react";

const items = ["Minor", "Safe", "Warning", "Critical"];

export const ExercisePage = () => {
  return (
    <React.Fragment>
      <Dropdown title="Teste" selected="Minor" items={items}></Dropdown>
    </React.Fragment>
  );
};
