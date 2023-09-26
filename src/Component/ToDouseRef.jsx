import React, { useEffect, useState, useRef } from "react";

export const ToDouseRef = () => {
  const [text, setText] = useState("");
  const [toDo, setTodo] = useState([]);
  console.log("userefconsole",text);

//   const refrence1 = useRef("");
  
  const handleAdd = () => {
    setTodo([...toDo, text]);
  };

//   useEffect(() => {
//     refrence1;
//   }, []);
  return (
    <div>
      <input type="text" ref={setText} />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {toDo.map((item, index) => {
          return( <li>{item}</li>)
        })}
      </ol>
    </div>
  );
};
