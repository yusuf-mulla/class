import React,{useContext} from "react";
import { UserContext,TestContext } from "./UseContaxt1";

const UseFifthChild = () => {
    const test = useContext(TestContext)
    const user= useContext(UserContext)
    console.log("test",test);
    console.log("user",user);
  return (
    <div>
      <h1>UseFifthChild</h1>
      <p>User :{user}</p>
      {test.map((item,index)=>{
        return(
            <li>{item.name}</li>
        )
      })}
    </div>
  );
};

export default UseFifthChild;
