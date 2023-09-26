import { Button, TextField } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

export const UseRef1 = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [todo, setTodo] = useState([]);

  const inputRef = useRef("");
  const inputRef2 = useRef("");

  console.log(inputRef);

  const handleAdd = () => {
    // if(!text.trim())return
    setTodo([...todo, text, text1]);
    setText("");
    setText1("");
    inputRef2.current.focus();
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
        placeholder="type here......."
      />
      <input
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        ref={inputRef2}
        placeholder="type here......."
      />

      <Button variant="contained" color="secondary" onClick={() => handleAdd()}>
        Add
      </Button>

      <ol>
        {todo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </div>
  );
};
