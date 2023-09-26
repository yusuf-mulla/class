import React, { useState, useRef, useEffect } from "react";

export const UseRefToDo = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [todo, setTodo] = useState([]);

  const refrence = useRef("");
  const refrence2 = useRef("");
  const refrence3 = useRef("");
  const refrence4 = useRef("");

  const handleAdd = () => {
    if (!text.trim()) return;
    setTodo([...todo, text]);
    setText("");

    refrence2.current.focus();
  };
  useEffect(() => {
    refrence.current.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={refrence}
      />
      <input
        type="text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
        ref={refrence2}
      />
      <input
        type="text"
        value={text3}
        onChange={(e) => setText3(e.target.value)}
        ref={refrence3}
      />
      <input
        type="text"
        value={text4}
        onChange={(e) => setText4(e.target.value)}
        ref={refrence4}
      />

      <button onClick={() => handleAdd()}>Add</button>

      <ol>
        {todo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </div>
  );
};
