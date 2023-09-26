import React from "react";
import UseSecondChild from "./UseSecondChild";

const UseFirstChild = () => {
  return (
    <div>
      <h1>UseFirstChild</h1>
      <UseSecondChild />
    </div>
  );
};

export default UseFirstChild;
