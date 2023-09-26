import React from "react";
import UseFifthChild from "./UseFifthChild";
import UseFourChild from "./UseFourChild";

const UseThreeChild = () => {
  return (
    <div>
      <h1>UseThreeChild</h1>
      <UseFourChild />
    </div>
  );
};

export default UseThreeChild;
