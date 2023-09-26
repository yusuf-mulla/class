import React, { createContext } from "react";
import UseFirstChild from "./UseFirstChild";

export const TestContext = createContext();
export const UserContext = createContext();
const UseContaxt1 = () => {
  const test = [
    { name: "first Name", type: "Text" },
    { name: "midle Name", type: "Text" },
    { name: "last Name", type: "Text" },
  ];
  const user = "amer.sohel@gmail.com";
  return (
    <div>
      <h1>Use Contaxt1</h1>
      <TestContext.Provider value={test}>
        <UserContext.Provider value={user}>
            <UseFirstChild/>
        </UserContext.Provider>
      </TestContext.Provider>
    </div>
  );
};

export default UseContaxt1;
