import React from "react";
import UseThreeChild from "./UseThreeChild";

const UseSecondChild = () => {
  return (
    <div>
      <h1>UseSecondChild</h1>
      <UseThreeChild />
    </div>
  );
};

export default UseSecondChild;
