import "./Class.css";
import React from "react";

export const Class = (props) => {
  const {cName,cModel,cColor,cType}=('')
  
  return (
    <div>
      <h1>Car Name: {cName} </h1>
      <h1>Car Model: {cModel}</h1>
      <h1>Car Color: {cColor}</h1>
      <h1>Car Type: {cType}</h1>
    </div>
  );
};
