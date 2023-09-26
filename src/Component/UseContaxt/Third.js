import React,{useContext} from "react";

import { DetailsContext } from "./Main";

const Third = () => {

    const details=useContext(DetailsContext)
  return (
    <div>
      <h1>Third</h1>
      {details.map((item,index)=>{
        return(
            <li>{item.name} {item.city}</li>
        )
      })}
    </div>
  );
};

export default Third;
