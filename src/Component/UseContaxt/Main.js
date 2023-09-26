import React, { createContext } from "react";
import First from "./First";

export const DetailsContext = createContext();

const Main = () => {
  const details = [
    { name: "yusuf", city: "navapur" },
    { name: "khuzaim", city: "navapur" },
    { name: "sifiyan", city: "navapur" },
    { name: "ibrahim", city: "navapur" },
  ];

  return (
    <div>
      <h1>main</h1>
      <DetailsContext.Provider value={details} >
        <First />
      </DetailsContext.Provider>
    </div>
  );
};

export default Main;
